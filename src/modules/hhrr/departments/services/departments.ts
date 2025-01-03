import { api, HttpMethod } from 'modules/core/utils/api'
import { CreateDepartment, Department } from '../shared/Department'
import { SearchParams } from 'modules/core/utils/types'
import { Employee } from 'modules/hhrr/employees/shared/Employee'
import { Position } from '../shared/Position'

type DepartmentsRes = {
  data: {
    data: {
      data: Department[]
    }
  }
}

type EmployeesRes = {
  data: Employee[]
}

type DepartmentRes = {
  data: Department
}

type PositionsRes = {
  data: {
    data: Position[]
  }
}

export const getDepartments = (search?: SearchParams) => {
  const queryParam = search?.query ? `&search=${search.query}` : ''
  return api<DepartmentsRes>(HttpMethod.GET, `/departments?sortByOrder=asc&sortByField=created_at${queryParam}`)
}

export const createDepartment = (department: CreateDepartment) => {
  return api<Department[]>(HttpMethod.POST, `/departments`, department)
}

export const getEmployeesByDepartment = async (departmentId: string) => {
  return api<EmployeesRes>(HttpMethod.GET, `/employees?department=${departmentId}`)
}

export const getDepartment = (id: string) => {
  return api<DepartmentRes>(HttpMethod.GET, `/departments/${id}`)
}

export const searchEmployees = async (search: string) => {
  const queryParam = search ? `&search=${search}` : ''
  return api<Employee[]>(HttpMethod.GET, `/employees?search=${search}`)
}

export const getPositionsByDepartment = async (departmentId: string) => {
  return api<PositionsRes>(HttpMethod.GET, `/positions/?department=${departmentId}`)
}