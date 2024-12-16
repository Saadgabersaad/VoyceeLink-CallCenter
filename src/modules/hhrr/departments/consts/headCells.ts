import { HeadCell } from 'modules/core/consts/tableHead'

export const headCells: HeadCell[] = [
  {
    id: 'department', numeric: false, disablePadding: true, label: 'Department',
  },
  {
    id: 'departmentHead',
    numeric: false,
    disablePadding: false,
    label: 'Department Head',
  },
  { id: 'lastUpdated', numeric: false, disablePadding: false, label: 'Last Updated' },
  { id: 'positions', numeric: false, disablePadding: false, label: 'Positions' },
]