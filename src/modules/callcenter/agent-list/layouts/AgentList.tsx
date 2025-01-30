import React from 'react'
import AgentTabs from '../components/AgentTabs'
import {Heading, Page} from 'modules/core/components/page'

const AgentList = () => {
    return (
        <Page>
            <Heading title={'Agents List'} description={'View and Manage your Agents Team.'} children={undefined}/>
            <AgentTabs/>
        </Page>
    )
}
export default AgentList
