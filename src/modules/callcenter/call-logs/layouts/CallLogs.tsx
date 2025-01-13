import React from 'react'
import CallLogsTabs from '../components/LogsTabs'
import {Heading, Page} from 'modules/core/components/page'

const CallLogs = () => {

    return (
      <Page>
          <Heading title={'My Team call logs'} description={'240 Calls Today '} children={undefined} />
          <CallLogsTabs/>
      </Page>
    )
}
export default CallLogs
