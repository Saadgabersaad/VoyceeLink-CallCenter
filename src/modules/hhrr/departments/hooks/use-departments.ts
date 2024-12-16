import { useQuery } from '@tanstack/react-query';
import { Department } from 'modules/hhrr/departments/shared/Department';



const getDepartments = () => {
  return fetch('http://localhost:4000/departments', {
    method: 'GET',
    headers: {
      'x-tenant-id': 'develop'
    }
  }).then(res => res.json()) as Promise<Department[]>
}

export const useDepartments = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getDepartments(),
    queryKey: ['departments'],
  })

  return {
    data: data?.data ?? [],
    isLoading,
    isError
  }
}
