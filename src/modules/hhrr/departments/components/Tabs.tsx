import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import Employees from './Employees'
import PositionsTable from './PositionsTable'

export default function ViewDepartmentTabs({ departmentId }: { departmentId: string }) {

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
    {value === 0 && <Employees departmentId={departmentId} />}
    {value === 1 && <PositionsTable />}
  </>
}
