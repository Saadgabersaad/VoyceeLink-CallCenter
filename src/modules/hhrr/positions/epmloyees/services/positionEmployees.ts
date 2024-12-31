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

// Log employeeId and positionId to verify values
export const assignPositionToEmployee = ({ employeeId, payload }: { employeeId: string, payload: { positionId: string } }) => {
    console.log("Employee ID in API function:", employeeId); // Log to verify employeeId
    console.log("Position ID in API function:", payload.positionId); // Log to verify positionId

    // Ensure the correct URL format with employeeId, and send only the positionId in the payload
    return api<PositionEmployees[]>(HttpMethod.PUT, `/employees/${employeeId}/position`, payload);
};


export const deletePosition = async (positionId: string) => {
    return api<PositionEmployees[]>(HttpMethod.DELETE, `/positions/${positionId}`);
};