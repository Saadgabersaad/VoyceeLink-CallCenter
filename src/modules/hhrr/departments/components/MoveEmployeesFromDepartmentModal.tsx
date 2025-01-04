import React from 'react'
import MoveEmployeesTable from './MoveEmployeesTable'
import { DialogProps, FormHeading } from 'modules/core/components/FormDialog'
import { Department } from '../shared/Department'
import { Dialog, Typography } from '@mui/material'
import { useNewAreas } from '../hooks/use-new-areas'
import { assignEmployeeToPosition } from '../services/employee'
import { useQueryClient } from '@tanstack/react-query'
import { EMPLOYEES_BY_DEPARTMENT_KEY } from '../consts/queryKeys'
import { useBoolean } from 'modules/core/hooks/use-boolean'

type Props = DialogProps & {
  department: Department
  employeeToFilterId: string
}

export default function MoveEmployeesFromDepartmentModal({
  department,
  employeeToFilterId,
  onClose
}: Props) {
  const [loading, setLoading, stopLoading] = useBoolean()
  const queryClient = useQueryClient()
  const { newAreaState } = useNewAreas()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newAreaState.length) return
    setLoading()
    const data = newAreaState[0]
    await assignEmployeeToPosition(data.employeeId, data.positionId)
    queryClient.invalidateQueries({ queryKey: [EMPLOYEES_BY_DEPARTMENT_KEY + department.id]})
    stopLoading()
  }

  return (
    <Dialog
      open={true}
      maxWidth='lg'
      PaperProps={{
        component: 'form',
        onSubmit
      }}
    >
      <FormHeading>
        Move Employees from Department <Typography component={'span'}>
          {department.name}
        </Typography>
      </FormHeading>
      <MoveEmployeesTable
        submitting={loading}
        department={department}
        alertText='Are you sure you would like to Move this Employee  From Department ?'
        employeeToFilterId={employeeToFilterId}
        onClose={onClose}
      />
    </Dialog>
  )
}
