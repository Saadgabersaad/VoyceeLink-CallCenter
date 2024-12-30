import { useState } from 'react';
import {
    TableCell,
    SelectChangeEvent,
    Box,
    Select,
    InputLabel,
    MenuItem,
    FormControl,
} from '@mui/material';
import { selectAdapter } from 'modules/core/components/Select';
import { Position } from 'modules/hhrr/departments/shared/Position';
import { usePositionContext } from '../shared/PositionSelectedId';
import {useEmployeesPosition} from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";

type Props = {
    positions: Position[]; // Positions from this department
    reAssign?: () => void; // Optional reAssign callback
};

export function PositionsSelectRow({ positions,id }: Props) {
    const { positionId, setPositionId } = usePositionContext();

    const {onAssignPositionToEmployee}=useEmployeesPosition()
    const options = positions.map(({ name, id }) => {
        return selectAdapter(name, id);
    }).concat({
        label: 'UI GG',
        value: 'fefeefe',
    });

    const [selectedPosition, setSelectedPosition] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        const selectedId = event.target.value as string;
        setSelectedPosition(selectedId);
        setPositionId(id); // Update the positionId in the context

        onAssignPositionToEmployee
    };


    return (
        <TableCell  onClick={()=> setPositionId(id)}>
            <Box sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                    <InputLabel id="position-select-label">Position</InputLabel>
                    <Select
                        labelId="position-select-label"
                        id="position-select"
                        value={selectedPosition}
                        label="Position"
                        onChange={handleChange}
                    >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </TableCell>
    );
}
