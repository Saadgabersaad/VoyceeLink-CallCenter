import { api, HttpMethod } from 'modules/core/utils/api'

export const getPositions = () => {
  return api(HttpMethod.GET, `/positions`)
}