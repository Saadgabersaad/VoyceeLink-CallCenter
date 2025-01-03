import { Avatar, Box, CircularProgress, Dialog, Paper, Select, Typography } from '@mui/material'
import { DialogProps, FormActions, FormDialogContent, FormHeading } from 'modules/core/components/FormDialog'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from 'modules/core/hooks/use-debounce'
import { searchEmployees } from '../services/departments'
import { Search } from 'modules/core/components/Search'
import { Flex } from 'modules/core/components/flex'
import { Check } from '@mui/icons-material'
import { Employee } from 'modules/hhrr/employees/shared/Employee'
import { PRIMARY } from 'modules/core/consts/theme'

type Props = DialogProps & {
  employeeId?: string
}

export default function AddEmployeeToDepartment({
  onClose,
  employeeId
}: Props) {
  const [search, setQuery] = useState<string>('')

  const { query } = useDebounce(search, 100)

  const { data, isLoading } = useQuery({
    queryKey: ['addemployees', query],
    queryFn: async () => {
      return searchEmployees(query)
    }
  })

  const [selected, setSelected] = useState<Employee[]>([])
  const [position, setPosition] = useState<string>('')

  const handleSelect = (employee: Employee) => {
    if (selected.some((selectedEmployee) => selectedEmployee.id === employee.id)) {
      setSelected(selected.filter(({ id }) => id !== employee.id))
      return
    }

    setSelected([...selected, employee])
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(position)
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
        <p>By selecting the Employee , he will be <Typography component='span' color={PRIMARY}>
              moved
            </Typography> from his Assigned Department</p>
        <Box sx={{ width: 320 }}>
          <Search
            width={320}
            disableForm
            onSearch={function (value: string): void {
              setQuery(value)
            }}
          />
          <Paper sx={{ p: 2, gap: .4, mt: 2, height: 300, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
            {isLoading ? <CircularProgress /> : (
              data?.data?.map((employee) => (
                <Box
                  key={employee.id}
                  sx={{
                    cursor: 'pointer',
                    p: .8,
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
                      <Avatar sx={{ width: 32, height: 32 }} />
                      <Typography>{employee.name} {employee.lastName}</Typography>
                    </Flex>
                    {selected.some((selectedEmployee) => selectedEmployee.id === employee.id) && (
                      <div>
                        <Check sx={{ color: PRIMARY, mt: .5 }} />
                      </div>
                    )}
                  </Flex>
                </Box>
              ))
            )}
          </Paper>
          <Select sx={{ mt: 3 }} label='Position' />
        </Box>
      </FormDialogContent>
      <FormActions
        buttonText='Add Employee'
      />
    </Dialog>
  )
}