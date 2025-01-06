import { api, HttpMethod } from 'modules/core/utils/api'
import { Employee } from '../shared/Employee'

export function getEmployees(queryParams?: string) {
  return api<Employee[]>(HttpMethod.GET, `/employees${queryParams}`)
}