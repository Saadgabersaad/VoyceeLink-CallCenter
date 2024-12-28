import { useState } from 'react'
import { TableCell, SelectChangeEvent } from '@mui/material'
import { MultipleSelect } from 'modules/core/components/MultipleSelect'
import { selectAdapter, SelectOption } from 'modules/core/components/Select'
import { Position } from 'modules/hhrr/departments/shared/Position'


type Props = {
    positions: Position[] //positions from this department
}

export function     PositionsSelectRow({ positions ,mutate,}: Props) {
    console.log(positions)
    const options = positions.map(({ name, id }) => selectAdapter(name, id)).concat({
        label: 'UI GG',
        value: 'fefeefe'
    })
    const [checked, setChecked] = useState<SelectOption[]>(options)

    const assignPosition =()=>{

    }

    const handleChange = (ev: SelectChangeEvent<any>) => {
        const {
            target: { value },
        } = ev
        setChecked(value)
        mutate(id)
    }

    return (
        <TableCell>
            <MultipleSelect
                values={checked}
                name='Positions'
                onChange={handleChange}
                placeholder='Positions'
                options={options}
            />
        </TableCell>
    )
}
