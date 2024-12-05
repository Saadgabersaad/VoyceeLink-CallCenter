import { TextFieldProps } from '@mui/material'
import TextField from '@mui/material/TextField'

export const FormInput = (props: TextFieldProps) => {
  return (
    <>
      <TextField
        required
        id='name'
        size='small'
        margin='dense'
        fullWidth
        {...props}
      />
    </>
  )
}
