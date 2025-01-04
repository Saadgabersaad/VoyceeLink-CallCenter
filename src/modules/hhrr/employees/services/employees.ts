import { api, HttpMethod } from 'modules/core/utils/api'
import { Employee } from '../shared/Employee'

export function getEmployees() {
  return api<Employee[]>(HttpMethod.GET, `/employees`)
}
