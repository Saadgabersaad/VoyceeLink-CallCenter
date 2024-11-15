import { ArrowLeftOutlined, EditNote } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Flex } from 'modules/core/components/flex'

export const Navigation = () => {
  return (
    <Flex justifyContent='space-between' py={.5}>
      <Button style={{
        textTransform: 'capitalize'
      }} size='small' startIcon={<ArrowLeftOutlined />}>
        Back
      </Button>
      <Button style={{
        textTransform: 'capitalize'
      }} size='small' endIcon={<EditNote />}>
        Edit
      </Button>
    </Flex>
  )
}
