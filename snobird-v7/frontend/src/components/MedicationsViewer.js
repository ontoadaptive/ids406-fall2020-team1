import React, { useEffect, useState } from "react";
import { DataTable, Button } from "carbon-components-react"
import {betaInstance, instance} from "../axios/";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableToolbar,
  TableToolbarSearch,
  TableSelectAll,
  TableSelectRow,
  TableBatchActions,
  TableBatchAction
} = DataTable;

const Beta = false;
const MedicationsViewer = () => {
  const [medicationsData, setMedicationsData] = useState([]);

  useEffect(() => { 
    const url = Beta ? betaInstance : instance;
    url.get('/medication')
    
    //axios.get('http://127.0.0.1:8000/api/medication/')
    .then(response => {
      const data = response.data;
      setMedicationsData(data)
    })
    .catch(error => {
      console.log("Error getting medication data from API")
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

  const batchActionClick = selectedRows => () =>
    console.log(selectedRows.map(selection => (
      selection.cells.map(cells => (
        cells.value
      ))
    )));

  return (
    <>
      <DataTable
        rows={medicationsData}
        headers={headers}
        render={({ rows, headers,
          getHeaderProps, getSelectionProps,
          getBatchActionProps, onInputChange,  
          selectedRows
        }) => (
          <TableContainer title="Medication List">
            <TableToolbar>
              <TableBatchActions {...getBatchActionProps()}>
                <TableBatchAction onClick={batchActionClick(selectedRows)}>
                  Export
                </TableBatchAction>
              </TableBatchActions>
              <TableToolbarSearch onChange={onInputChange} />
            </TableToolbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableSelectAll {...getSelectionProps()}/>
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
                    <TableSelectRow {...getSelectionProps({ row })}/>
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

    </>  
  );
};

export default MedicationsViewer;