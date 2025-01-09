import * as React from "react";
import {StyleMap} from "modules/callcenter/call-logs/shared/Logs";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import {PRIMARY} from "modules/core/consts/theme";

export const styles = {
    language: {
        English: {
            color: "#59A8D4", backgroundColor: "#EBF4FF4D", padding: "4px 8px", borderRadius: "5px",fontWeight:'600'
        },
        Spanish: {
            color: "#DB1F35", backgroundColor: "#FFF0F14D", padding: "4px 8px", borderRadius: "5px",fontWeight:'600'
        },
        Arabic: {
            color: "#00C851", backgroundColor: "#EBF4FF4D", padding: "4px 8px", borderRadius: "5px",fontWeight:'600'
        },
        Russian: {
            color: "#D1992A", backgroundColor: "#FFF9E44D", padding: "4px 8px", borderRadius: "5px",fontWeight:'600'
        },
    } as StyleMap,
    status: {
        Completed: {
            backgroundColor: "#3FC28A1A", color: "#3FC28A", borderRadius: "5px", padding: "0.3rem 0.5rem",
        },
        Missed: {
            backgroundColor: "#F45B691A", color: "#F45B69", borderRadius: "5px", padding: "0.3rem 0.5rem",
        },
        "In Progress": {
            backgroundColor: "#EFBE121A", color: "#EFBE12", borderRadius: "5px", padding: "0.3rem 0.5rem",
        },
    } as StyleMap,
};

//
// export const labelValues1 = [
//     { label: 'ID', value: '#CM9804888RA890' },
//     { label: 'Language', value: 'Spanish - English' },
//     { label: 'Campaign', value: 'Campaign Name' },
//     { label: 'Client', value: 'Client Name' },
//     { label: 'Speciality', value: 'Medical' },
// ];
//
// export const labelValues2 = [
//     { label: 'Type', value: 'Video Call',icon:<VideoCallOutlinedIcon sx={{color:PRIMARY}} aria-label="Video Call"  />},
//     { label: 'Date', value: 'Fri Dec 16, 2022' },
//     { label: 'Start Time', value: '--' },
//     { label: 'End Time', value: '--' },
//     { label: 'Duration', value: '--' },
// ];
//
// export const labelValues3 = [
//     { label: 'ID', value: '#7852'},
//     { label: 'Name', value: 'Orlando Diggs' },
//     { label: 'Status', value: '--' },
//
// ];