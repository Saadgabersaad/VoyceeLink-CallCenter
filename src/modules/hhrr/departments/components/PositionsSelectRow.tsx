import { useState } from 'react'
import { TableCell, SelectChangeEvent } from '@mui/material'
import { MultipleSelect } from 'modules/core/components/MultipleSelect'
import { selectAdapter, SelectOption } from 'modules/core/components/Select'
import { Position } from '../shared/Position'

type Props = {
  positions: Position[] //positions from this department
}

export function PositionsSelectRow({ positions }: Props) {
  const options = positions?.map(({ name, id }) => selectAdapter(name, id))?.concat({
    label: 'UI 2',
    value: 'positionid'
  })
  const [checked, setChecked] = useState<SelectOption[]>(options)
  console.log(checked)

  const handleChange = (ev: SelectChangeEvent<any>) => {
    const {
      target: { value },
    } = ev
    //array of select options
    setChecked(value)
  }

  return (
    <TableCell>
      <MultipleSelect
        values={checked}
        size='small'
        width='10rem'
        name='Positions'
        onChange={handleChange}
        placeholder='Positions'
        options={options}
      />
    </TableCell>
  )
}
