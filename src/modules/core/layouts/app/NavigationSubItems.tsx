'use client'

import { List, ListSubheader, styled } from '@mui/material'
import { SubNavItem } from './SubNavItem'
import { modules } from './consts'
import Link from 'next/link'

const Navbar = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 20,
    paddingRight: 20,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 12,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
})

// SECOND SIDEBAR
export function NavigationSubItems() {
  const subItems = modules.find(mod => mod.href === '/crm')?.subItems

  return (
    <Navbar
      sx={{
        width: '100%',
        maxWidth: 225,
        bgcolor: 'background.paper',
        borderWidth: '1px',
        borderColor: 'grey.200',
        borderStyle: 'solid'
      }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id="nested-list-subheader">
          CRM
        </ListSubheader>
      }
    >
      {subItems?.map((item) => (
        <SubNavItem key={item.label} item={item} />
      ))}
    </Navbar>
  )
}
