import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {attendanceRows, AttendanceData, Order, attendanceHeadCells} from 'modules/core/consts/tableHead';
import { getComparator } from 'modules/core/utils/tableUtlis';
import { HeadCell,  } from 'modules/core/consts/tableHead';
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import {visuallyHidden} from "@mui/utils";

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof AttendanceData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    headCells: readonly HeadCell[];
}

const EnhancedTableHead: React.FC<EnhancedTableProps> = (props) => {
    const {  order, orderBy, onRequestSort, headCells } =
        props;

    const createSortHandler = (property: keyof AttendanceData) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (

        <TableHead>
            <TableRow   sx={{height:'56px',bgcolor:"#F7F7F7"}}
            >
                {headCells.map((headCell) => (
                    <TableCell
                        sx={{fontWeight: 'bold', fontSize: '16px', pl: 2}}
                        key={headCell.id}
                        align={headCell.numeric ? 'left' : 'left'}
                            padding={headCell.disablePadding ? 'none' : 'none'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id as keyof AttendanceData)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default function AttendanceTab() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof AttendanceData>('date');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof AttendanceData) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };



    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - attendanceRows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            [...attendanceRows]
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box sx={{ bgcolor: 'grey.100', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={attendanceRows.length}
                            headCells={attendanceHeadCells}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = selected.indexOf(row.id) !== -1;
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        sx={{height:'40px'}}
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                    >

                                        <TableCell padding="checkbox" sx={{pl:2}}>
                                            {row.date}
                                        </TableCell>
                                        <TableCell   padding={"none"} sx={{pl:2}}>{row.checkIn}</TableCell>
                                        <TableCell padding={"none"} sx={{pl:2}}>{row.checkOut}</TableCell>
                                        <TableCell padding={"none"} sx={{pl:2}}>{row.Break}</TableCell>
                                        <TableCell padding={"none"} sx={{pl:2}}>{row.hours}</TableCell>
                                        <TableCell padding={"none"}  sx={{pl:2}}> {row.status}</TableCell>
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
                    count={attendanceRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
