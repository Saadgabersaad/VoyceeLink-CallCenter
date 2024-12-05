import { Add, Download, Upload } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Flex } from 'modules/core/components/Flex'

export const Actions = () => {
  return (
    <Flex alignItems='center' gap={2}>
      <Button startIcon={<Download />} variant='outlined' sx={{
        textTransform: 'capitalize'
      }}>
        Download
      </Button>
      <Button startIcon={<Upload />} variant='outlined' sx={{
        textTransform: 'capitalize'
      }}>
        Import
      </Button>
      <Button startIcon={<Add />} variant='contained' sx={{
        textTransform: 'capitalize'
      }}>
        Add Customer
      </Button>
    </Flex>
  )
}
