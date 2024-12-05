import * as React from 'react'
import { SelectChangeEvent } from '@mui/material'
import { MultipleSelect } from 'modules/core/components/MultipleSelect'

const roles = [1, 2, 3]

export const MultiplePositionsSelect = () => {
  const [checkedPositions, setChecked] = React.useState<number[]>([])

  const handleChange = (ev: SelectChangeEvent<typeof checkedPositions>) => {
    const { target: { value } } = ev

    setChecked(value as number[])
  }

  const handleDelete = (value: number) => {
    console.log(value)
    setChecked(checked => checked.filter(c => c !== value))
  }

  return (
    <div>
      <MultipleSelect
        options={roles}
        values={checkedPositions}
        onChange={handleChange}
        placeholder='Positions'
      />
    </div>
  )
}