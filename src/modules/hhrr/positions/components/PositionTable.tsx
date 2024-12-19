import dayjs from 'dayjs'
import { TableCell } from '@mui/material'
import {
    EnhancedTable,
    EnhancedTableProps
} from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../../positions/consts/headCell'
import {Position} from "modules/hhrr/departments/shared/Position";
// import { PositionsSelectRow } from './PositionsSelectRow'

export const Table = ({
                          rows,
                          loading
                      }: Partial<EnhancedTableProps<Position>>) => {

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
                    {/*<TableCell>*/}
                    {/*    {dayjs(row.updatedAt).format('MMMM D, YYYY h:mm A')}*/}
                    {/*</TableCell>*/}
                    <TableCell>
                        {row.employeeCount}
                    </TableCell>
                    {/*<PositionsSelectRow*/}
                    {/*    positions={row.position}*/}
                    {/*/>*/}
                </>
            }}
        />
    )
}
