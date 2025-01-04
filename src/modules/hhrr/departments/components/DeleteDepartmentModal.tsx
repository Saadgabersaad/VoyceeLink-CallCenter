import { Dialog, Divider, Typography } from '@mui/material';
import { DialogProps, FormHeading } from 'modules/core/components/FormDialog'
import { Department } from '../shared/Department';
import MoveEmployeesTable from './MoveEmployeesTable';
import { InfoOutlined } from '@mui/icons-material';
import { Flex } from 'modules/core/components/flex';
import { useNewAreas } from '../hooks/use-new-areas';
import { assignEmployeeToPosition } from '../services/employee';
import { useBoolean } from 'modules/core/hooks/use-boolean';
import DeleteConfirmation from './DeleteConfirmation';
import { deleteDepartment } from '../services/departments';
import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { DEPARTMENTS_KEY } from '../consts/queryKeys';
import toast from 'react-hot-toast';

export type Props = DialogProps & {
  department: Department
}

const notify = () => toast.success('Department deleted successfully')

export default function DeleteDepartmentModal({
  onClose,
  department,
}: Props) {

  const queryClient = useQueryClient()

  const [showConfirm, setOpenConfirm, setCloseConfirm] = useBoolean()
  const [submitting, setSubmitting, stopSubmitting] = useBoolean()
  const { newAreaState } = useNewAreas()

  const startDeleteDeparment = async () => {
    if (!newAreaState.length) return

    await Promise.all(newAreaState.map(async ({ employeeId, positionId }) => {
      return await assignEmployeeToPosition(
        employeeId,
        positionId,
      )
    }))

  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //OPEN THE CONFIRMATION VIEW
    if (!showConfirm) {
      setOpenConfirm()
    } else {
      setSubmitting()
      await startDeleteDeparment()
      await deleteDepartment(department.id)
      await queryClient.invalidateQueries({ queryKey: [DEPARTMENTS_KEY] })
      notify()
      stopSubmitting()
      setCloseConfirm()
      onClose!()
    }
  }

  return (
    <>
      <Dialog
        open={true}
        onClose={onClose}
        maxWidth={'lg'}
        PaperProps={{
          component: 'form',
          width: 1000,
          onSubmit
        }}
      >
        <FormHeading>
          <Flex gap={1} alignItems='center'>
            <InfoOutlined color='error' /> Delete {department.name} Department
          </Flex>
        </FormHeading>
        <Divider sx={{ pt: 2 }} />
        {showConfirm ? (
          <DeleteConfirmation onClose={onClose} loading={submitting} />
        ) : (
          <>
            <Typography sx={{ mx: 3, mt: 2, fontWeight: '500' }}>
              Move Employees to another Department to complete this action
            </Typography>
            <MoveEmployeesTable
              department={department}
              onClose={onClose}
            />
          </>
        )}
      </Dialog>
    </>
  )
}
