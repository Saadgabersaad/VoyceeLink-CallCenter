import { Heading, Page } from 'modules/core/components/page'
import { HeadingActions } from 'modules/core/components/page/Actions'
import React from 'react'
import { RolesTable } from '../components/Table'
import { Search } from 'modules/core/components/Search'
import FilterBtn from 'modules/core/components/FilterBtn'
import { Flex } from 'modules/core/components/flex'

export default function Roles() {
  return (
    <Page>
      <Heading
        title='Roles Management'
        description='View your Company’s Roles and Manage Permissions.'
      >
        <HeadingActions
          buttonText='Add Role'
          mainModal={null}
        />
      </Heading>
      <Flex gap={2}>
        <Search placeholder='Roles' />
        <FilterBtn />
      </Flex>
      <RolesTable />
    </Page>
  )
}
