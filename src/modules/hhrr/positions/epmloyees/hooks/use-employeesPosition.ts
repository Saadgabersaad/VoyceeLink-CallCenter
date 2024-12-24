import { useTable } from 'modules/core/hooks/use-table'
import {
    createPosition,
    getPositionsEmployees,
} from "modules/hhrr/positions/epmloyees/services/positionEmployees";
import {CreatePosition} from "modules/hhrr/positions/shared/Position";
import {POSITIONS_KEY} from "modules/hhrr/positions/consts/queryKeys";



export const useEmployeesPosition = () => {
    const { data, isLoading, isError, mutate, isFetching,   onSearch } = useTable({
        key: POSITIONS_KEY,
        fetcher: getPositionsEmployees,
        mutationFn: createPosition,
    })

    // EXECUTED IN A ONSUBMIT FORM DIALOG EVENT
    const onCreatePosition = async (createPosition: CreatePosition) => {
        mutate(createPosition)
    }

    return {
        data,
        isError,
        isLoading,
        isFetching,
        onSearch,
        onCreatePosition,
    }
}
