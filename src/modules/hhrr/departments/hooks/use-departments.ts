import { useTable } from 'modules/core/hooks/use-table'
import { getDepartments } from '../services/departments'

export const useDepartments = () => {
  const { data, isLoading, isError } = useTable({
    key: 'departments',
    fetcher: getDepartments
  })

  return {
    data: data ?? [],
    isLoading,
    isError
  }
}
