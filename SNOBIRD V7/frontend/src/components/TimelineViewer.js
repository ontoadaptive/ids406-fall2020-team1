import React, { useEffect, useState } from "react";
import axious from "../axios/instance";

const TimelineViewer = () => {
    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        axious.get('/bp')
        .then (response => {
            const data = response.data;
            setTimelineData(data)
        })
        .catch(error => {
            console.log("Error getting timeline data")
        });
    }, []);
}


export default TimelineViewer;