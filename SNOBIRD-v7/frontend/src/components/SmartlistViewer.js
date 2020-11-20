import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSmartlist } from "../actions/smartlist";
import { getSmartlistData, getSmartlistIsFetching } from "../selectors";

import { DataTable } from "carbon-components-react";
//import { LoadingIndicator } from "../components";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader
} = DataTable;

const SmartlistViewer = () => {
  const dispatch = useDispatch();
  const smartlistData = useSelector(getSmartlistData);
  console.log('SmartlistViewer', smartlistData);
  const isFetching = useSelector(getSmartlistIsFetching);

  useEffect(() => {
    dispatch(fetchSmartlist());
  }, [dispatch]);

  const headers = [
    {
      header: "Name",
      key: "user_id"
    },
    {
      header: "BP values",
      key: "bp_value"
    }
  ];

  return (
    <div>
      <DataTable
        rows={smartlistData}
        headers={headers}
        render={({ rows, headers, getHeaderProps }) => (
          <TableContainer title="Smartlist">
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map(header => (
                    // eslint-disable-next-line react/jsx-key
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    </div>
  );
};

export default SmartlistViewer;