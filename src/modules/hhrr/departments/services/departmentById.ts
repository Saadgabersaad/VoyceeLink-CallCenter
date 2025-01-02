import { api, HttpMethod } from 'modules/core/utils/api';
import { SearchParams } from 'modules/core/utils/types';

// Get positions for employees by position ID and optional search params
export const getDepartmentById = (search?: SearchParams | undefined, departmentId?: string | null) => {
    console.log('Fetching department data...');
    console.log('Department ID:', departmentId);

    // Construct the query string
    const departmentQueryParam = search?.query ? `&search=${encodeURIComponent(search.query)}` : '';
    const queryParam = departmentId ? `${departmentId}${departmentQueryParam}` : departmentQueryParam;

    // API call
    return api<any[]>(HttpMethod.GET, `/departments/${queryParam}`);
};
