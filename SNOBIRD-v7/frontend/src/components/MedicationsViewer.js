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

const Beta = true;
const MedicationsViewer = () => {
  const [medicationsData, setMedicationsData] = useState([]); //locla localhost
  
  useEffect(() => {
    if (Beta) {
      axios.get(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_MEDICATIONS_KEY}`)
      //console.log(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_MEDICATIONS_KEY}`)
      //axios.get('http://127.0.0.1:8000/api/medication/')
      .then(response => {
        const data = response.data;
        setMedicationsData(data)
      })
      .catch(error => {
        console.log("Error getting medication data")
      });
    }

    else {
      axios.get('/medications')  
      .then(response => {
        const data = response.data;
        setMedicationsData(data)
      })
      .catch(error => {
        console.log("Error getting medication data")
      });
    }
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
                  {console.log(row)}
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

export default MedicationsViewer;