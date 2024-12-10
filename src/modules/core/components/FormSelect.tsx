/*import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
  SelectProps as MUISelectProps
} from '@mui/material'
import React from 'react'

export type SelectProps = MUISelectProps & {
  options: SelectOption[]
  labelId?: string
}

export type SelectOption = {
  label: string
  value: string | number
}

export const Select = (props: SelectProps) => {
  const { options, labelId, ...rest } = props

  const [value, setValue] = React.useState<string>('')

  const handleChange = (event: SelectChangeEvent<any>) => {
    setValue(event.target.value as string)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId!} size='small'>{props.label}</InputLabel>
      <MuiSelect
        id={labelId!}
        size='small'
        value={value}
        onChange={handleChange}
        {...rest}
      >
        {options.map(({ value, label }) => (
          <MenuItem value={value} key={value}>{label}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}*/

import { Controller, useFormContext } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

interface FormSelectProps {
  name: string
  label: string
  placeholder?: string
  options: SelectOption[]
}

export type SelectOption = {
  value: string | number
  label: string
}

export const FormSelect = ({ name, label, options, placeholder }: FormSelectProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: `${label} required`,
      }}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <TextField
          select
          fullWidth
          size='small'
          label={!value ? (placeholder || label) : label}
          error={!!error}
          helperText={error ? error.message : null}
          value={value || ''}
          onChange={onChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
