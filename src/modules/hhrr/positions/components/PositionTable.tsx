import {Button, TableCell} from '@mui/material'
import {EnhancedTable, EnhancedTableProps} from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../../positions/consts/headCell'
import {Position} from "modules/hhrr/departments/shared/Position";
import DottedMenu from 'modules/hhrr/employees/components/DottedMenu';

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

                    <TableCell>
                        {row.employeeCount}
                    </TableCell>
                    <TableCell>
                    <DottedMenu menuType={'position'} userId={''} />

                    </TableCell>

                </>
            }}
        />
    )
}
