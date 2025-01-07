import { InfoOutlined } from '@mui/icons-material'
import { Dialog, Divider, Typography, Box, CircularProgress } from '@mui/material'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Flex } from 'modules/core/components/flex'
import { FormActions, DialogProps, FormDialogContent, FormHeading } from 'modules/core/components/FormDialog'
import { assignEmployeeToPosition, getEmployeesByPosition } from '../services/employee'
import { usePositions } from 'modules/positions/hooks/use-positions'
import { EMPLOYEES_BY_DEPARTMENT_KEY } from '../consts/queryKeys'
import { DeletePositionFromDepartmentProps } from './DeletePositionFromDepartment'
import { PRIMARY } from 'modules/core/consts/theme'
import MoveEmployeeFromPosition from './MoveEmployeeFromPosition'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { deletePosition } from 'modules/positions/services/positions'
import { useBoolean } from 'modules/core/hooks/use-boolean'

type PositionsState = {
  employeeId: string
  positionId: string
}

const notify = () => toast.success('Position Deleted Successfully')

export default function DeletePositionFromDepartmentModal({
  department,
  position,
  onClose
}: DialogProps & DeletePositionFromDepartmentProps) {
  const { data: employees, isLoading } = useQuery({
    queryKey: [EMPLOYEES_BY_DEPARTMENT_KEY + position.id],
    queryFn: () => getEmployeesByPosition(position.id)
  })

  const queryClient = useQueryClient()

  const [newPositions, setPositionsState] = useState<PositionsState[]>([])
  const [loading, setLoading, stopLoading] = useBoolean()

  const { data: positions } = usePositions()
  const filteredByDepartment = positions?.data
    ?.filter(pos => pos.departmentId === department.id) ?? []

  const onSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    setLoading()
    await Promise.all(newPositions.map(async ({ employeeId, positionId }) => {
      return assignEmployeeToPosition(employeeId, positionId)
    }))

    await deletePosition(position.id)
    await queryClient.invalidateQueries({ queryKey: ['positions'] })
    stopLoading()
    notify()
  }

  const handleChangePosition = (positionId: string, employeeId: string) => {
    if (newPositions.some(pos => pos.positionId === position.id)) {
      return
    }

    if (newPositions.some(pos => pos.employeeId === employeeId)) {
      setPositionsState(pos => {
        return pos.map((p) => {
          if (p.employeeId === p.employeeId) {
            return {
              ...p,
              positionId
            }
          }
          return p
        })
      })
      return
    }
    
    setPositionsState(pos => pos.concat({ positionId, employeeId }))
  }
  

  return (
    <Dialog
      open
      maxWidth='md'
      PaperProps={{
        component: 'form',
        onSubmit
      }}
    >
      <FormHeading>
        <Flex gap={1} alignItems='center'>
          <InfoOutlined />Remove Position {position.name} from Department {department.name}
        </Flex>
      </FormHeading>
      <Divider sx={{ mt: 2, mb: 1 }} />
      <FormDialogContent>
        <Typography>
          Position <Typography component={'span'} color={PRIMARY}>
            {position.name}
          </Typography> is assigned to <Typography component={'span'} color={PRIMARY}>
            {position.employeeCount}
          </Typography> employees in your department
        </Typography>
        <Typography>
          Please assign employees new position
        </Typography>
        <Box sx={{ maxHeight: 220, overflowY: 'scroll' }}>
          {isLoading ? <CircularProgress /> : (
            <MoveEmployeeFromPosition
              position={position}
              departmentPositions={filteredByDepartment}
              employees={employees?.data ?? []}
              handlePositionChange={handleChangePosition}
            />
          )}
        </Box>
        <Typography color='error' mt={2}>
          Are you sure you would like to remove this position?
        </Typography>
      </FormDialogContent>
      <FormActions
        deleteButton
        loading={loading}
        buttonText='Remove Position'
        onClose={onClose}
      />
    </Dialog>
  )
}
