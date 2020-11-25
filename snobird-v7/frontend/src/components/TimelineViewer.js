import React, { useEffect, useState } from "react";
import axios from "../axios/instance";

import { DataTable} from "carbon-components-react"
import {betaInstance, instance} from "../axios/";

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
const TimelineViewer = () => {
    const [timelineData, setTimelineData] = useState([]);
    
    //switcher needs to be cleaned up
    useEffect(() => {
        const url = Beta ? betaInstance : instance;
        url.get('/observation')
        .then(response => {
            const data = response.data;
            setTimelineData(data)
        })
        .catch(error => {
            console.log("Error getting timeline data from API")
        });

    }, []);

    const headers = [
        {
            header: 'Id',
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
        }
    ]
    return (
        <DataTable
            rows={timelineData}
            headers={headers}
            render={({ rows, headers, getHeaderProps, getRowProps }) => (
                <TableContainer title = "Timeline List">
                    <Table>
                        <TableHead>
                            <TableRow>
                                {headers.map(header => (
                                    <TableHeader {...getHeaderProps({ header })} >
                                        {header.header}
                                    </TableHeader>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id} {...getRowProps({ row })}>
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



export default TimelineViewer;