import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TableCell } from '@mui/material'
import { Employee } from 'modules/hhrr/employees/shared/Employee'
import React, { useState } from 'react'
import { Department } from '../shared/Department'
import { usePositions } from 'modules/positions/hooks/use-positions'
import { useNewAreas } from '../hooks/use-new-areas'
import { Position } from '../shared/Position'

type Props = {
  employee: Employee
  department: Department
  departments: Department[]
}

export default function NewDepartmentAndPositionSelectors({
  employee,
  department,
  departments
}: Props) {
  const [newDepartment, setNewDepartment] = useState<Department | null>(department)
  const [newPosition, setNewPosition] = useState<Position | null>(null)

  const { handleAddNewArea } = useNewAreas()

  const mustSelectNewPosition = newPosition?.departmentId !== newDepartment?.id

  const findDepartment = (id: string) => {
    return departments.find((d) => d.id === id)!
  }

  const { data: positions } = usePositions()

  const filteredPositions = positions?.data
    ?.filter(pos => pos.departmentId === newDepartment?.id)

  const findPosition = (id: string) => {
    return positions?.data?.find((p) => p.id === id)
  }

  const onChangePosition = (position: Position) => {
    setNewPosition(position)
    handleAddNewArea({
      employeeId: employee.id,
      departmentId: position.departmentId!,
      positionId: position.id
    })
  }

  return <>
    <TableCell>
      <FormControl>
        <InputLabel id={`${employee.id}-department`}>
          Select a New Department
        </InputLabel>
        <Select
          labelId={`${employee.id}-department`}
          label='Select a New Department'
          value={newDepartment?.id}
          onChange={(e) => setNewDepartment(findDepartment(e.target.value))}
          sx={{
            width: 190
          }}
        >
          {departments?.map((department) => (
            <MenuItem key={department.id} value={department.id}>
              {department.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </TableCell>
    <TableCell>
      <FormControl error={mustSelectNewPosition}>
        <InputLabel id={`${employee.id}-new-position`}>
          Select a New Position
        </InputLabel>
        <Select
          labelId={`${employee.id}-new-position`}
          label='Select a New Position'
          onChange={(e) => onChangePosition(findPosition(e.target.value as string)!)}
          sx={{
            width: 190
          }}
        >
          {filteredPositions?.map((position) => (
            <MenuItem key={position.id} value={position.id}>
              {position.name}
            </MenuItem>
          ))}
        </Select>
        {mustSelectNewPosition && <FormHelperText>Required</FormHelperText>}
      </FormControl>
    </TableCell>

  </>
}
