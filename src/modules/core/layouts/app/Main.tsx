import { Flex } from 'modules/core/components/flex'
import { Navigation } from './Navigation'

export const Main = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <Flex flexGrow={1}>
      <Navigation />
      <Flex flexDirection='column' flexGrow={1}>
        {children}
      </Flex>
    </Flex>
  )
}