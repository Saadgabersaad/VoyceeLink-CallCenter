import { useTable } from 'modules/core/hooks/use-table'
import {CreateEmployee} from "modules/hhrr/employees/shared/Employee";
import {EMPLOYEE_KEY} from "modules/hhrr/employees/consts/queryKeys";
import { getTimeEntries } from '../services/timeEntries';
import {createEmployee} from "modules/hhrr/employee-profile/services/employee";

export const useTimeEntries = () => {
    const { data, isLoading, isError, mutate, isFetching, onSearch } = useTable({

        key: EMPLOYEE_KEY,
        fetcher: getTimeEntries,
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
