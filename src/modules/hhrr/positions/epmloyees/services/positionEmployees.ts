import { api, HttpMethod } from 'modules/core/utils/api';
import { SearchParams } from 'modules/core/utils/types';
import { PositionEmployees } from "modules/hhrr/positions/epmloyees/shared/positionEmployees";
import {AssignPosition, ChangePositionName} from "modules/hhrr/positions/shared/Position";
import {usePositionContext} from "modules/hhrr/positions/epmloyees/context/PositionSelectedId";

export const getPositionsEmployees = (search?: string) => {
    const { id } = usePositionContext();
    const  positionQueryParam= search?.length ? `&search=${encodeURIComponent(search)}` : '';
    const queryParam = id ? `?position=${id}${positionQueryParam}` : '';
    return api<any[]>(HttpMethod.GET, `/employees${queryParam}`);
};

export const assignPositionToEmployee = ({ employeeId, payload }: { employeeId: string, payload: { id: string } }) => {
    return api<AssignPosition[]>(HttpMethod.PUT, `/employees/${employeeId}/position`, payload);
};

export const deletePosition =  (id: string) => {
    return api<PositionEmployees[]>(HttpMethod.DELETE, `/positions/${id}`);
};

export const getPositionById = (search?: string, id?: string | null) => {
    const  positionQueryParam= search?.length ? `&search=${encodeURIComponent(search)}` : '';
    const queryParam = id ? `${id}${positionQueryParam}` : '';
    return api<any[]>(HttpMethod.GET, `/positions/${queryParam}`);
};

export const changePositionName = (id: string, payload: ChangePositionName) => {
    return api<PositionEmployees[]>(
        HttpMethod.PATCH, `/positions/${id}`, payload
    );
};