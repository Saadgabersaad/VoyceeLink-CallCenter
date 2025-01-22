import { HeadCell } from "modules/core/consts/tableHead";

export const headCells: HeadCell[] = [
    { id: 'callerName', numeric: false, disablePadding: true, label: 'caller Name' },
    { id: 'email', numeric: false, disablePadding: true, label: 'Email' },
    {id: 'type', numeric: false, disablePadding: true, label: 'Type',},
    { id: 'status', numeric: false, disablePadding: true, label: 'Status' },
    { id: 'video', numeric: false, disablePadding: true, label: 'Video Calls' },
    { id: 'voice', numeric: false, disablePadding: true, label: 'Voice Calls' },
    { id: 'dotted', numeric: false, disablePadding: true, label: '' },
]



export const rows = [
    { id: '1',  callerName: 'Natali Craig',email:"saad.gabe@languagebridge", type: 'Video',status:'Active', video:'15 -  (33m)',  voice: '15 -  (33m)'  },
    { id: '2', callerName: 'Natali Craig',email:"saad.gabe@languagebridge", type: 'Video&Audio',status:'Active', video:'15 -  (33m)',  voice: '15 -  (33m)'  },
    { id: '3', callerName: 'Natali Craig',email:"saad.gabe@languagebridge", type: 'Audio',status:'Inactive', video:'15 -  (33m)',  voice: '15 -  (33m)'  },
    { id: '5', callerName: 'Natali Craig',email:"saad.gabe@languagebridge", type: 'Video',status:'Inactive', video:'15 -  (33m)',  voice: '15 -  (33m)'  },
    { id: '4', callerName: 'Natali Craig',email:"saad.gabe@languagebridge", type: 'Audio',status:'Active', video:'15 -  (33m)',  voice: '15 -  (33m)'  },
    { id: '6',callerName: 'Natali Craig',email:"saad.gabe@languagebridge", type: 'Video&Audio',status:'Active', video:'15 -  (33m)',  voice: '15 -  (33m)'  },

];