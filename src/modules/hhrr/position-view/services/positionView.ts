import { api, HttpMethod } from 'modules/core/utils/api'
import { SearchParams } from 'modules/core/utils/types'
import {CreatePosition} from "modules/hhrr/positions/shared/Position";
import {Position} from "modules/hhrr/departments/shared/Position";

export const getPositionsView = (search?: SearchParams) => {
    const queryParam = search?.query ? `&search=${search.query}` : ''
    return api<Position[]>(HttpMethod.GET, `GET employees/?position=cm489fa4p0000bf0r3e4i3byq	}`)
}

export const createPosition = (position: CreatePosition) => {
    return api<Position[]>(HttpMethod.POST, `/positions`, position)
}