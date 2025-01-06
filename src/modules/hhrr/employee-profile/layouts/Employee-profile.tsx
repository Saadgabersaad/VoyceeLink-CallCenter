import React from 'react'
import { Page } from 'modules/core/components/page'
import ProfileInfo from "modules/hhrr/employee-profile/components/ProfileInfo";
import ProfileTabs from "modules/hhrr/employee-profile/components/ProfileTabs";
import {useEmployees} from "modules/hhrr/employees/hooks/use-employees";

export default function EmployeeProfile() {
    const {data}= useEmployees()
    return (
        <Page>
            <ProfileInfo/>
            <ProfileTabs/>
        </Page>
    )
}
