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

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (selected.length === 0) {
            if (event.target.checked) {
                const newSelected = rows
                    .filter((row) => row.status !== 'Inactive') // Exclude inactive rows
                    .map((n) => n.id);
                setSelected(newSelected);
                return;
            }
        }
        setSelected([]);
    };
    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const row = rows.find((row) => row.id === id);
        if (row?.status === 'Inactive') {
            return; // Prevent selection for inactive rows
        }

        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const [positionFilter, setPositionFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const visibleRows = rows?.filter((row) => {
        return (
            (!positionFilter || row.position === positionFilter) &&
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
                        <TableCell sx={textColorStyle} padding="none">{row.position.name}</TableCell>
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
