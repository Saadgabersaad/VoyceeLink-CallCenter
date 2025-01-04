import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import Employees from './Employees'
import PositionsTable from './PositionsTable'
import { Department } from '../shared/Department'
import DepartmentHeadCard from './DepartmentHeadCard'

export default function ViewDepartmentTabs({ departmentId, department }: {
  departmentId: string,
  department: Department
}) {
  const [value, setValue] = useState<number>(0)

  return <>
    <Tabs
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      aria-label='simple tabs example'
    >
      <Tab label='Employees' />
      <Tab label='Positions' />
    </Tabs>
    <DepartmentHeadCard />
    {value === 0 && <Employees
      departmentId={departmentId}
      department={department}
    />}
    {value === 1 && <PositionsTable />}
  </>
}
