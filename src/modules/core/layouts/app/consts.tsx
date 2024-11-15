import {
  Chat,
  Dashboard,
  ListAlt,
  People,
  Phone,
  CalendarMonth,
} from '@mui/icons-material'
import { NavigationItem } from './types'

export const modules: NavigationItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <Dashboard />
  },
  {
    label: 'CRM',
    href: '/crm',
    icon: <People />,
    subItems: [
      {
        label: 'Dashboard',
        href: '/dashboard',
        icon: <Dashboard />,
        subItems: [
          {
            label: 'Overview',
            href: '/overview',
          }
        ]
      }
    ]
  },
  {
    label: 'Calendar',
    href: '/calendar',
    icon: <CalendarMonth />
  },
  {
    label: 'Chat',
    href: '/chat',
    icon: <Chat />
  },
  {
    label: 'Tickets',
    href: '/tickets',
    icon: <ListAlt />
  },
  {
    label: 'Call Center',
    href: '/call-center',
    icon: <Phone />
  }
]