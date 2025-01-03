import React from 'react'
import { getEmployeesByDepartment } from '../services/departments'
import { useQuery } from '@tanstack/react-query'
import { EnhancedTable } from 'modules/core/components/tables/EnhancedTable'
import { Link, MenuItem, TableCell } from '@mui/material'
import DropdownMenu from 'modules/core/components/Dropdown'
import { useBoolean } from 'modules/core/hooks/use-boolean'
import ChangeEmployeePosModal from './ChangeEmployeePosModal'

type Props = {
  departmentId: string
}

export const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'position', numeric: false, disablePadding: false, label: 'Position' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
];

export default function Employees({ departmentId }: Props) {
  const { data, isLoading } = useQuery({
    queryFn: async () => await getEmployeesByDepartment(departmentId),
    queryKey: ['employees', departmentId],
  })

  const [open, onOpen, onClose] = useBoolean()

  return <>
    <EnhancedTable
      loading={isLoading}
      rows={data?.data ?? []}
      render={(row) => {
        return <>
          <TableCell>
            {row.name} {row.lastName}
          </TableCell>
          <TableCell>
            {row.position.name}
          </TableCell>
          <TableCell>
            {row.email}
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <MenuItem>
                <Link href={`employee/profile/1`}>
                  View Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={onOpen}>
                Change Employee Position
              </MenuItem>
              <MenuItem>
                Move Employee
              </MenuItem>
              <MenuItem>
                Delete Employee
              </MenuItem>
            </DropdownMenu>
          </TableCell>
        </>
      }}
      headCells={headCells}
      onPageChange={function (newPage: number): void {
        throw new Error('Function not implemented.')
      }}
    />
    {open && (
      <ChangeEmployeePosModal open={open} onClose={onClose} />
    )}
  </>
}
