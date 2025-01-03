import dayjs from 'dayjs'
import { Button, Menu, MenuItem, TableCell } from '@mui/material'
import {
  EnhancedTable,
  EnhancedTableProps
} from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../consts/headCells'
import { Department } from '../shared/Department'
import { PositionsSelectRow } from './PositionsSelectRow'
import DropdownMenu from 'modules/core/components/Dropdown'
import Link from 'next/link'
import { useBoolean } from 'modules/core/hooks/use-boolean'
import AddPositionsModal from 'modules/positions/components/AddPositionsModal'

export const Table = ({
  rows,
  loading
}: Partial<EnhancedTableProps<Department>>) => {

  const [open, onOpen, onClose] = useBoolean()

  return <>
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
            {dayjs(row.updatedAt).format('MMMM D, YYYY h:mm A')}
          </TableCell>
          <PositionsSelectRow
            positions={row.position}
          />
          <TableCell>
            <DropdownMenu>
              <MenuItem>
                <Link href={`departments/${row.id}`}>
                  View Department
                </Link>
              </MenuItem>
              <MenuItem onClick={onOpen}>
                Add new Position
              </MenuItem>
            </DropdownMenu>
          </TableCell>
        </>
      }}
    />
    {open && <AddPositionsModal open onClose={onClose}/>}
  </>
}
