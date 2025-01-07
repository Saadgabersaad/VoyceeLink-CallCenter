import { api, HttpMethod } from 'modules/core/utils/api'
import { SearchParams } from 'modules/core/utils/types'
import { CreatePosition } from "modules/hhrr/positions/shared/Position";
import { Position } from "modules/hhrr/departments/shared/Position";

export const getPositions = (search?: string) => {
    return api<Position[]>(HttpMethod.GET, `/positions${search?.length ? search + '&': '?'}sortByOrder=asc&sortByField=created_at`)
}

export const createPosition = (positions: CreatePosition) => {
    return api<Position[]>(HttpMethod.POST, `/positions`, positions)
}