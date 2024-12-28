import { api, HttpMethod } from 'modules/core/utils/api';
import { SearchParams } from 'modules/core/utils/types';
import { AssignPositionToEmployee } from "modules/hhrr/positions/shared/Position";
import { PositionEmployees } from "modules/hhrr/positions/epmloyees/shared/positionEmployees";

// Get positions for employees by position ID and optional search params
export const getPositionsEmployees = (search?: SearchParams | undefined, positionId?: string | null) => {
    // Dynamically build the query string based on search params

    const  positionQueryParam= search?.query ? `&search=${encodeURIComponent(search.query)}` : '';
    const queryParam = positionId ? `?position=${positionId}${positionQueryParam}` : '';

    console.log('Fetching employees for position:', positionId);
    console.log('Query Params:', queryParam);

    // Send a GET request to fetch the data
    return api<any[]>(HttpMethod.GET, `/employees${queryParam}`);
};

// Add a position to an employee
export const addPositionToEmployee = (position: AssignPositionToEmployee) => {
    // Send a POST request with the new position data
    return api<PositionEmployees[]>(HttpMethod.POST, `/positions`, position);
};
