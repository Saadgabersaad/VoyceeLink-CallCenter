import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { PRIMARY } from 'modules/core/consts/theme'
import React from 'react'
import useDepartment from '../hooks/use-department'
import { useQuery } from '@tanstack/react-query'
import { getPositionsByDepartment } from '../services/departments'
import { Delete, DeleteForever } from '@mui/icons-material'
import { Flex } from 'modules/core/components/flex'


export default function PositionsTable() {
  const { data, departmentId } = useDepartment()

  const { data: positions, isLoading, isFetching } = useQuery({
    queryKey: ['positionsdepartment', departmentId],
    queryFn: async () => {
      return getPositionsByDepartment(departmentId)
    }
  })
  console.log(positions, isLoading, isFetching)

  console.log(positions, isLoading)

  return (
    <div>
      <Flex alignItems='center' justifyContent='space-between'>
        <Typography>
          Positions Related to <Typography component='span' color={PRIMARY}>
            {data?.data.name}
          </Typography>
        </Typography>
        <Button type='button' variant='contained'>
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
          {positions?.data?.data?.map((position) => (
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
