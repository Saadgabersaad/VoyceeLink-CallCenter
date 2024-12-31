import {Button, TableCell } from '@mui/material'
import {EnhancedTable, EnhancedTableProps} from 'modules/core/components/tables/EnhancedTable'
import { headCells } from 'modules/hhrr/positions/epmloyees/consts/headCell'
import { PositionEmployee} from "modules/hhrr/departments/shared/Position";

export const Table = ({
                          rows,
                          loading
                      }: Partial<EnhancedTableProps<PositionEmployee>>) => {



    console.log(rows)
    return (
        <EnhancedTable
            rows={rows!}
            loading={loading!}
            headCells={headCells}
            onPageChange={() => { }}
            render={(row) => {
                return <>
                    <TableCell>
                        {row.name}
                    </TableCell>
                    <TableCell>
                        {row.email}
                    </TableCell>
                    <TableCell>
                        {row.department}
                    </TableCell>

                    <TableCell>
                        <Button sx={{bgcolor: "#ff6363"}} variant="contained">Unassign</Button>

                    </TableCell>

                </>;
            }} options={null}       />
    )
}
