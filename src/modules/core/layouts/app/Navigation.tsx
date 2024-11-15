import { List } from '@mui/material'
import { NavItem } from './NavItem'
import { modules } from './consts'

export const Navigation = () => {
  return (
    <List>
      {modules.map((module) => (
        <NavItem key={module.label} {...module} />
      ))}
    </List>
  )
}
