import { Heading, Page } from 'modules/core/components/page'
import { HeadingActions } from 'modules/core/components/page/Actions'
import { Search } from 'modules/core/components/Search'
import { Table } from '../components/Table'
import { useDepartments } from '../hooks/use-departments'
import AddDepartment from './AddDepartment'

export default function Departments() {
  const { data, isLoading } = useDepartments()

  return (
    <Page>
      <Heading title='Departments' description={`View your Company’s Departments`}>
        <HeadingActions
          buttonText={'Add Department'}
          mainModal={<AddDepartment create={(a) => {}} />}
        />
      </Heading>
      <Search />
      <Table
        rows={data}
        loading={isLoading}
      />
    </Page>
  )
}
