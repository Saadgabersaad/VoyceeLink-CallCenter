import { TableCell } from '@mui/material'
import { EnhancedTable } from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../consts/headCells'
import { useDepartments } from '../hooks/use-departments'

//TODO: USE REACT QUERY
export const Table = () => {
  const { data, isError, isLoading } = useDepartments()
  console.log(data.data, 'a')
  return (
    <EnhancedTable
      loading={isLoading}
      rows={data?.data?.concat(data?.data)}
      rowsPerPageCount={1}
      headCells={headCells}
      onPageChange={() => { }}
      render={(row) => {
        console.log(row, 'row')
        return <>
        <TableCell>
          {row.name}
        </TableCell>
        <TableCell>
          a
        </TableCell>
        <TableCell>
          {'12 May, 2024'}
        </TableCell>
        <TableCell>
          Positions
        </TableCell>
      </>
      }}
    />
  )
}
