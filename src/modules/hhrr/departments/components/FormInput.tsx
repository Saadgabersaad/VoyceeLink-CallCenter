import { TextFieldProps } from '@mui/material'
import TextField from '@mui/material/TextField'

export const FormInput = (props: TextFieldProps) => {
  return (
    <>
      <TextField
        required
        margin='dense'
        id="name"
        size='small'
        sx={{
          "::placeholder": {
            fontSize: 10,
            color: 'red'
          }
        }}
        fullWidth
        {...props}
      />
    </>
  )
}
