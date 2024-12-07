import {
  Button as MuiButton,
  ButtonProps
} from '@mui/material'

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props 

  return (
    <MuiButton
      {...rest}
      sx={{
        ...rest?.sx,
        textTransform: 'capitalize'
      }}
    >
      {children}
    </MuiButton>
  )
}
