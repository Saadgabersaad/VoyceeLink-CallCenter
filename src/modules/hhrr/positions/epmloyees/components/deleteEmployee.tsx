import * as React from "react";
import { TableCell } from '@mui/material';
import { EnhancedTable, EnhancedTableProps } from 'modules/core/components/tables/EnhancedTable';
import { DeleteHeadCells } from "modules/hhrr/positions/epmloyees/consts/headCell";
import { PositionsSelectRow } from "./assignPosition";
import { Position } from "modules/hhrr/departments/shared/Position";

export const DeletePositionTable = ({ rows, loading, positions }: Partial<EnhancedTableProps<Position>>) => {
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
                        <TableCell>{row.id}</TableCell>

                        <PositionsSelectRow employeeId={row.id} positions={positions}/>
                    </>
                );
            }}
                  />
    );
};
