import React, { useState } from 'react'
import { getEmployeesByDepartment } from '../services/departments'
import { useQuery } from '@tanstack/react-query'
import { EnhancedTable } from 'modules/core/components/tables/EnhancedTable'
import { Avatar, Link, MenuItem, TableCell } from '@mui/material'
import DropdownMenu from 'modules/core/components/Dropdown'
import { useBoolean } from 'modules/core/hooks/use-boolean'
import ChangeEmployeePosModal from './ChangeEmployeePosModal'
import { EMPLOYEES_BY_DEPARTMENT_KEY } from '../consts/queryKeys'
import { useTable } from 'modules/core/hooks/use-table'
import { Department } from '../shared/Department'
import { Employee } from 'modules/hhrr/employees/shared/Employee'
import MoveEmployeesFromDepartmentModal from './MoveEmployeesFromDepartmentModal'
import NewAreaContextProvider from '../context/new-area.context'
import { Flex } from 'modules/core/components/flex'
import DeleteEmployeeModal from 'modules/hhrr/employees/components/DeleteEmployeeModal'
import { BusinessCenter, Create, Delete, Person } from '@mui/icons-material'
import { PRIMARY } from 'modules/core/consts/theme'

type Props = {
  departmentId: string
  department: Department
}

export const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'position', numeric: false, disablePadding: false, label: 'Position' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
];

export default function Employees({ departmentId, department }: Props) {
  const [open, onOpen, onClose] = useBoolean()
  const [moveEmployee, openMoveEmployee, closeMoveEmployee] = useBoolean()
  const [deleteModal, openDeleteModal, closeDeleteModal] = useBoolean()
  const [employee, setEmployee] = useState<Employee | null>(null)

  const { data, isLoading } = useTable({
    key: EMPLOYEES_BY_DEPARTMENT_KEY + departmentId,
    fetcher: () => getEmployeesByDepartment(departmentId),
    mutationFn: () => Promise.resolve()
  })

  return <>
    <EnhancedTable
      loading={isLoading}
      rows={data?.data ?? []}
      render={(row) => {
        return <>
          <TableCell>
            <Flex gap={1} alignItems='center'>
              <Avatar sx={{ width: 35, height: 35 }} />
              {row.name} {row.lastName}
            </Flex>
          </TableCell>
          <TableCell>
            {row.position.name}
          </TableCell>
          <TableCell>
            {row.email}
          </TableCell>
          <TableCell>
            <DropdownMenu>
              {({ onClose }) => [
                <MenuItem key={1} sx={{ p: 1.5, gap: 1 }}>
                  <Person sx={{ color: PRIMARY }} />
                  <Link
                    href={`employee/profile/1`}
                    style={{ textDecoration: 'none', color: 'currentColor' }}
                  >
                    View Profile
                  </Link>
                </MenuItem>,
                <MenuItem key={2} sx={{ p: 1.5, gap: 1 }} onClick={() => {
                  onOpen()
                  onClose()
                  setEmployee(row)
                }}>
                  <BusinessCenter sx={{ color: PRIMARY }} />
                  Change Employee Position
                </MenuItem>,
                <MenuItem
                  key={3}
                  sx={{ p: 1.5, gap: 1 }}
                  onClick={() => {
                    onClose()
                    setEmployee(row)
                    openMoveEmployee()
                  }}
                >
                  <Create sx={{ color: PRIMARY }} />
                  Move Employee
                </MenuItem>,
                <MenuItem
                  key={4}
                  sx={{ p: 1.5, gap: 1 }}
                  onClick={() => {
                    onClose()
                    setEmployee(row)
                    openDeleteModal()
                  }}
                >
                  <Delete sx={{ color: '#e94a4a' }} />
                  Delete Employee
                </MenuItem>
              ]}
            </DropdownMenu>
          </TableCell>
        </>
      }}
      headCells={headCells}
      onPageChange={() => { }}
    />
    {open && employee && (
      <ChangeEmployeePosModal
        open={open}
        department={department}
        onClose={onClose}
        employee={employee}
      />
    )}
    {moveEmployee && employee && (
      <NewAreaContextProvider>
        <MoveEmployeesFromDepartmentModal
          department={department}
          employeeToFilterId={employee!.id!}
          onClose={closeMoveEmployee}
        />
      </NewAreaContextProvider>
    )}
    {deleteModal && employee && (
      <DeleteEmployeeModal
        employeeId={employee.id}
        onClose={closeDeleteModal}
        invalidateQueryKey={EMPLOYEES_BY_DEPARTMENT_KEY + departmentId}
      />
    )}
  </>
}
