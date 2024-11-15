
import { Avatar, Typography } from '@mui/material'
import { Flex } from 'modules/core/components/flex'

export const User = () => {
  return (
    <Flex gap={1.5} alignItems='center'>
      <Avatar
        alt='Current user name'
        src='https://randomuser.me/api/portraits/men/22.jpg'
      />
      <div>
        <Typography
          color='primary'
          fontSize={14}
          fontWeight={500}
          sx={{ paddingBottom: 0, marginBottom: -.1 }}
        >
          John Doe
        </Typography>
        <Typography
          component='span'
          color='grey.600'
          fontSize={12}
          display='block'
        >
          Recruitment Manager
        </Typography>
      </div>
    </Flex>
  )
}
