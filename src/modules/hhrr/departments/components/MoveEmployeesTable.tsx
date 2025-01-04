import { Avatar, Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getEmployeesByDepartment } from '../services/departments'
import { Props } from './DeleteDepartmentModal'
import { EMPLOYEES_BY_DEPARTMENT_KEY } from '../consts/queryKeys'
import { Flex } from 'modules/core/components/flex'
import { FormActions } from 'modules/core/components/FormDialog'
import { useDepartments } from '../hooks/use-departments'
import NewDepartmentAndPositionSelectors from './NewDepartmentAndPosition'
import { useNewAreas } from '../hooks/use-new-areas'

export default function MoveEmployeesTable({
  department,
  onClose,
}: Props) {

  const { newAreaState } = useNewAreas()

  const { data: employees, isLoading } = useQuery({
    queryKey: [EMPLOYEES_BY_DEPARTMENT_KEY, department.id],
    queryFn: () => getEmployeesByDepartment(department.id)
  })

  const { data: departments } = useDepartments()

  const mustSelectNewDepartment = newAreaState
    .some(({ departmentId }) => departmentId === department.id)

  const mustChangeAllEmployees = employees?.data
    ?.every(employee => {
      return newAreaState.some(({ employeeId }) => employeeId === employee.id)
    })

  const isDisabled = (mustChangeAllEmployees && mustSelectNewDepartment)

  return <>
    <Box
      px={2}
      maxHeight={{ sm: 300, md: 400 }}
      sx={{ overflowY: 'auto' }}
    //overflowX='visible'
    >
      {!isLoading ? (
        <Table sx={{ mt: 2 }}>
          <TableHead sx={{ bgcolor: 'grey.100' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: '700' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: '700' }}>New Department</TableCell>
              <TableCell sx={{ fontWeight: '700' }}>New Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.data?.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <Flex alignItems='center' gap={1}>
                    <Avatar sx={{ width: 32, height: 32 }} />
                    {employee.name} {employee.lastName}
                  </Flex>
                </TableCell>
                <NewDepartmentAndPositionSelectors
                  department={department}
                  employee={employee}
                  departments={departments.data}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : <Box p={2}>
        <CircularProgress />
      </Box>}
    </Box>
    <Typography color='error' sx={{ mt: 1.5, mb: 2, mx: 3 }}>
      Are you sure you want to delete this Department?
    </Typography>
    <FormActions
      deleteButton
      onClose={onClose}
      isDisabled={isDisabled}
      buttonText='Delete Department'
    />
  </>
}
