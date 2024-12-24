import * as React from "react";
import { TableCell} from '@mui/material'
import {EnhancedTable, EnhancedTableProps} from 'modules/core/components/tables/EnhancedTable'
import {DeleteHeadCells} from "modules/hhrr/positions/epmloyees/consts/headCell";
import {useEmployeesPosition} from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";
import {PositionEmployees} from "modules/hhrr/positions/epmloyees/shared/positionEmployees";


export const DeletePositionTable = ({rows, loading}: Partial<EnhancedTableProps<PositionEmployees>>) => {

    const {
        data,
        isLoading,
        onSearch,
        onCreatePosition
    } = useEmployeesPosition()

    console.log(isLoading)
    console.log(data)

    return (
        <EnhancedTable
            rows={rows!}
            loading={loading!}
            headCells={DeleteHeadCells}
            onPageChange={() => { }}
            render={(row) => {
                return <>


                    <TableCell>
                        {row.name}
                    </TableCell>
                         <TableCell>
                        {row.id}
                    </TableCell>



                </>
            }}
        />
    )
}
