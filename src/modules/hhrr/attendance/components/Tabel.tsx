import { TableCell } from '@mui/material';
import { EnhancedTable } from 'modules/core/components/tables/EnhancedTable';
import React from 'react';

export const AttendanceTable = () => {
  const rows = [
    { name: 'Romany Moner', department: 'Engineering', date: '12 May, 2024', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs' },
    { name: 'Romany Moner', department: 'Human Resources', date: '12 May, 2024', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
    { name: 'Romany Moner', department: 'Product', date: '12 May, 2024', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
    { name: 'Romany Moner', department: 'Design', date: '12 May, 2024', status: 'Late', breaks:'40 Min', workingHours:'09:02 Hrs'  },
    { name: 'Romany Moner', department: 'Sales', date: '12 May, 2024', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
    { name: 'Romany Moner', department: 'Data Analytics', date: '12 May, 2024', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
    { name: 'Romany Moner', department: 'Customer Support', date: '12 May, 2024', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
    { name: 'Romany Moner', department: 'Finance', date: '12 May, 2024', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
    { name: 'Romany Moner', department: 'Marketing', date: '12 May, 2024', status: 'Late', breaks:'40 Min', workingHours:'09:02 Hrs'  },
    { name: 'Romany Moner', department: 'Infrastructure', date: '12 May, 2024', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
    { name: 'Romany Moner', department: 'Infrastructure', date: '12 May, 2024', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
    { name: 'Romany Moner', department: 'Infrastructure', date: '12 May, 2024', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  },
    { name: 'Romany Moner', department: 'Infrastructure', date: '12 May, 2024', status: 'On Time', breaks:'40 Min', workingHours:'09:02 Hrs'  }
  ];

  return (
    <EnhancedTable
      loading={false}
      rows={rows as any[]}
      headCells={[
        {
          id: 'name', label: 'Name',
          disablePadding: false,
          numeric: false
        },
        {
          id: 'department', label: 'Related Department',
          disablePadding: false,
          numeric: false
        },
        {
          id: 'date', label: 'Date',
          disablePadding: false,
          numeric: false
        },
        // {
        //   id: 'checkInOutTime', label: 'Check In & Out Time',
        //   disablePadding: false,
        //   numeric: false
        // },
        {
          id: 'status', label: 'Status',
          disablePadding: false,
          numeric: false
        },
        {
          id: 'breaks', label: 'Breaks',
          disablePadding: false,
          numeric: false
        },
        {
          id: 'workingHours', label: 'Working Hours',
          disablePadding: false,
          numeric: false
        }
      ]}
      rowsPerPageCount={10}
      onPageChange={() => {}}
      render={(row) => (
        <>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.department}</TableCell>
          <TableCell>{row.date}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell>{row.breaks}</TableCell>
          <TableCell>{row.workingHours}</TableCell>
        </>
      )}
    />
  );
};