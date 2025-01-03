import { useTable } from 'modules/core/hooks/use-table'
import {CreateEmployee} from "modules/hhrr/employees/shared/Employee";
import {EMPLOYEES_KEY} from "modules/hhrr/employees/consts/queryKeys";
import {createEmployee, getEmployees } from '../services/employees';

export const useEmployees = () => {
  const { data, isLoading, isError, mutate, isFetching, onSearch } = useTable({
    key: EMPLOYEES_KEY,
    fetcher: getEmployees,
    mutationFn:createEmployee,
  })

  //EXECUTED IN A ONSUBMIT FORM DIALOG EVENT
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
