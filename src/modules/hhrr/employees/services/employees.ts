import { api, HttpMethod } from 'modules/core/utils/api'
import { Employee } from '../shared/Employee'
import { Response } from '../components/EmployeesTabs'

export function getEmployees() {
  return api<Response>(HttpMethod.GET, `/employees`)
}
