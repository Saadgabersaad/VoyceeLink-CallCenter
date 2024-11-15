import { AppHeader } from './Appbar'
import { Main } from './Main'

export const AppLayout = ({ children }: Readonly<{
  children: React.ReactNode
}>) => {
  return <>
    <AppHeader />
    <Main>
      {children}
    </Main>
  </>
}
