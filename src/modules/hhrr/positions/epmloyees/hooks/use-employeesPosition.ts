import { useTable } from 'modules/core/hooks/use-table';
import { assignPositionToEmployee, deletePosition, getPositionsEmployees } from "modules/hhrr/positions/epmloyees/services/positionEmployees";
import { Employees_KEY } from "modules/hhrr/positions/consts/queryKeys";
import { usePositionContext } from "modules/hhrr/positions/epmloyees/shared/PositionSelectedId";


export const useEmployeesPosition = () => {
    const { positionId } = usePositionContext();

    const { data, isLoading, isError, mutate, isFetching, onSearch } = useTable({
        key: Employees_KEY,
        fetcher: (searchParams) => getPositionsEmployees(searchParams, positionId),
        mutationFn: (positionData) => assignPositionToEmployee(positionData),
    });

    // Updated mutation function to include employeeId in the URL
    const onAssignPositionToEmployee = async (employeeId: string, selectedId: string) => {
        // console.log("Employee ID in hook:", employeeId);
        // console.log("Selected Position ID in hook:", selectedId);
        const payload = {positionId: selectedId};
        try {
            mutate({ employeeId, payload });
            // console.log("Position assigned successfully");
        } catch (error) {
            console.error("Failed to assign position:", error);
        }
    };
    const onDeletePosition =  (positionId: string) => {
        try {
             deletePosition(positionId);
            console.log(`Position ${positionId} deleted successfully`);
        } catch (error) {
            console.error(`Failed to delete position ${positionId}:`, error);
        }
    };

    return {
        data,
        isError,
        isLoading,
        isFetching,
        onSearch,
        onAssignPositionToEmployee,
        onDeletePosition
    };
};
