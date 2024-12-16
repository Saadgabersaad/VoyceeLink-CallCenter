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
