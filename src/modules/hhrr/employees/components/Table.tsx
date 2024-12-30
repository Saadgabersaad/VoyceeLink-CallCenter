import React, {useMemo, useState} from 'react';
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
import { rows, headCells, Data, Order } from 'modules/core/consts/tableHead';
import { getComparator } from 'modules/core/utils/tableUtlis';
import StatusMenu from "modules/hhrr/employees/components/StatusMenu";
import EnhancedTableToolbar from "modules/hhrr/employees/components/TableSelection";
import DottedMenu from "modules/hhrr/employees/components/DottedMenu";

export default function Employees() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('position');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
       if (selected.length === 0) {
           if (event.target.checked) {
               const newSelected = rows
                   .filter((row) => row.status !== 'Inactive')
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



    const visibleRows = React.useMemo(() => {
        const filteredRows = rows.filter((row) => {
            return (
                (!positionFilter || row.position === positionFilter) &&
                (!statusFilter || row.status === statusFilter)
            );
        });

        const sortedRows = filteredRows.sort(getComparator(order, orderBy));

        return sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [rows, positionFilter, statusFilter, order, orderBy, page, rowsPerPage]);




    return (
        <Box sx={{ bgcolor: 'grey.100', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <EnhancedTableToolbar tableSearch={true} numSelected={selected.length}
                                  setPositionFilter={setPositionFilter}
                                  setStatusFilter={setStatusFilter}
            />
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                        <EnhancedTableHead

                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            headCells={headCells}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = selected.indexOf(row.id) !== -1;
                                const labelId = `enhanced-table-checkbox-${index}`;
                                const isInactive = row.status === 'Inactive';
                                const textColorStyle = isInactive ? { color: 'lightgray' } : {};

                                const handleStatusChange = (newStatus: string) => {
                                    row.status = newStatus;
                                    console.log(`Row ${row.id} status updated to ${newStatus}`);
                                };

                                return (
                                    <TableRow
                                        sx={{ height: '60px',
                                            cursor: row.status === 'Inactive' ? 'not-allowed' : 'pointer'}}
                                        hover={row.status !== 'Inactive'}
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{'aria-labelledby': labelId}}
                                                disabled={isInactive}/>
                                        </TableCell>
                                        <TableCell  sx={textColorStyle} component="th" id={labelId} scope="row" padding="none">
                                            {row.name}
                                        </TableCell>
                                        <TableCell  sx={textColorStyle} padding="none">{row.position}</TableCell>
                                        <TableCell  sx={textColorStyle} padding="none">{row.phoneNumber}</TableCell>
                                        <TableCell  sx={textColorStyle} padding="none">{row.email}</TableCell>
                                        <TableCell  sx={textColorStyle} padding="none">{row.department}</TableCell>
                                        <TableCell  sx={textColorStyle} padding="none">
                                            <StatusMenu status={row.status} onStatusChange={handleStatusChange} />
                                        </TableCell>
                                        <TableCell padding="none">
                                            <DottedMenu userId={''} />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
