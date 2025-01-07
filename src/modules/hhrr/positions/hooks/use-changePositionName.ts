import { useTable } from 'modules/core/hooks/use-table';
import { changePositionName, getPositionById } from 'modules/hhrr/positions/epmloyees/services/positionEmployees';
import { POSITION_NAME_KEY } from 'modules/hhrr/positions/consts/queryKeys';
import { usePositionContext } from 'modules/hhrr/positions/epmloyees/shared/PositionSelectedId';
import { SearchParams } from 'modules/core/utils/types';
import { ChangePositionName } from 'modules/hhrr/positions/shared/Position';
export const useChangePositionName = () => {
    const { positionId } = usePositionContext();
    const {data, isLoading, isError, mutate, isFetching, onSearch,} = useTable({
        key: POSITION_NAME_KEY,
        fetcher: (searchParams: SearchParams) => getPositionById(searchParams, positionId),
        mutationFn: (payload: ChangePositionName) => changePositionName(positionId!, payload),
    });


    const onChangePositionName = async (payload: ChangePositionName) => {
        try {
            await mutate(payload);
        } catch (error) {
            console.error('Error changing position name:', error);
        }
    };


    return {
        data,
        isError,
        isLoading,
        isFetching,
        onSearch,
        onChangePositionName,
    };
};
