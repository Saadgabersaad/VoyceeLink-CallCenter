import { api, HttpMethod } from 'modules/core/utils/api';
import { SearchParams } from 'modules/core/utils/types';

import {CreateEmployee, Employees} from "modules/hhrr/employees/shared/Employee";

const startTime = '2024-12-01T00:00:00Z';
const endTime = '2025-12-09T23:59:59Z';

/**
 * Fetch time entries for a given employee within a specified time range.
 *
 * @param search - Optional search parameters.
 * @param employeeId - The ID of the employee to fetch time entries for.
 * @returns A promise resolving to an array of time entries.
 */
export const getTimeEntries = (search?: SearchParams, employeeId?: string | null) => {
    const queryParams = new URLSearchParams();
    if (employeeId) queryParams.append('employeeId', employeeId);
    if (search?.query) queryParams.append('search', search.query);
    queryParams.append('startTime', startTime);
    queryParams.append('endTime', endTime);

    return api<any[]>(HttpMethod.GET, `/time-entries?${queryParams.toString()}`);
};

/**
 * Create a new employee.
 *
 * @param newEmployee - The details of the employee to create.
 * @returns A promise resolving to an array of positions.
 */
export const createEmployee = (newEmployee: CreateEmployee) => {
    return api<Employees[]>(HttpMethod.POST, `/employees`, newEmployee);
};
