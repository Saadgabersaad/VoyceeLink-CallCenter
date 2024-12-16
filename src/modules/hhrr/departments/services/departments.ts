import { api, HttpMethod } from 'modules/core/utils/api'
import { Department } from '../shared/Department'

export const getDepartments = () => {
  return api<Department[]>(HttpMethod.GET, `/departments`)
}