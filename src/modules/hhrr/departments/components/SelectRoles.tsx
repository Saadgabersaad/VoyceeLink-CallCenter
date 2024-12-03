import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
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
  SelectChangeEvent
} from '@mui/material'
import React from 'react'

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

const roles = [1, 2, 3]

export const SelectRoles = () => {
  const [checked, setChecked] = React.useState<number[]>([])

  const theme = useTheme()

  const handleChange = (event: SelectChangeEvent<typeof checked>) => {
    const { target: { value } } = event

    setChecked(value as number[])
  }

  const handleDelete = (value: number) => {
    console.log(value)
    setChecked(checked => checked.filter(c => c !== value))
  }

  return (
    <>
      <Typography fontWeight={600} pt={3} pb={1}>
        Select Roles
      </Typography>
      <div>
        <FormControl sx={{ my: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label" size='small'>Roles</InputLabel>
          <Select
            multiple
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            size='small'
            value={checked}
            onChange={handleChange}
            MenuProps={MenuProps}
            sx={{ width: 350 }}
            input={<OutlinedInput id="select-multiple-chip" label='Roles' />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
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
            {roles.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, checked, theme)}
              >
                <Checkbox checked={checked.includes(name)} size='small' />
                <ListItemText primary={`Role ${name}`} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  )
}


function getStyles(name: number, checked: readonly number[], theme: Theme) {
  return {
    fontWeight: checked.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}