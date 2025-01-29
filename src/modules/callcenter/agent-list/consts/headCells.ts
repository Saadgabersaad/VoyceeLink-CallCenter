import { HeadCell } from 'modules/core/consts/tableHead'

export const headCells: HeadCell[] = [
    {id: 'id', numeric: false, disablePadding: true, label: 'ID',},
    { id: 'status', numeric: false, disablePadding: true, label: 'Status' },
    { id: 'language', numeric: false, disablePadding: true, label: 'Language' },
    { id: 'campaign', numeric: false, disablePadding: true, label: 'Campaign' },
    { id: 'speciality', numeric: false, disablePadding: true, label: 'Speciality' },
    { id: 'client', numeric: false, disablePadding: true, label: 'Client' },
    { id: 'liveStatus', numeric: false, disablePadding: true, label: 'Live Status' },
    { id: 'eye', numeric: false, disablePadding: true, label: '' },
]


export const rows = [
    {  id: '#CM9804888RA891',status:'Active' ,language: 'English - Spanish' ,speciality:' ' ,client:'client Name',campaign:' ',liveStatus:'Available' },
    {  id: '#CM9804888RA892', status:'Inactive',language: 'English - Spanish' ,speciality:'UI/UX - speciality1 - speciality2' ,client:'client Name',campaign:'USA - UK ',liveStatus:'Available' },
    {  id: '#CM9804888RA893',status:'Inactive',language: 'English - Arabic - Spanish' ,speciality:'UI/UX - speciality1 - speciality2' ,client:'client Name', campaign:'USA',liveStatus:'Available'},
    {  id: '#CM9804888RA894',status:'Active' ,language: 'French - Spanish' ,speciality:'UI/UX - speciality1 - speciality2' ,client:'client Name',campaign:'USA - RS' ,liveStatus:'Available'},
    {  id: '#CM9804888RA895',status:'Active' ,language: 'English - Spanish' ,speciality:'UI/UX - speciality1 - speciality2' ,client:'client Name',campaign:'UK - USA - EGP',liveStatus:'Available' },
    {  id: '#CM9804888RA896', status:'Inactive',language: 'English - Spanish' ,speciality:'UI/UX - speciality1 - speciality2' ,client:'client Name', campaign:'USA - RS',liveStatus:'Available'},
    {  id: '#CM9804888RA897', status:'Active',language: 'English - Russian',speciality:'UI/UX - speciality1 - speciality2' , client:'client Name', campaign:'UK - USA',liveStatus:'Available'},
    {  id: '#CM9804888RA898', status:'Active',language: 'French - Spanish' ,speciality:'UI/UX - speciality1 - speciality2' ,client:'client Name', campaign:'USA',liveStatus:'Available'},
    {  id: '#CM9804888RA8994',status:'Inactive', language: 'English - Spanish - Spanish' ,speciality:'UI/UX - speciality1 - speciality2' ,client:'client Name',campaign:'USA' ,liveStatus:'Available'},
    {  id: '#CM9804888RA8992',status:'Active',language: 'English - Spanish - Arabic' ,speciality:'UI/UX - speciality1 - speciality2' ,client:'client Name', campaign:'UK - UAE',liveStatus:'Available'},
    {  id: '#CM9804888RA8991', status:'Active',language: 'Russian - Spanish - Arabic' ,speciality:'UI/UX - speciality1 - speciality2' ,client:'client Name', campaign:'USA - RS',liveStatus:'Available'},
    {  id: '#CM9804888RA899', status:'Active', language: 'English - Spanish' ,speciality:'UI/UX - speciality1 - speciality2' ,client:'client Name',campaign:'USA - UK - ar' ,liveStatus:'Available'},
    {  id: '#CM9804888RA810',status:'Active', language: 'English - Spanish' ,speciality:'UI/UX - speciality1 - speciality2' ,client:'client Name', campaign:'UK - USA - AR',liveStatus:'Available'}
];