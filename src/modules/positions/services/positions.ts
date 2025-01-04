import { api, HttpMethod } from 'modules/core/utils/api'
import { CreatePosition } from 'modules/hhrr/departments/shared/Position'
import { Position } from '../shared/Position'

export const getPositions = () => {
  return api<Position[]>(HttpMethod.GET, `/positions`)
}

export const createPosition = (data: CreatePosition) => {
  return api(HttpMethod.POST, `/positions`, data)
}

export const deletePosition = (positionId: string) => {
  return api(HttpMethod.DELETE, `/positions/${positionId}`)
}