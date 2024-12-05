import {
  ListItemText,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  Box,
  MenuItem,
  Theme,
  useTheme,
  SelectChangeEvent,
  SxProps,
} from '@mui/material'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export type MultipleSelectProps<T> = {
  options: T[]
  values: T[]
  onChange(event: SelectChangeEvent<any>): void
  placeholder: string
  width?: number
}

export const MultipleSelect = <T, >({
  width,
  options,
  values,
  onChange,
  placeholder,
}: MultipleSelectProps<T>) => {
  const theme = useTheme()
  
  return (
    <div>
      <FormControl sx={{ width: width ?? '100%' }}>
        <InputLabel id="demo-multiple-chip-label" size='small'>{placeholder}</InputLabel>
        <Select
          multiple
          labelId='demo-multiple-chip-label'
          id='demo-multiple-chip'
          size='small'
          value={values}
          onChange={onChange}
          MenuProps={MenuProps}
          input={<OutlinedInput id='select-multiple-chip' label={placeholder} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value: any) => (
                <Chip
                  key={value}
                  size='small'
                  label={`Role ${value}`}
                //onDelete={handleDelete}
                />
              ))}
            </Box>
          )}
        >
          {options.map((name: any) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, values, theme)}
            >
              <Checkbox checked={values.includes(name)} size='small' />
              <ListItemText primary={`Role ${name}`} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}


function getStyles<T>(name: any, checked: readonly T[], theme: Theme) {
  return {
    fontWeight: checked.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}