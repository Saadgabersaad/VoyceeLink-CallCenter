'use client'

import AddEmployeeForm from 'modules/hhrr/employees/layouts/AddEmployee'
import { Employees } from 'modules/hhrr/employees/layouts/Employees'


//DEPARTMENTS SUBMODULE
export default function EmployeesPage() {
  return <>
    {/** YOUR EMPLOYEES TABLE */}
    <Employees />
    <AddEmployeeForm />
  </>
}
