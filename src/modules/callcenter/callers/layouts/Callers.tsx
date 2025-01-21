'use client'
import { Page, Heading } from 'modules/core/components/page';
import { HeadingActions } from 'modules/core/components/page/Actions';
import CustomTabPanel  from '../components/CallerTabs';
import {AddCaller} from "modules/callcenter/callers/layouts/AddCaller";

export default function Callers() {
    return (
        <Page>
            <Heading title="Manage callers" description="View and Manage your Company’s Callers.">
                <HeadingActions
                    buttonText="Add Caller"
                    buttons={['add']} // Show only the Add button
                    mainModal={<AddCaller open={false} onClose={function (): void {
                        throw new Error('Function not implemented.');
                    }}    />}
                />
            </Heading>
            <CustomTabPanel/>
        </Page>
    );
}
