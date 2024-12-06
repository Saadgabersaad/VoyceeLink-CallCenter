import { Avatar, Typography } from '@mui/material'
import { Flex } from 'modules/core/components/Flex'
import { AccountMenu } from './AccountMenu'

export const User = () => {
  return (
    <Flex gap={1.5} alignItems='center'>
      <Avatar
        alt='Current user name'
        src='https://randomuser.me/api/portraits/men/22.jpg'
      />
      <div>
        <Flex alignItems='center' justifyContent='space-between'>
          <Typography
            color='primary'
            fontSize={14}
            fontWeight={500}
            sx={{ paddingBottom: 0, marginBottom: -.2 }}
          >
            John Doe
          </Typography>
          <AccountMenu />
        </Flex>
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
