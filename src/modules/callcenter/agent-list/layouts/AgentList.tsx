import React from 'react'
import CustomTabPanel from '../components/AgentTabs'
import {Heading, Page} from 'modules/core/components/page'

const AgentList = () => {
    return (
        <Page>
            <Heading title={'Agents List'} description={'View and Manage your Agents Team.'} children={undefined}/>
            <CustomTabPanel/>
        </Page>
    )
}
export default AgentList
