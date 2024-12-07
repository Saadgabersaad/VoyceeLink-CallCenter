'use client'
import React from 'react'
import HrNavigation from "modules/hhrr/employees/components/HrNavigation";
import {Box} from "@mui/material";
import CustomTabPanel from "../components/DepartmentTabs"

export default function Employees() {
    return (
        <Box component='div' sx={{bgcolor:'grey.100',p:0,display:'flex',flexDirection:'column',gap:'24px', pt:4,borderTop:'solid 1px lightgray'}}>
            <HrNavigation/>
            <CustomTabPanel/>
        </Box>
    )
}
