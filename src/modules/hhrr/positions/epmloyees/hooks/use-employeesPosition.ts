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
        console.log("Employee ID in hook:", employeeId);
        console.log("Selected Position ID in hook:", selectedId);

        // Prepare the payload to only include positionId
        const payload = {
            positionId: selectedId, // Only send positionId in the body
        };

        console.log("Payload before mutation:", payload); // Log to verify the payload

        try {
            // Call mutate function with the payload, ensuring the employeeId is part of the URL
            mutate({ employeeId, payload });
            console.log("Position assigned successfully");
        } catch (error) {
            console.error("Failed to assign position:", error);
        }
    };


    const onDeletePosition = async (positionId: string) => {
        try {
            await deletePosition(positionId);
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
        onAssignPositionToEmployee, // Return the updated function
        onDeletePosition
    };
};
