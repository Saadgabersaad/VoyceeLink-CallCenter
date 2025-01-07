import { api, HttpMethod } from 'modules/core/utils/api';
import { SearchParams } from 'modules/core/utils/types';
export const getDepartmentById = (search?: SearchParams | undefined, departmentId?: string | null) => {


    const departmentQueryParam = search?.query ? `&search=${encodeURIComponent(search.query)}` : '';
    const queryParam = departmentId ? `${departmentId}${departmentQueryParam}` : departmentQueryParam;
    return api<any[]>(HttpMethod.GET, `/departments/${queryParam}`);
};
