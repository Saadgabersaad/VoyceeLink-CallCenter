import { api, HttpMethod } from 'modules/core/utils/api';
import { SearchParams } from 'modules/core/utils/types';
import { PositionEmployees } from "modules/hhrr/positions/epmloyees/shared/positionEmployees";

// Get positions for employees by position ID and optional search params
export const getPositionsEmployees = (search?: SearchParams | undefined, positionId?: string | null) => {
    // Dynamically build the query string based on search params

    const  positionQueryParam= search?.query ? `&search=${encodeURIComponent(search.query)}` : '';
    const queryParam = positionId ? `?position=${positionId}${positionQueryParam}` : '';
    return api<any[]>(HttpMethod.GET, `/employees${queryParam}`);
};

// Log employeeId and positionId to verify values
export const assignPositionToEmployee = ({ employeeId, payload }: { employeeId: string, payload: { positionId: string } }) => {

    // Ensure the correct URL format with employeeId, and send only the positionId in the payload
    return api<PositionEmployees[]>(HttpMethod.PUT, `/employees/${employeeId}/position`, payload);
};


export const deletePosition =  (positionId: string) => {
    return api<PositionEmployees[]>(HttpMethod.DELETE, `/positions/${positionId}`);
};

