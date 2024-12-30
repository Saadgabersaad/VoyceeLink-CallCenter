import { api, HttpMethod } from 'modules/core/utils/api'
import { CreateDepartment, Department } from '../shared/Department'
import { SearchParams } from 'modules/core/utils/types'

export const getDepartments = (search?: SearchParams) => {
  const queryParam = search?.query ? `&search=${search.query}` : ''
  return api<Department[]>(HttpMethod.GET, `/departments?sortByOrder=asc&sortByField=created_at${queryParam}`)
}

export const createDepartment = (department: CreateDepartment) => {
  return api<Department[]>(HttpMethod.POST, `/departments`, department)
}