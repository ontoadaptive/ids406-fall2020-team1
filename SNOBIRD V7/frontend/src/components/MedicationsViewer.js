import React, { useEffect, useState } from "react";
import axios from "../axios/instance";

import { DataTable } from "carbon-components-react"

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader
} = DataTable;

const MedicationsViewer = () => {
  const [medicationsData, setMedicationsData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/medication/')
    .then(response => {
      const data = response.data;
      setMedicationsData(data)
    })
    .catch(error => {
      console.log("Error getting medication data")
    });
  }, []);
  
  const headers = [
    {
      header: "Id",
      key: "id"
    },
    {
      header: "Medication Name",
      key: "name"
    },
    {
      header: "Dose",
      key: "dose"
    },
    {
      header: "Days",
      key: "days"
    },
    {
      header: "Times",
      key: "times"
    },
    {
      header: "Amount",
      key: "amount"
    }
  ];

  return (
    <DataTable
      rows={medicationsData}
      headers={headers}
      render={({ rows, headers, getHeaderProps}) => (
        <TableContainer title="Medication List">
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
    // <div style={{ backgroundColor: "LightGray", display: "block", marginRight: 'auto', marginLeft: 'auto', width: '300px' }} >
    //   <u>Medication Information</u>
    //   <p><strong>Id: </strong>{medicationsData.id}</p>
    //   <p><strong>Name: </strong>{medicationsData.name}</p>
    //   <p><strong>Dose: </strong>{medicationsData.dose}</p>
    // </div>
  );
};

export default MedicationsViewer;