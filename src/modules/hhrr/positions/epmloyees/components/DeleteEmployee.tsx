import * as React from "react";
import { TableCell } from '@mui/material';
import { EnhancedTable, EnhancedTableProps } from 'modules/core/components/tables/EnhancedTable';
import { DeleteHeadCells } from "modules/hhrr/positions/epmloyees/consts/headCell";
import { PositionsSelectRow } from "./AssignPosition";
import {Position} from "modules/hhrr/departments/shared/Position";
import {PositionEmployees} from "modules/hhrr/positions/epmloyees/shared/positionEmployees";


interface DeletePositionTableProps extends Partial<EnhancedTableProps<Position>> {
    rows?: Position[];
    positions?: PositionEmployees[];
}

export const DeletePositionTable: React.FC<DeletePositionTableProps> = ({ rows, loading, positions }) => {
    return (
        <EnhancedTable
            rows={rows!}
            loading={loading!}
            headCells={DeleteHeadCells}
            onPageChange={() => {
            }}
            render={(row) => {
                console.log("Row Data: ", row);
                return (
                    <>
                        <TableCell>{row.name}</TableCell>
                        <PositionsSelectRow employeeId={row.id} positions={positions}/>
                    </>
                );
            }}
                  />
    );
};
