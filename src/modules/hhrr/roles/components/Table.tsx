import { TableCell } from '@mui/material';
import { EnhancedTable } from 'modules/core/components/tables/EnhancedTable';
import React from 'react';

export const RolesTable = () => {
  const rows = [
    { position: 'Team Lead', department: 'Engineering', total: 3, roles: 'Supervisor, Mentor' },
    { position: 'HR Manager', department: 'Human Resources', total: 2, roles: 'Recruiter, Trainer' },
    { position: 'Product Owner', department: 'Product', total: 1, roles: 'Visionary, Coordinator' },
    { position: 'Designer', department: 'Design', total: 4, roles: 'Creative, Reviewer' },
    { position: 'Sales Manager', department: 'Sales', total: 5, roles: 'Negotiator, Strategist' },
    { position: 'Data Analyst', department: 'Data Analytics', total: 3, roles: 'Researcher, Reporter' },
    { position: 'Support Specialist', department: 'Customer Support', total: 7, roles: 'Responder, Problem Solver' },
    { position: 'Finance Officer', department: 'Finance', total: 2, roles: 'Budgeter, Auditor' },
    { position: 'Marketing Lead', department: 'Marketing', total: 4, roles: 'Planner, Campaigner' },
    { position: 'DevOps Engineer', department: 'Infrastructure', total: 3, roles: 'Integrator, Maintainer' }
  ];

  return (
    <EnhancedTable
      rows={rows as any[]}
      headCells={[
        {
          id: 'position', label: 'Position',
          disablePadding: false,
          numeric: false
        },


        {
          id: 'department', label: 'Related Department',
          disablePadding: false,
          numeric: false
        },
        {
          id: 'total', label: 'Employee Number',
          disablePadding: false,
          numeric: false
        },
        {
          id: 'roles', label: 'Roles',
          disablePadding: false,
          numeric: false
        }
      ]}
      showCheckBox={true}
      rowsPerPageCount={10}
      onPageChange={() => {}}
      render={(row) => (
        <>
          <TableCell>{row.position}</TableCell>
          <TableCell>{row.department}</TableCell>
          <TableCell>{row.total}</TableCell>
          <TableCell>{row.roles}</TableCell>
        </>
      )}
    />
  );
};