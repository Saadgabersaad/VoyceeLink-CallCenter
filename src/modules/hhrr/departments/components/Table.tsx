import { TableCell } from '@mui/material'
import {
  EnhancedTable,
  EnhancedTableProps
} from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../consts/headCells'
import { Department } from '../shared/Department'
import dayjs from 'dayjs'

export const Table = ({
  rows,
  loading
}: Partial<EnhancedTableProps<Department>>) => {

  return (
    <EnhancedTable
      rows={rows!}
      loading={loading!}
      headCells={headCells}
      onPageChange={() => { }}
      render={(row) => {
        return <>
          <TableCell>
            {row.name}
          </TableCell>
          <TableCell>
            John Doe
          </TableCell>
          <TableCell>
            {dayjs(row.createdAt).format('MMMM D, YYYY h:mm A')}
          </TableCell>
          <TableCell>
            Positions
          </TableCell>
        </>
      }}
    />
  )
}
