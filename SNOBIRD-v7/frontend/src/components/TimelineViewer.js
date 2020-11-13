import React, { useEffect, useState } from "react";
import axios from "../axios/instance";

import { DataTable} from "carbon-components-react"

const {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableHeader
  } = DataTable;

const TimelineViewer = () => {
    const [timelineData, setTimelineData] = useState([]);
    
    useEffect(() => {
        axios.get('/bp')
        .then (response => {
            //console.log("ay", response.data);
            const data = response.data;
            const modifiedData = data.map((el) => {
              return {
                date: el.body.effective_time_frame.date_time,
                patient: el.header.user_id,
                heartRate: el.body.heart_rate.value,
                unit: el.body.heart_rate.unit,
                
              };
            })
            console.log("modifiedData", modifiedData);
            setTimelineData(modifiedData);
        })
        .catch(error => {
            console.log("Error getting timeline data")
        });
        
    }, []);

    const headers = [
        {
            header: "Date", 
            key: "date"
        },
        {
            header: "Patient",
            key: "patient"
        },
        {
            header: "Heart Rate", 
            key: "heartRate"
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