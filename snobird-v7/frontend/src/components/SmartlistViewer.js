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
  const isFetching = useSelector(getSmartlistIsFetching);

  useEffect(() => {
    dispatch(fetchSmartlist());
  }, [dispatch]);

  const headers = [
    {
      header: "Id",
      key: "id"
    },
    {
      header: "Date",
      key: "datetime"
    },
    {
      header: "Patient",
      key: "patient"
    },
    {
      header: "Heart Rate",
      key: "heart_rate"
    },
    {
      header: "Unit",
      key: "unit"
    },
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