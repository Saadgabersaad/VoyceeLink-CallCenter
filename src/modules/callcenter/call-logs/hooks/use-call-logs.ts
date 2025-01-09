import { useTable } from 'modules/core/hooks/use-table'
import { CALL_LOGS_KEY } from '../consts/queryKeys'
import { getLogs } from '../services/call-logs'

export const useCallLogs = () => {
    const { data, isLoading, isError, isFetching, onSearch } = useTable({
        key: CALL_LOGS_KEY,
        fetcher: getLogs,
        mutationFn: () => Promise.resolve()
    })

    return {
        data,
        isError,
        isLoading,
        isFetching,
        onSearch,
    }
}
