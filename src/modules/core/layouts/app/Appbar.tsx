import { Box, AppBar, Toolbar, Button } from '@mui/material'
import { Flex } from 'modules/core/components/Flex'
import { Logo } from 'modules/core/components/Logo'
import { SearchInput } from './Search'
import { User } from './User'

export const AppHeader = () => {
  return (
    <Box sx={{ bgcolor: 'grey.100' }}>
      <AppBar position='static' color='transparent' sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{
          justifyContent: 'space-between'
        }}>
          <Logo />
          <SearchInput />
          <Flex gap={2} alignItems='center'>
            <Button
              variant='contained'
              size='small'
              sx={{ textTransform: 'capitalize', py: .9 }}
            >
              Attendance
            </Button>
            <User />
          </Flex>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
