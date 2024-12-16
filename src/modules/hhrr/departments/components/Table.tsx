import { TableCell } from '@mui/material'
import {
  EnhancedTable,
  EnhancedTableProps
} from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../consts/headCells'
import { Department } from '../shared/Department'

export const Table = ({
  rows,
  loading
}: Partial<EnhancedTableProps<Department>>) => {

  return (
    <EnhancedTable
      rows={rows!}
      loading={loading!}
      rowsPerPageCount={1}
      headCells={headCells}
      onPageChange={() => {}}
      render={(row) => {
        console.log(row, 'row')
        return <>
        <TableCell>
          {row.name}
        </TableCell>
        <TableCell>
          John Doe
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
