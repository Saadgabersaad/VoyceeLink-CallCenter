import { DialogProps, FormActions, FormDialog, FormDialogContent } from 'modules/core/components/FormDialog'
import { Grid2, Typography } from '@mui/material'
import { FormInput } from 'modules/core/components/FormInput'
import { FormTextArea } from 'modules/core/components/FormTextarea'
import { CreateDepartment } from '../shared/Department'

type Props = DialogProps & {
  create(department: CreateDepartment): void
}

export default function AddDepartment({
  open,
  onClose,
  create
}: Props) {

  return <>
    <FormDialog
      title='Add Department'
      open={open!}
      onClose={onClose!}
      onFinish={create}
    >
      <FormDialogContent>
        <Typography fontWeight={700} mt={2} mb={.2}>
          Department Details
        </Typography>
        <Grid2 mb={4}>
          <FormInput label='Department name' name='name' />
          <FormTextArea label='Description' name='description' />
        </Grid2>
      </FormDialogContent>
      <FormActions buttonText='Add Department' onClose={onClose} />
    </FormDialog>
  </>
}
