import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { PRIMARY } from 'modules/core/consts/theme'
import { NavigationItem } from './types'
import Link from 'next/link'

export const NavItem = ({
  label,
  href,
  icon
}: NavigationItem) => {
  const isActive = href === '/crm'

  return (
    <ListItem key={''} disablePadding sx={{ display: 'block' }}>
      <ListItemButton sx={{
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        paddingInline: 0,
      }}>
        <Link
          href={href}
          style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
        >
          <ListItemIcon
            sx={{
              justifyContent: 'center',
              ...isActive && { color: PRIMARY }
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: 10.5,
              color: isActive ? 'primary' : 'grey.700'
            }}
            primary={label}
          />
        </Link>
      </ListItemButton>
    </ListItem>
  )
}
