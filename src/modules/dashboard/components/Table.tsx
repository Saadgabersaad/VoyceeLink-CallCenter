import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useAttendance } from '../hooks/use-attendance';

const TableAttendance = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const { entries, onGetUserTimeEntries } = useAttendance();
  
  const [rows, setRows] = useState([
    { id: 1, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'On Time', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 2, date: '2024-12-18', checkInOut:'09:35 AM - 04:55 PM', status: 'Late', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 3, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'On Time', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 4, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'On Time', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 5, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'On Time', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 6, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'On Time', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 7, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'Late', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 8, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'On Time', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 9, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'On Time', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 10, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'On Time', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 11, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'On Time', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 12, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'On Time', breaks:'40 Min', workingHours:'9 Hrs' },
    { id: 13, date: '2024-12-19', checkInOut:'09:35 AM - 04:55 PM', status: 'On Time', breaks:'40 Min', workingHours:'9 Hrs' },
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Handle pagination changes
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  // Filter rows by selected date
  const filteredRows = rows.filter((row) =>
    selectedDate? row.date === selectedDate.format('YYYY-MM-DD') : true
  );

  // Paginate filtered rows
  const paginatedRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box>
      {/* DatePicker */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{mb:1}}
          label="Select Date"
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
        />
      </LocalizationProvider>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Check In & Out</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Breaks</TableCell>
              <TableCell>Working Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.checkInOut}</TableCell>
                <TableCell sx={{color:row.status === 'On Time'?'#3FC28A':'#F45B69'}}><span style={{backgroundColor:row.status === 'On Time'?'#3fc28a22':'#F45B6922',borderRadius:'4px',padding:'2px 4px'}}>{row.status}</span></TableCell>
                <TableCell>{row.breaks}</TableCell>
                <TableCell>{row.workingHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[10, 15, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
};

export default TableAttendance;
