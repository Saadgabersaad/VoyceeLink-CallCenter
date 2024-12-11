import { Heading, Page } from 'modules/core/components/page'
import { HeadingActions } from 'modules/core/components/page/Actions'
import { Table } from '../components/Table'


export default function Departments() {
  return (
    <Page>
      <Heading title={'Departments'} description={'View your Company’s Departments'}>
        <HeadingActions
          buttonText={'Add Department'}
          mainModal={undefined}
        />
      </Heading>
      <Table />
    </Page>
  )
}
