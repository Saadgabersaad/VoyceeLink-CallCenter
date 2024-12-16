import { useQuery } from '@tanstack/react-query'

type UseTableProps<T> = {
  fetcher(): Promise<T[]>
  key: string
}

export const useTable = <T>({
  fetcher,
  key
}: UseTableProps<T>) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetcher(),
    queryKey: [key],
  })

  return {
    data: data ?? [],
    isLoading,
    isError,
  }
}
