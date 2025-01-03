import { useQuery } from '@tanstack/react-query'
import { getPositions } from '../services/positions'

export const usePositions = () => {
  const { data } = useQuery({
    queryKey: ['positions'],
    queryFn: () => getPositions()
  })

  return { data: data }
}
