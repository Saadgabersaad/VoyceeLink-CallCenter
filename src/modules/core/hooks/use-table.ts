import toast from 'react-hot-toast'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { SearchParams } from '../utils/types'
import { useDebounce } from './use-debounce'
import { useState } from 'react'

type UseTableProps<T, TRequestBody> = {
  fetcher: (searchParams?: SearchParams) => Promise<T>
  //searchParams?: SearchParams
  mutationFn(data: TRequestBody): Promise<any> //FOR POST
  key: string
}

export const useTable = <T, TRequestBody>({
  mutationFn,
  fetcher,
  key
}: UseTableProps<T, TRequestBody>) => {
  const queryClient = useQueryClient()

  const [search, setSearch] = useState<SearchParams | undefined>()
  const delayedSearchParams = useDebounce(search?.query, 600)

  //GET
  const { data, isLoading, isError, isFetching } = useQuery({
    queryFn: async () => await fetcher(delayedSearchParams),
    queryKey: [key, delayedSearchParams],
  })

  //POST
  const { mutate } = useMutation({
    mutationFn: async (data: TRequestBody) => {
      return toast.promise(mutationFn(data), {
        loading: 'Saving...',
        success: 'Saved successfully',
        error: 'Error, contact IT'
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] })
    }
  })

  const onSearch = (value: string) => {
    setSearch({ query: value })
  }

  return {
    data: (data ?? []) as T,
    isLoading,
    isFetching,
    isError,
    onSearch,
    mutate,
  }
}
