import React from 'react'
import {Heading, Page} from 'modules/core/components/page'
import CallLogsTabs from '../components/LogsTabs'

const CallLogs = () => {


    return (
      <Page>
          <Heading title={'My Team call logs'} description={'240 Calls Today '} children={undefined} />
          <CallLogsTabs/>
      </Page>
    )
}
export default CallLogs
