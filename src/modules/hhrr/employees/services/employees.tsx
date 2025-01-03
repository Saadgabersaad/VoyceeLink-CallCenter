import { api, HttpMethod } from 'modules/core/utils/api'
import { SearchParams } from 'modules/core/utils/types'
import {Position} from "modules/hhrr/departments/shared/Position";
import {CreateEmployee, Employees} from "modules/hhrr/employees/shared/Employee";

export const getEmployees = (search?: SearchParams) => {
    const queryParam = search?.query ? `&search=${search.query}` : ''
    return api<Employees[]>(HttpMethod.GET, `/employees?sortByOrder=asc&sortByField=created_at${queryParam}`)
}

export const createEmployee = (employee: CreateEmployee) => {
    return api<Employees[]>(HttpMethod.POST, `/employees`, employee)
}