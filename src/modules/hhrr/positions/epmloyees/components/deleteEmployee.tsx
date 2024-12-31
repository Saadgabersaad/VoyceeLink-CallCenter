import * as React from "react";
import { TableCell } from '@mui/material';
import { EnhancedTable, EnhancedTableProps } from 'modules/core/components/tables/EnhancedTable';
import { DeleteHeadCells } from "modules/hhrr/positions/epmloyees/consts/headCell";
import { useEmployeesPosition } from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";
import { PositionEmployees } from "modules/hhrr/positions/epmloyees/shared/positionEmployees";
import { PositionsSelectRow } from "./assignPosition";
import { usePositionContext } from "modules/hhrr/positions/epmloyees/shared/PositionSelectedId";

export const DeletePositionTable = ({ rows, loading, positions }: Partial<EnhancedTableProps<PositionEmployees>>) => {
    return (
        <EnhancedTable
            rows={rows!}
            loading={loading!}
            headCells={DeleteHeadCells}
            onPageChange={() => {}}
            render={(row) => {
                console.log("Row Data: ", row); // Log row to verify it has employeeId
                return (
                    <>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.id}</TableCell>

                        <PositionsSelectRow employeeId={row.id} positions={positions} />
                    </>
                );
            }}
            options={null}
        />
    );
};
