import { Dialog } from '@mui/material'
import { DialogProps, FormDialogContent, FormHeading } from 'modules/core/components/FormDialog'
import React from 'react'
import { MultipleSelect } from 'modules/core/components/MultipleSelect'

type Props = DialogProps & {
  employeeId?: string
}

export default function ChangeEmployeePosModal({
  onClose
}: Props) {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      PaperProps={{
        component: 'form',
        onSubmit: () => { }
      }}
    >
      <FormHeading>
        Change Employee Position
      </FormHeading>
      <FormDialogContent>
        <MultipleSelect
          options={[]}
          name={'employeePosition'}
          placeholder={'Position'}
        />
      </FormDialogContent>
    </Dialog>
  )
}
