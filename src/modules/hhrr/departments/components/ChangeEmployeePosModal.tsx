import { Avatar, Box, CircularProgress, Dialog, Divider, FormControl, InputLabel, Menu, MenuItem, Paper, Select, SelectChangeEvent, Typography } from '@mui/material'
import { DialogProps, FormActions, FormDialogContent, FormHeading } from 'modules/core/components/FormDialog'
import React, { useState } from 'react'
import { Department } from '../shared/Department'
import { usePositions } from 'modules/positions/hooks/use-positions'
import { Position } from '../shared/Position'
import { Flex } from 'modules/core/components/flex'
import { PRIMARY } from 'modules/core/consts/theme'
import { assignEmployeeToPosition } from '../services/employee'
import { Employee } from 'modules/hhrr/employees/shared/Employee'
import { useBoolean } from 'modules/core/hooks/use-boolean'
import { useQueryClient } from '@tanstack/react-query'
import { EMPLOYEES_BY_DEPARTMENT_KEY } from '../consts/queryKeys'

type Props = DialogProps & {
  employee?: Employee
  department: Department
}

export default function ChangeEmployeePosModal({
  onClose,
  employee,
  department
}: Props) {

  const queryClient = useQueryClient()

  const [position, setPosition] = useState<Position | null>(employee!.position)
  const [submitting, setSubmitting, stopSubmitting] = useBoolean()
  const { data } = usePositions()
  const positions = data?.
    data?.filter((position) => position.departmentId === department.id)


  const onChange = (e: SelectChangeEvent<string>) => {
    const position = positions?.find(position => position.id === e.target.value as string)
    setPosition(position!)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (employee && position) {
      setSubmitting()
      await assignEmployeeToPosition(employee.id, position.id)
      queryClient.invalidateQueries({ queryKey: [EMPLOYEES_BY_DEPARTMENT_KEY + department.id] })
      stopSubmitting()
      onClose!()
    }
  }

  return (
    <Dialog
      open={true}
      onClose={onClose}
      maxWidth='lg'
      PaperProps={{
        component: 'form',
        onSubmit
      }}
    >
      <FormHeading>
        Change {employee?.name} {employee?.lastName} Position
      </FormHeading>
      <FormDialogContent>
        <Box sx={{ width: 500 }}>
          <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
          <Typography>
            Select position related to <Typography component='span' color={PRIMARY}>
              {department.name}
            </Typography>
          </Typography>

          <FormControl sx={{ mt: 1.2 }}>
            <InputLabel>
              Position
            </InputLabel>
            <Select
              onChange={onChange}
              sx={{ width: 290 }}
              value={position?.id}
            >
              {positions?.map((pos) => (
                <MenuItem value={pos.id} key={pos.id}>
                  <Flex>
                    <Typography>
                      {pos.name}
                    </Typography>
                  </Flex>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

      </FormDialogContent>
      <FormActions
        loading={submitting}
        buttonText='Change Position'
        onClose={onClose}
      />
    </Dialog>
  )
}
