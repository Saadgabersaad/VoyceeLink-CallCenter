import { Avatar, TableCell } from '@mui/material'
import { EnhancedTable } from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../consts/headCells'
import { Flex } from 'modules/core/components/flex'

// DATA SOURCE TYPE
type DataSourceType = {
  id: number
  department: string
  employee: string
  total: number
  date: string
  positions: number[]
}

function createData(
  id: number,
  department: string,
  employee: string,
  total: number,
  date: string,
  positions: number[],
) {
  return {
    id,
    department,
    employee,
    total,
    date,
    positions
  }
}

const data: DataSourceType[] = [
  createData(1, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(2, 'Department 2', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(3, 'Department 3', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(4, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(5, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(6, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(7, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(8, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(9, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(10, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(11, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(12, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(13, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(14, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(15, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3]),
  createData(16, 'Department 1', 'Hello World', 305, new Date().toISOString(), [1, 2, 3])
]

//TODO: USE REACT QUERY
export const Table = () => {
  return (
    <EnhancedTable
      rows={data}
      rowsPerPageCount={8}
      headCells={headCells}
      onPageChange={() => {}}
      render={(row) => (<>
        <TableCell>
          {row.department}
        </TableCell>
        <TableCell>
          <Flex alignItems='center' gap={1}>
            <Avatar sx={{ width: 30, height: 30 }} />
            {row.employee}
          </Flex>
        </TableCell>
        <TableCell>
          {row.total}
        </TableCell>
        <TableCell>
          {row.date}
        </TableCell>
        <TableCell>
          Positions
        </TableCell>
      </>
      )}
    />
  )
}
