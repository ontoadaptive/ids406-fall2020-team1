import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchObservations } from "../actions/observations";
import { getObservationsData, getObservationsIsFetching } from "../selectors";

import { DataTable } from "carbon-components-react";
import { LoadingIndicator } from "../components";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader
} = DataTable;

const ObservationsViewer = () => {
  const dispatch = useDispatch();
  const observationsData = useSelector(getObservationsData);

  const isFetching = useSelector(getObservationsIsFetching);

  useEffect(() => {
    dispatch(fetchObservations());
  }, [dispatch]);

  const headers = [
    {
      header: "Id",
      key: "id"
    },
    {
      header: "Type",
      key: "type"
    },
    {
      header: "Value",
      key: "value"
    },
    {
      header: "Patient",
      key: "patient"
    }
  ];

  return (
    <div>
      <LoadingIndicator active={isFetching} />
      <DataTable
        rows={observationsData}
        headers={headers}
        render={({ rows, headers, getHeaderProps }) => (
          <TableContainer title="Patient Observations">
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

export default ObservationsViewer;