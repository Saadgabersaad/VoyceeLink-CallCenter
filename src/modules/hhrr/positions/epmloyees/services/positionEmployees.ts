import { api, HttpMethod } from 'modules/core/utils/api';
import { SearchParams } from 'modules/core/utils/types';
import { PositionEmployees } from "modules/hhrr/positions/epmloyees/shared/positionEmployees";
import {AssignPosition, ChangePositionName} from "modules/hhrr/positions/shared/Position";

export const getPositionsEmployees = (search?: SearchParams | undefined, positionId?: string | null) => {
    const  positionQueryParam= search?.query ? `&search=${encodeURIComponent(search.query)}` : '';
    const queryParam = positionId ? `?position=${positionId}${positionQueryParam}` : '';
    return api<any[]>(HttpMethod.GET, `/employees${queryParam}`);
};

export const assignPositionToEmployee = ({ employeeId, payload }: { employeeId: string, payload: { positionId: string } }) => {
    return api<AssignPosition[]>(HttpMethod.PUT, `/employees/${employeeId}/position`, payload);
};

export const deletePosition =  (positionId: string) => {
    return api<PositionEmployees[]>(HttpMethod.DELETE, `/positions/${positionId}`);
};

export const getPositionById = (search?: SearchParams | undefined, positionId?: string | null) => {
    const  positionQueryParam= search?.query ? `&search=${encodeURIComponent(search.query)}` : '';
    const queryParam = positionId ? `${positionId}${positionQueryParam}` : '';
    return api<any[]>(HttpMethod.GET, `/positions/${queryParam}`);
};

export const changePositionName = (positionId: string, payload: ChangePositionName) => {
    return api<PositionEmployees[]>(
        HttpMethod.PATCH, `/positions/${positionId}`, payload
    );
};