import { api, HttpMethod } from 'modules/core/utils/api'

export const addEmployeeToDepartment = (employeeId: string) => {
  return api(HttpMethod.PUT, `employees/${employeeId}/add-employee`)	
}