import { TableCell} from '@mui/material'
import {EnhancedTable, EnhancedTableProps} from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../../positions/consts/headCell'
import {Position} from "modules/hhrr/departments/shared/Position";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import DottedMenu from 'modules/hhrr/employees/components/DottedMenu';
import { DeletePosition } from '../epmloyees/layout/deletePosition';
import {usePositionContext} from "modules/hhrr/positions/epmloyees/shared/PositionSelectedId";
import { ChangePositionName } from '../epmloyees/layout/ChangePositionName';

export const Table = ({
                          rows,
                          loading
                      }: Partial<EnhancedTableProps<Position>>) => {


    const {setPositionId}=usePositionContext()

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
                    <TableCell  onClick={()=>setPositionId(row.id)} >
                        <DottedMenu
                            options={positionOptions}
                            mainModal={<DeletePosition  positions={rows} positionName={row.name}  count={row.employeeCount}  />}
                            NameModal={<ChangePositionName positions={rows}/>}
                            userId={''}/>
                    </TableCell>

                </>
            }}
        />
    )
}
