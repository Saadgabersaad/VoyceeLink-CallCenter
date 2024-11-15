import { Box, List } from '@mui/material'
import { NavItem } from './NavItem'
import { modules } from './consts'
import { NavigationSubItems } from './NavigationSubItems'

export const Navigation = () => {
  return <>
    <Box
      sx={{
        width: 73,
        bgcolor: 'grey.100'
      }}
      borderRight={1}
      borderColor={'grey.200'}
      component='nav'
    >
      <List>
        {modules.map((module) => (
          <NavItem key={module.label} {...module} />
        ))}
      </List>
    </Box>
    <NavigationSubItems />
  </>
}
