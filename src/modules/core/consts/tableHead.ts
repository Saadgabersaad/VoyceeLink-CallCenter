export type Order = 'asc' | 'desc';

export interface Data {
    id: number;
    name: string;
    position: string;
    phoneNumber: number;
    email: string;
    department: string;
    status: string;
}


export interface HeadCell {
    disablePadding: boolean;
    id: string;
    label: string;
    numeric: boolean;
}

export const rows: Data[] = [
    { id: 1, name: 'Cupcake', position: '305', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },
    { id: 2, name: 'sadsd', position: '305', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },
    { id: 3, name: '[[[[[asdas]]]]]', position: '305', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },
    { id: 4, name: 'Cupcfsdake', position: '305', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },
    { id: 5, name: 'Cupcake', position: '305', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },
    { id:6, name: 'tyutyu', position: '305', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },
    { id: 7, name: 'oooooo', position: '305', phoneNumber: 1243222437, email: 'aliaa@gmail.com', department: 'dept-1', status: 'Active' },

];

export const headCells :readonly HeadCell[] = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'position', numeric: false, disablePadding: false, label: 'Position' },
    { id: 'phoneNumber', numeric: false, disablePadding: false, label: 'Phone Number' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
    { id: 'department', numeric: false, disablePadding: false, label: 'Department' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
];



export interface AttendanceData {
    id: number;
    date: string;
    checkIn: string;
    checkOut: string;
    Break: string;
    hours: string;
    status: string;
}
export const attendanceHeadCells :readonly HeadCell[] = [
    { id: 'data', numeric: false, disablePadding: true, label: 'Date' },
    { id: 'position', numeric: false, disablePadding: false, label: 'Check In' },
    { id: 'phoneNumber', numeric: false, disablePadding: false, label: 'Check Out' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Break' },
    { id: 'department', numeric: false, disablePadding: false, label: 'Working Hours' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
];




export const attendanceRows: AttendanceData[] = [
    { id: 1, date: 'July 01, 2023', checkIn: '09:28 AM', checkOut: "07:00 PM", Break: '00:30 Min', hours: '09:02 Hrs', status: 'On Time' },
    { id: 2, date: 'July 01, 2023', checkIn: '09:28 AM', checkOut: "07:00 PM", Break: '00:30 Min', hours: '09:02 Hrs', status: 'Late' },
    { id: 3, date: 'July 01, 2023', checkIn: '09:28 AM', checkOut: "07:00 PM", Break: '00:30 Min', hours: '09:02 Hrs', status: 'On Time' },
    { id: 4, date: 'July 01, 2023', checkIn: '09:28 AM', checkOut: "07:00 PM", Break: '00:30 Min', hours: '09:02 Hrs', status: 'Late' },
    { id: 5, date: 'July 01, 2023', checkIn: '09:28 AM', checkOut: "07:00 PM", Break: '00:30 Min', hours: '09:02 Hrs', status: 'On Time' },
    { id: 6, date: 'July 01, 2023', checkIn: '09:28 AM', checkOut: "07:00 PM", Break: '00:30 Min', hours: '09:02 Hrs', status: 'On Time' },
    { id: 7, date: 'July 01, 2023', checkIn: '09:28 AM', checkOut: "07:00 PM", Break: '00:30 Min', hours: '09:02 Hrs', status: 'On Time' },

];
