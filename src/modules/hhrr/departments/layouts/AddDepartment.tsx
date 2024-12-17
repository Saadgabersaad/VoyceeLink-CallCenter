import { DialogProps, FormActions, FormDialog, FormDialogContent } from 'modules/core/components/FormDialog'
import { Grid2, Typography } from '@mui/material'
import { FormInput } from 'modules/core/components/FormInput'
import { FormTextArea } from 'modules/core/components/FormTextarea'
import { CreateDepartment } from '../shared/Department'

//You can extend props in a new type if needed
type AddDepartmentModalProps = DialogProps & {
  create(department: CreateDepartment): Promise<void> // POST FUNCTION FOR CREATE A NEW DEPARTMENT
}

//MAIN MODALS inherit Dialog Props by default
export function AddDepartment({
  open,
  create,
  onClose,
}: AddDepartmentModalProps) {

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
        <Grid2 mb={2}>
          <FormInput label='Department name' name='name' />
          <FormTextArea label='Description' name='description' />
        </Grid2>
      </FormDialogContent>
      <FormActions buttonText='Add Department' onClose={onClose} />
    </FormDialog>
  </>
}
