import React, { useEffect, useState } from "react";
import axios from "../axios/instance";

const TimelineViewer = () => {
    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        axios.get('/bp')
        .then (response => {
            const data = response.data;
            setTimelineData(data)
        })
        .catch(error => {
            console.log("Error getting timeline data")
        });
    }, []);

    return (
        <div>
            <p>output.json info goes here</p>
            {/* {timelineData.map((bp) =>
                [<p>{bp.header}</p>]
            )} */}
        </div>
    );


};



export default TimelineViewer;