import { api, HttpMethod } from 'modules/core/utils/api'
import { SearchParams } from 'modules/core/utils/types'
import {CreatePosition} from "modules/hhrr/positions/shared/Position";
import {Position} from "modules/hhrr/departments/shared/Position";

export const getPositionsView = (search?: SearchParams) => {
    const queryParam = search?.query ? `&search=${search.query}` : ''
    return api<Position[]>(HttpMethod.GET, `GET employees/?position=cm48g744s0002o2tct5he6tqk	}`)
}

export const createPosition = (position: CreatePosition) => {
    return api<Position[]>(HttpMethod.POST, `/positions`, position)
}