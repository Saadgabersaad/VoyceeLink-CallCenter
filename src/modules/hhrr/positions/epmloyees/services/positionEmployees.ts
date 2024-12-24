import { api, HttpMethod } from 'modules/core/utils/api'
import { SearchParams } from 'modules/core/utils/types'
import {CreatePosition} from "modules/hhrr/positions/shared/Position";
import {PositionEmployees} from "modules/hhrr/positions/epmloyees/shared/positionEmployees";

export const getPositionsEmployees = (search?: SearchParams) => {
    const queryParam = search?.query ? `&search=${search.query}` : ''
    return api<PositionEmployees[]>(HttpMethod.GET, `/employees?position=cm48g744s0002o2tct5he6tqk`)
    // return api<PositionEmployee[]>(HttpMethod.GET, `employees/position=cm48g744s0002o2tct5he6tqk`)
}

export const createPosition = (position: CreatePosition) => {
    return api<PositionEmployees[]>(HttpMethod.POST, `/positions`, position)
}