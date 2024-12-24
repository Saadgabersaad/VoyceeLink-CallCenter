import {Button, TableCell} from '@mui/material'
import {EnhancedTable, EnhancedTableProps} from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../../positions/consts/headCell'
import {Position} from "modules/hhrr/departments/shared/Position";
import DottedMenu from 'modules/hhrr/employees/components/DottedMenu';
import {DeleteHeadCells} from "modules/hhrr/positions/epmloyees/consts/headCell";
import {DeletePosition} from "modules/hhrr/positions/epmloyees/layout/deletePosition";
import {usePositions} from "modules/hhrr/positions/hooks/use-positions";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";

export const Table = ({
                          rows,
                          loading
                      }: Partial<EnhancedTableProps<Position>>) => {
    const {
        data,
        isLoading,
        onSearch,
        onCreatePosition
    } = usePositions()


    const positionOptions = [
        { label: 'View Position', icon: <PersonIcon color="primary" /> },
        { label: 'Change Position Name', icon: <WorkIcon color="primary" /> },
        { label: 'Delete User', icon: <DeleteIcon sx={{ color: 'red' }} /> },
    ];

    return (
        <EnhancedTable
            rows={rows!}
            loading={loading!}
            headCells={headCells}
            onPageChange={() => { }}
            render={(row) => {
                return <>
                    <TableCell>
                        {row.id}
                    </TableCell>
                    <TableCell>
                        {row.name}
                    </TableCell>
                    <TableCell>
                        {row.departmentId}
                    </TableCell>

                    <TableCell>
                        {row.employeeCount}
                    </TableCell>
                    <TableCell>
                    <DottedMenu options={positionOptions} mainModal={<DeletePosition create={onCreatePosition}/>}
                                userId={''}/>

                    </TableCell>

                </>
            }}
        />
    )
}
