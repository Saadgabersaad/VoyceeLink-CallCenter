import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import EnhancedTableHead from '../components/TableHead';
import { headCells, Data, Order } from 'modules/core/consts/tableHead';
import { getComparator } from 'modules/core/utils/tableUtlis';
import StatusMenu from "modules/hhrr/employees/components/StatusMenu";
import EnhancedTableToolbar from "modules/hhrr/employees/components/TableSelection";
import DottedMenu from "modules/hhrr/employees/components/DottedMenu";
import { Employee } from '../shared/Employee';
import { EnhancedTable } from 'modules/core/components/tables/EnhancedTable';

type Props = {
    rows: Employee[]
}

export default function Employees({
    rows
}: Props) {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('position');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const [positionFilter, setPositionFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const visibleRows = rows?.filter((row) => {
        return (
            (!positionFilter || row.position.id === positionFilter) &&
            (!statusFilter || row.status === statusFilter)
        );
    });

    return (
        <Box sx={{ bgcolor: 'grey.100', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <EnhancedTableToolbar tableSearch={true} numSelected={selected.length}
                setPositionFilter={setPositionFilter}
                setStatusFilter={setStatusFilter}
            />
            <EnhancedTable
                rows={rows}
                rowsPerPageCount={4}
                render={(row, index) => {
                    console.log(row)
                    const isItemSelected = selected?.indexOf(row?.id) !== -1;
                    const labelId = `enhanced-table-checkbox-${index}`;
                    const isInactive = row.status === 'Inactive';
                    const textColorStyle = isInactive ? { color: 'lightgray' } : {};

                    const handleStatusChange = (newStatus: string) => {
                        //row.status = newStatus;
                        console.log(`Row ${row.id} status updated to ${newStatus}`);
                    };
                    return <>
                        <TableCell sx={textColorStyle} component="th" id={labelId} scope="row" padding="none">
                            {row.name} {row.lastName}
                        </TableCell>
                        <TableCell sx={textColorStyle} padding="none">{row?.position?.name}</TableCell>
                        <TableCell sx={textColorStyle} padding="none">{row.email}</TableCell>
                        <TableCell sx={textColorStyle} padding="none">
                            <StatusMenu status={row.status} onStatusChange={handleStatusChange} />
                        </TableCell>
                        <TableCell padding="none">
                            <DottedMenu userId={''} />
                        </TableCell>
                    </>
                }}

                headCells={headCells}
                loading={false}
                onPageChange={function (newPage: number): void {
                }}
            />
        </Box>
    );
}
