import { useTable } from 'modules/core/hooks/use-table'
import {CreateEmployee} from "modules/hhrr/employees/shared/Employee";
import {EMPLOYEES_KEY} from "modules/hhrr/employees/consts/queryKeys";
import {createEmployee, getEmployee} from "modules/hhrr/employee-profile/services/employee";

export const useEmployee = (employeeId) => {
    const { data, isLoading, isError, mutate, isFetching, onSearch } = useTable({
        key: EMPLOYEES_KEY,
        fetcher: (employeeId)=>getEmployee(employeeId),
        mutationFn:createEmployee,
    })

    const onCreateEmployee = async (createEmployee: CreateEmployee) => {
        mutate(createEmployee)
    }

    return {
        data,
        isError,
        isLoading,
        isFetching,
        onSearch,
        onCreateEmployee,
    }
}
