import { Page, Heading, HeadingActions } from 'modules/core/components/page'
import { useParams } from 'next/navigation'
import React from 'react'
import useDepartment from '../hooks/use-department'
import AddEmployeeToDepartment from '../components/AddEmployeeToDepartment'
import ViewDepartmentTabs from '../components/Tabs'
import dayjs from 'dayjs'

export default function ViewDepartment() {
  const { data, departmentId } = useDepartment()

  return (
    <Page>
      <Heading
        title={data?.data.name!}
        description={`Last Updated ${dayjs(data?.data.updatedAt).format('MM/DD/YYYY')}`}
      >
        <HeadingActions
          mainModal={<AddEmployeeToDepartment />}
          buttonText={'Add Employee'}
        />
      </Heading>
      <ViewDepartmentTabs departmentId={departmentId} />
    </Page>
  )
}
