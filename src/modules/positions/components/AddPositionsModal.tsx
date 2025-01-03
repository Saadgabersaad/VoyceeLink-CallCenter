import { Dialog, TextField } from '@mui/material'
import { DialogProps, FormDialogContent, FormHeading } from 'modules/core/components/FormDialog'

export default function AddPositionsModal({ open, onClose }: DialogProps) {
  return (
    <Dialog
      open={open!}
      onClose={onClose}
      PaperProps={{
        component: 'form',
        onSubmit: () => {}
      }}
    >
      <FormHeading>
        Add new Position
      </FormHeading>
      <FormDialogContent>
        <p>Add new positions related to Sales department</p>
        <TextField label='New Position Name' />
      </FormDialogContent>
    </Dialog>
  )
}
