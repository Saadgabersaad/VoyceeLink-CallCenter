import { Avatar, Box, CircularProgress, Dialog, FormControl, InputLabel, Menu, MenuItem, Paper, Select, Typography } from '@mui/material'
import { DialogProps, FormActions, FormDialogContent, FormHeading } from 'modules/core/components/FormDialog'
import React, { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useDebounce } from 'modules/core/hooks/use-debounce'
import { searchEmployees } from '../services/departments'
import { Search } from 'modules/core/components/Search'
import { Flex } from 'modules/core/components/flex'
import { Check } from '@mui/icons-material'
import { Employee } from 'modules/hhrr/employees/shared/Employee'
import { PRIMARY } from 'modules/core/consts/theme'
import { usePositions } from 'modules/positions/hooks/use-positions'
import { assignEmployeeToPosition } from '../services/employee'
import { EMPLOYEES_BY_DEPARTMENT_KEY } from '../consts/queryKeys'
import { useBoolean } from 'modules/core/hooks/use-boolean'

type Props = DialogProps & {
  departmentId: string
}

export default function AddEmployeeToDepartment({
  onClose,
  departmentId,
}: Props) {
  const [loading, setLoading, stopLoading] = useBoolean()

  const [search, setQuery] = useState<string>('')
  const [newPositionId, setNewPositionId] = useState<string>('')

  const { query } = useDebounce(search, 100)

  const { data, isLoading } = useQuery({
    queryKey: ['employees', query],
    queryFn: async () => {
      return searchEmployees(query)
    }
  })

  const queryClient = useQueryClient()

  const { data: positions } = usePositions()

  const [selectedEmployee, setSelected] = useState<Employee[]>([])

  const handleSelect = (employee: Employee) => {
    /*if (selectedEmployee.length === 1) return
    if (selectedEmployee.some((selectedEmployee) => selectedEmployee.id === employee.id)) {
      setSelected(selectedEmployee.filter(({ id }) => id !== employee.id))
      return
    }*/

    setSelected([employee])
  }

  const onChangePosition = (positionId: string) => {
    setNewPositionId(positionId)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedEmployee.length) return
    setLoading()
    const employee = selectedEmployee[0]
    await assignEmployeeToPosition(employee.id, newPositionId)
    await queryClient
      .invalidateQueries({ queryKey: EMPLOYEES_BY_DEPARTMENT_KEY + departmentId })
    stopLoading()
  }

  return (
    <Dialog
      open={true}
      onClose={onClose}
      PaperProps={{
        component: 'form',
        onSubmit
      }}
    >
      <FormHeading>
        Add New Employee to Department
      </FormHeading>
      <FormDialogContent>
        <p>By selecting the Employee, he will be <Typography component='span' color={PRIMARY}>
          moved
        </Typography> from his Assigned Department</p>
        <Box sx={{ width: 310 }}>
          <Search
            width={320}
            disableForm
            onSearch={function (value: string): void {
              setQuery(value)
            }}
          />
          <Paper
            sx={{
              py: 2,
              pl: 2,
              pr: 1,
              gap: .4,
              mt: 2,
              height: 300,
              overflow: 'auto',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {isLoading ? <CircularProgress /> : (
              data?.data?.map((employee) => (
                <Box
                  key={employee.id}
                  sx={{
                    cursor: 'pointer',
                    p: .8,
                    borderRadius: 1,
                    ":hover": {
                      bgcolor: 'grey.200'
                    }
                  }}
                  onClick={() => handleSelect(employee)}

                >
                  <Flex
                    alignItems='center'
                    bgcolor={'transparent'}
                    justifyContent='space-between'
                  >
                    <Flex alignItems='center' gap={1}>
                      <Avatar sx={{ width: 30, height: 30 }} />
                      <Typography>{employee.name} {employee.lastName}</Typography>
                    </Flex>
                    {selectedEmployee.some((selectedEmployee) => selectedEmployee.id === employee.id) && (
                      <Box position={'relative'} top={'.2rem'}>
                        <Check sx={{ color: PRIMARY, width: 20, height: 20 }} />
                      </Box>
                    )}
                  </Flex>
                </Box>
              ))
            )}
          </Paper>
          <FormControl>
            <InputLabel>
              Select New Position
            </InputLabel>
            <Select
              sx={{ mt: 3, width: 310 }}
              label='Select New Position'
              value={newPositionId}
              onChange={(e) => onChangePosition(e.target.value as string)}
            >
              <MenuItem value=''>
                <em>Position</em>
              </MenuItem>
              {positions?.data.filter(pos => pos.departmentId === departmentId).map((pos) => (
                <MenuItem key={pos.id} value={pos.id}>
                  {pos.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </FormDialogContent>
      <FormActions
        loading={loading}
        onClose={onClose}
        buttonText='Add Employees'
      />
    </Dialog>
  )
}