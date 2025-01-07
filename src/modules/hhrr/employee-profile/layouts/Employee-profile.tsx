import React from 'react'
import { Page } from 'modules/core/components/page'
import ProfileInfo from "modules/hhrr/employee-profile/components/ProfileInfo";
import ProfileTabs from "modules/hhrr/employee-profile/components/ProfileTabs";
import {useEmployee} from "modules/hhrr/employee-profile/hooks/use-employee";

export default function EmployeeProfile() {

    const {data}= useEmployee()

    return (
        <Page>
            <ProfileInfo data={data} />
            <ProfileTabs data={data}/>
        </Page>
    )
}
