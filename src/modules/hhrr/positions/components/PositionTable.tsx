import { TableCell} from '@mui/material'
import {EnhancedTable, EnhancedTableProps} from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../../positions/consts/headCell'
import {Position} from "modules/hhrr/departments/shared/Position";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";

export const Table = ({
                          rows,
                          loading
                      }: Partial<EnhancedTableProps<Position>>) => {

    // const {data} = useEmployeesPosition();


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
            options={positionOptions}
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
                    {/*<TableCell  onClick={()=>setPositionId(row.id)} >*/}
                    {/*<DottedMenu*/}
                    {/*options={positionOptions}*/}
                    {/*mainModal={<DeletePosition  id={rows} positionName={row.name}  count={row.employeeCount}  />}*/}
                    {/*userId={''}/>*/}
                    {/*</TableCell>*/}

                </>
            }}
        />
    )
}
