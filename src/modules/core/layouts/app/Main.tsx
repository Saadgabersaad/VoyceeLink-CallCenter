import { Flex } from 'modules/core/components/Flex'
import { Navigation } from './Navigation'

export const Main = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <Flex flexGrow={1}>
      <Navigation />
      <Flex flexDirection='column' p={1.5} flexGrow={1}>
        {children}
      </Flex>
    </Flex>
  )
}