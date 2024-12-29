import { useTable } from 'modules/core/hooks/use-table';
import {
    addPosition,
    addPositionToEmployee,
    getPositionsEmployees,
} from "modules/hhrr/positions/epmloyees/services/positionEmployees";
import {AssignPosition, AssignPositionToEmployee } from "modules/hhrr/positions/shared/Position";
import { Employees_KEY } from "modules/hhrr/positions/consts/queryKeys";
import {usePositionContext} from "modules/hhrr/positions/epmloyees/shared/PositionSelectedId";

// Define the types for better readability and safety
type PositionId = string | number;

export const useEmployeesPosition = () => {
    const {positionId} = usePositionContext()
    console.log('-----------------')
    console.log(positionId)
    console.log('-----------------')
    const { data, isLoading, isError, mutate, isFetching, onSearch } = useTable({
        key: Employees_KEY,
        fetcher: (searchParams)=>getPositionsEmployees(searchParams, positionId),
        mutationFn: addPosition,
    });

    // This will be triggered when the form dialog is submitted
    const onAddPosition = async (assignData: AssignPosition) => {
        mutate(assignData); // Trigger mutation with the data
    };

    return {
        data,
        isError,
        isLoading,
        isFetching,
        onSearch,
        onAddPosition,
    };
};
//     // This will be triggered when the form dialog is submitted
//     const onAssignPosition = async (assignData: AssignPositionToEmployee) => {
//         mutate(assignData); // Trigger mutation with the data
//     };
//
//     return {
//         data,
//         isError,
//         isLoading,
//         isFetching,
//         onSearch,
//         onAssignPosition,
//     };
// };
