import React, { useEffect, useState } from "react";
import axios from "../axios/instance";

import { DataTable } from "carbon-components-react";

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
  const [observationsData, setObservationsData] = useState([]);

  useEffect(() => {
    axios.get('/observations')
    .then(response => {
      const data = response.data;
      setObservationsData(data)
    })
    .catch(error => {
      console.log("Error getting observation data")
    });
  }, []);

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
  );
};

export default ObservationsViewer;