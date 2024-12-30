import { api, HttpMethod } from 'modules/core/utils/api';
import { SearchParams } from 'modules/core/utils/types';
import {AssignPosition, AssignPositionToEmployee} from "modules/hhrr/positions/shared/Position";
import { PositionEmployees } from "modules/hhrr/positions/epmloyees/shared/positionEmployees";
import {usePositionContext} from "modules/hhrr/positions/epmloyees/shared/PositionSelectedId";

// Get positions for employees by position ID and optional search params
export const getPositionsEmployees = (search?: SearchParams | undefined, positionId?: string | null) => {
    // Dynamically build the query string based on search params

    const  positionQueryParam= search?.query ? `&search=${encodeURIComponent(search.query)}` : '';
    const queryParam = positionId ? `?position=${positionId}${positionQueryParam}` : '';
    return api<any[]>(HttpMethod.GET, `/employees${queryParam}`);
};

    export const assignPositionToEmployee = (position: AssignPositionToEmployee,id?: string | null) => {
    return api<PositionEmployees[]>(HttpMethod.PUT, `/employees/${id}/position`, position);
};

  export const deletePosition = (position: AssignPositionToEmployee,positionId?: string | null) => {
    return api<PositionEmployees[]>(HttpMethod.DELETE, `/positions${positionId}`, position);
};


