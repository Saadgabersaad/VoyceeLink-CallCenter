import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { PRIMARY } from 'modules/core/consts/theme'
import React from 'react'
import useDepartment from '../hooks/use-department'
import { Flex } from 'modules/core/components/flex'
import { useBoolean } from 'modules/core/hooks/use-boolean'
import AddPositionsModal from 'modules/positions/components/AddPositionsModal'
import DeletePositionFromDepartment from './DeletePositionFromDepartment'
import { usePositions } from 'modules/positions/hooks/use-positions'


export default function PositionsTable() {
  const { data, departmentId } = useDepartment()
  const { data: positions } = usePositions()

  const department = data?.data
  const filteredByDepartment = positions?.data
    ?.filter(pos => pos.departmentId === departmentId)


  //TODO IMPORT USE QUERY CLIENT TO GET NEWE PPO
  const [open, onOpen, onClose] =useBoolean()

  return (
    <div>
      {open && (
        <AddPositionsModal
          onClose={onClose}
          department={data?.data!}
          open
        />
      )}
      <Flex alignItems='center' justifyContent='space-between'>
        <Typography>
          Positions Related to <Typography component='span' color={PRIMARY}>
            {data?.data.name}
          </Typography>
        </Typography>
        <Button type='button' variant='contained' onClick={onOpen}>
          Add Position
        </Button>
      </Flex>
      <Table sx={{ bgcolor: 'white', mt: 2 }}>
        <TableHead sx={{ bgcolor: 'grey.100' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: '700' }}>Position Name</TableCell>
            <TableCell sx={{ fontWeight: '700' }}>Numbers of employees</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredByDepartment?.map((position) => (
            <TableRow key={position.id}>
              <TableCell>{position.name}</TableCell>
              <TableCell>{position.employeeCount}</TableCell>
              <TableCell>
                <DeletePositionFromDepartment department={department!} position={position} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
