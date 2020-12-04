import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchObservations } from "../actions/observations";
import { getObservationsData, getObservationsIsFetching } from "../selectors";
import { DataTable} from "carbon-components-react";
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
const Beta = true; 
const TimelineViewer = () => {
    const dispatch = useDispatch();
    const observationstData = useSelector(getObservationsData);

    const isFetching = useSelector(getObservationsIsFetching);

    useEffect(() => {
        dispatch(fetchObservations());
        }, [dispatch]);

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
            key: "value"
        },
        {
            header: "Unit",
            key: "unit"
        }
    ]
    return (
        <div>
            <LoadingIndicator active={isFetching} />
            <DataTable
                rows={observationstData}
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
        </div>
    );


};



export default TimelineViewer;