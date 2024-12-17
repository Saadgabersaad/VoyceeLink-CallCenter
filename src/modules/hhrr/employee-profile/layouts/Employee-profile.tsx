import React from 'react'
import { Page } from 'modules/core/components/page'
import ProfileInfo from "modules/hhrr/employee-profile/components/ProfileInfo";
import ProfileTabs from "modules/hhrr/employee-profile/components/ProfileTabs";

export default function EmployeeProfile() {
    return (
        <Page>
            <ProfileInfo/>
            <ProfileTabs/>
        </Page>
    )
}
