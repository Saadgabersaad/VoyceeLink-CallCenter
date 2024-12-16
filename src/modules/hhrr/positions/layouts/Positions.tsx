import { Heading, Page } from 'modules/core/components/page'
import { HeadingActions } from 'modules/core/components/page/Actions'
import React from 'react'
import { PositionsTable } from '../components/Table'
import { Search } from 'modules/core/components/Search'

export default function Positions() {
  return (
    <Page>
      <Heading
        title='Positions'
        description={`View your Company’s Positions across all departments`}
      >
        <HeadingActions
          buttonText='Add Position'
          mainModal={null}
        />
      </Heading>
      <Search />
      <PositionsTable />
    </Page>
  )
}
