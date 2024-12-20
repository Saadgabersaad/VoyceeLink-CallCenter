import { HeadCell } from 'modules/core/consts/tableHead'

export const headCells: HeadCell[] = [
    {id: 'name', numeric: false, disablePadding: true, label: 'Name',},
    {id: 'email', numeric: false, disablePadding: false, label: 'Email',},
    { id: 'department', numeric: false, disablePadding: false, label: 'Department' },
]