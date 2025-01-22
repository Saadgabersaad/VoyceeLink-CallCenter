'use client';

import { Page, Heading } from 'modules/core/components/page';
import { HeadingActions } from 'modules/core/components/page/Actions';
import CustomTabPanel from '../components/CallerTabs';
import { AddCaller } from 'modules/callcenter/callers/layouts/AddCaller';

export default function Callers() {
    return (
        <Page>
            <Heading title="Manage callers" description="View and Manage your Company’s Callers.">
                <HeadingActions
                    buttonText="Add Caller"
                    buttons={['add']}
                    mainModal={
                        <AddCaller open={false} onClose={() => {}} />
                    }
                />
            </Heading>
            <CustomTabPanel />
        </Page>
    );
}
