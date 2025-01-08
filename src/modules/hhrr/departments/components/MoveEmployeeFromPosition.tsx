import { Table, TableHead, TableRow, TableCell, TableBody, Avatar, FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { Flex } from 'modules/core/components/flex'
import { Employee } from 'modules/hhrr/employees/shared/Employee'
import { Position } from '../shared/Position'
import { useState } from 'react'


type Props = {
  employees: Employee[]
  position: Position
  departmentPositions: Position[]
  employeeId?: string
  handlePositionChange(posId: string, employeeId: string): void
}

// MOVE POSITIONS IN THE SAME DEPARTMENT
export default function MoveEmployeeFromPosition({
  employees,
  position,
  departmentPositions,
  handlePositionChange
}: Props) {
  const filtered = departmentPositions?.filter(p => p.id !== position.id)

  return (
    <Table sx={{ mt: 2 }}>
      <TableHead sx={{ bgcolor: 'grey.100' }}>
        <TableRow>
          <TableCell sx={{ fontWeight: '700' }}>Name</TableCell>
          <TableCell sx={{ fontWeight: '700' }}>New Position</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees?.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>
              <Flex alignItems='center' gap={1}>
                <Avatar sx={{ width: 32, height: 32 }} />
                {employee.name} {employee.lastName}
              </Flex>
            </TableCell>
            <TableCell>
              <NewPositionSelect
                employees={[]}
                position={position}
                employeeId={employee.id}
                handlePositionChange={handlePositionChange}
                departmentPositions={filtered}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


const NewPositionSelect = ({
  departmentPositions,
  employeeId,
  handlePositionChange
}: Props) => {
  const [positionId, setPositionId] = useState<string>('')

  const handleChange = (id: string) => {
    setPositionId(id)
    handlePositionChange(id, employeeId!)
  }

  return (
    <FormControl>
      <InputLabel size='small'>
        Select Position
      </InputLabel>
      <Select
        sx={{ width: 220 }}
        size='small'
        value={positionId}
        onChange={(e) => handleChange(e.target.value)}
        label='Select Position'
      >
        {departmentPositions?.map((pos) => (
          <MenuItem key={pos.id} value={pos.id}>
            {pos.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}