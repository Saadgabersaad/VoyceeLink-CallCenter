import {PRIMARY} from "modules/core/consts/theme";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import Status from "modules/callcenter/call-logs/components/Status";


export const labelValues1 = [
    { label: 'ID', value: '#CM9804888RA890' },
    { label: 'Language', value: 'Spanish - English' },
    { label: 'Campaign', value: 'Campaign Name' },
    { label: 'Client', value: 'Client Name' },
    { label: 'Speciality', value: 'Medical' },
];

export const labelValues2 = [
    { label: 'Type', value: 'Video Call', icon: <VideoCallOutlinedIcon sx={{color:PRIMARY}}/> },
    { label: 'Date', value: 'Fri Dec 16, 2022' },
    { label: 'Start Time', value: '--' },
    { label: 'End Time', value: '--' },
    { label: 'Duration', value: '--' },
];

export const labelValues3 = [
    { label: 'ID', value: '#7852'},
    { label: 'Name', value: 'Orlando Diggs' },
    { label: 'Status', value:<Status/> },

];