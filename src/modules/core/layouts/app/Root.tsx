import { AppHeader } from './Appbar'
import { Sidebar } from './Sidebar'

export const AppLayout = ({ children }: Readonly<{
  children: React.ReactNode
}>) => {
  return <>
    <AppHeader />
    <Sidebar />
    {children}
  </>
}
