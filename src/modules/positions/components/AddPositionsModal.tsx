import { Box, Button, Dialog, IconButton, TextField, Typography } from '@mui/material'
import { DialogProps, FormActions, FormDialogContent, FormHeading } from 'modules/core/components/FormDialog'
import { DARK, PRIMARY } from 'modules/core/consts/theme'
import { Department } from 'modules/hhrr/departments/shared/Department'
import { createPosition } from '../services/positions'
import { useState } from 'react'
import { CreatePosition } from 'modules/hhrr/departments/shared/Position'
import { Add, Delete } from '@mui/icons-material'
import { Flex } from 'modules/core/components/flex'

type Props = DialogProps & {
  department: Department
}

type PositionState = CreatePosition & {
  id: string
}

export default function AddPositionsModal({
  open,
  onClose,
  department
}: Props) {

  const [positions, setPositions] = useState<PositionState[]>([])
  const [positionName, setPositionName] = useState<string>('')

  const addPosition = () => {
    setPositions([
      ...positions!, {
        name: positionName,
        id: Date.now().toString(),
        departmentId: department.id
      }])
    setPositionName('')
  }

  const deletePosition = (id: string) => {
    setPositions(positions!.filter(position => position.id !== id))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!positions!.length) return

    return Promise.all(positions!
      .map(position => {
        const { id, ...rest} = position
        return createPosition(rest)
      }))
  }

  return (
    <Dialog
      open={open!}
      onClose={onClose}
      PaperProps={{
        component: 'form',
        onSubmit,
      }}
    >
      <FormHeading>
        Add new Position
      </FormHeading>
      <FormDialogContent>
        <p>Add new positions related to <Typography color={PRIMARY} component={'span'}>
          {department.name}</Typography> deparment</p>
        {!!positions.length && (
          <Flex maxHeight={200} pb={2} flexDirection='column' gap={1} overflowY={'auto'}>
            {positions!.map((position, index) => (
              <Flex key={position.id}>
                <Box
                  border={1}
                  borderColor={'grey.300'}
                  p={1}
                  flex={1}
                  borderRadius={1}
                >
                  <Typography>{position.name}</Typography>
                </Box>
                <IconButton onClick={() => deletePosition(position.id)}>
                  <Delete />
                </IconButton>
              </Flex>
            ))}
          </Flex>
        )}
        <Flex gap={1} pt={1}>
          <TextField
            size='small'
            value={positionName}
            label='New Position Name'
            onChange={(e) => setPositionName(e.target.value)}
          />
          <Button sx={{ bgcolor: DARK }} endIcon={<Add />} variant='contained' size='small' onClick={addPosition}>
            Add Position
          </Button>
        </Flex>
      </FormDialogContent>
      <FormActions
        onClose={onClose}
        buttonText='Add Position'
      />
    </Dialog>
  )
}
