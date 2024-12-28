import * as React from "react";
import { TableCell} from '@mui/material'
import {EnhancedTable, EnhancedTableProps} from 'modules/core/components/tables/EnhancedTable'
import {DeleteHeadCells} from "modules/hhrr/positions/epmloyees/consts/headCell";
import {useEmployeesPosition} from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";
import {PositionEmployees} from "modules/hhrr/positions/epmloyees/shared/positionEmployees";
import { PositionsSelectRow } from "./assignPosition";


export const DeletePositionTable = ({rows, loading,mutate,positions,current}: Partial<EnhancedTableProps<PositionEmployees>>) => {


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

                    <PositionsSelectRow  mutate={mutate} positions={positions} />

                </>
            }}
        />
    )
}
