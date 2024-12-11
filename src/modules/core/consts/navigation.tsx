import {
  Chat,
  Dashboard,
  ListAlt,
  People,
  Phone,
  CalendarMonth,
  DashboardOutlined,
  DeviceHub,
} from '@mui/icons-material'

export type NavigationItem = {
  label: string
  href: string
  icon?: JSX.Element
  subItems?: NavigationItem[]
}

export const modules: NavigationItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <Dashboard />
  },
  {
    label: 'HR',
    href: '/hhrr',
    icon: <People />,
    subItems: [
      {
        label: 'Employees',
        href: '/hhrr/employees',
        icon: <People />,
      },
      {
        label: 'Departments',
        href: '/hhrr/departments',
        icon: <DeviceHub />
      }
    ]
  },
  {
    label: 'CRM',
    href: '/crm',
    icon: <People />,
    subItems: [
      {
        label: 'Dashboard',
        href: '/dashboard',
        icon: <DashboardOutlined />,
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