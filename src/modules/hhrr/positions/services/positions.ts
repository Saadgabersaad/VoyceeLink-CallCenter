import { api, HttpMethod } from 'modules/core/utils/api'
import { SearchParams } from 'modules/core/utils/types'
import {CreatePosition} from "modules/hhrr/positions/shared/Position";
import {Position} from "modules/hhrr/departments/shared/Position";
import {PositionEmployees} from "modules/hhrr/positions/epmloyees/shared/positionEmployees";

export const getPositions = (search?: SearchParams) => {
    const queryParam = search?.query ? `&search=${search.query}` : ''
    return api<Position[]>(HttpMethod.GET, `/positions?sortByOrder=asc&sortByField=created_at${queryParam}`)
}

export const createPosition = (position: CreatePosition) => {
    return api<Position[]>(HttpMethod.POST, `/positions`, position)
}