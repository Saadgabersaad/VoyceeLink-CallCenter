import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { PRIMARY } from 'modules/core/consts/theme'
import React from 'react'
import useDepartment from '../hooks/use-department'
import { useQuery } from '@tanstack/react-query'
import { getPositionsByDepartment } from '../services/departments'
import { Delete, DeleteForever } from '@mui/icons-material'
import { Flex } from 'modules/core/components/flex'
import { useBoolean } from 'modules/core/hooks/use-boolean'
import AddPositionsModal from 'modules/positions/components/AddPositionsModal'


export default function PositionsTable() {
  const { data, departmentId } = useDepartment()
  const { data: positions } = useQuery({
    queryKey: ['positionsdepartment', departmentId],
    queryFn: async () => {
      return getPositionsByDepartment(departmentId)
    }
  })


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
          {positions?.data?.map((position) => (
            <TableRow key={position.id}>
              <TableCell>{position.name}</TableCell>
              <TableCell>{position.employeeCount}</TableCell>
              <TableCell>
                <IconButton>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
