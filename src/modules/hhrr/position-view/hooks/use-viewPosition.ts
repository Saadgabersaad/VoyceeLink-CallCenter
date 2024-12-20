import { useTable } from 'modules/core/hooks/use-table'
import {createPosition, getPositionsView} from "../services/positionView";
import { POSITIONS_KEY } from 'modules/hhrr/positions/consts/queryKeys';


export const usePositionView = () => {
    const { data, isLoading, isError, mutate, isFetching,   onSearch } = useTable({
        key: POSITIONS_KEY,
        fetcher: getPositionsView,
        mutationFn: createPosition,
    })

    // EXECUTED IN A ONSUBMIT FORM DIALOG EVENT
    const onCreatePosition = async (createPosition: createPosition) => {
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
