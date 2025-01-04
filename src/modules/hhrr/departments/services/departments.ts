import { api, HttpMethod } from 'modules/core/utils/api'
import { CreateDepartment, Department } from '../shared/Department'
import { SearchParams } from 'modules/core/utils/types'
import { Employee } from 'modules/hhrr/employees/shared/Employee'
import { Position } from '../shared/Position'

export const getDepartments = (search?: SearchParams) => {
  const queryParam = search?.query ? `&search=${search.query}` : ''
  return api<Department[]>(HttpMethod.GET, `/departments?sortByOrder=asc&sortByField=created_at${queryParam}`)
}

export const createDepartment = (department: CreateDepartment) => {
  return api<Department[]>(HttpMethod.POST, `/departments`, department)
}

export const getEmployeesByDepartment = async (departmentId: string) => {
  return api<Employee[]>(HttpMethod.GET, `/employees?department=${departmentId}`)
}

export const getDepartment = (id: string) => {
  return api<Department>(HttpMethod.GET, `/departments/${id}`)
}

export const searchEmployees = async (search: string) => {
  const queryParam = search ? `&search=${search}` : ''
  return api<Employee[]>(HttpMethod.GET, `/employees?search=${search}`)
}

export const getPositionsByDepartment = async (departmentId: string) => {
  return api<Position[]>(HttpMethod.GET, `/positions/?department=${departmentId}`)
}

export const deleteDepartment = (departmentId: string) => {
  return api<any>(HttpMethod.DELETE, `/departments/${departmentId}`)
}