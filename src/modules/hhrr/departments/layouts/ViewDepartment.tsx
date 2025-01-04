import { Page, Heading, HeadingActions } from 'modules/core/components/page'
import React from 'react'
import useDepartment from '../hooks/use-department'
import AddEmployeeToDepartment from '../components/AddEmployeeToDepartment'
import ViewDepartmentTabs from '../components/Tabs'
import dayjs from 'dayjs'

export default function ViewDepartment() {
  const { data, departmentId } = useDepartment()
  const department = data?.data

  return (
    <Page>
      <Heading
        title={department?.name!}
        description={`Last Updated ${dayjs(department?.updatedAt).format('MM/DD/YYYY')}`}
      >
        <HeadingActions
          mainModal={
            <AddEmployeeToDepartment departmentId={departmentId} />
          }
          buttonText={'Add Employee'}
        />
      </Heading>
      <ViewDepartmentTabs
        departmentId={departmentId}
        department={department!}
      />
    </Page>
  )
}
