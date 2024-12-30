import { useTable } from 'modules/core/hooks/use-table';
import { assignPositionToEmployee, getPositionsEmployees } from "modules/hhrr/positions/epmloyees/services/positionEmployees";
import { Employees_KEY } from "modules/hhrr/positions/consts/queryKeys";
import { usePositionContext } from "modules/hhrr/positions/epmloyees/shared/PositionSelectedId";

export const useEmployeesPosition = () => {
    const { positionId } = usePositionContext();

    const { data, isLoading, isError, mutate, isFetching, onSearch } = useTable({
        key: Employees_KEY,
        fetcher: (searchParams) => getPositionsEmployees(searchParams, positionId),
        mutationFn: (id: string) => assignPositionToEmployee(id), // Passing ID to mutationFn
    });


    const onAssignPositionToEmployee = async (assignPositionToEmployee: string | null) => {
        mutate(assignPositionToEmployee);
    };

    return {
        data,
        isError,
        isLoading,
        isFetching,
        onSearch,
        onAssignPositionToEmployee,
    };
};
