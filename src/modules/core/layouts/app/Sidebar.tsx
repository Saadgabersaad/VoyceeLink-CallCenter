import { Box } from '@mui/material'
import { Flex } from 'modules/core/components/flex'
import { NavigationSubItems } from './NavigationSubItems'
import { Navigation } from './Navigation'

export const Sidebar = () => {
  return (
    <Flex flexGrow={1}>
      <Box
        sx={{
          width: 73,
          bgcolor: 'grey.100'
        }}
        borderRight={1}
        borderColor={'grey.200'}
        component='nav'
      >
        <Navigation />
      </Box>
      <NavigationSubItems />
    </Flex>
  )
}