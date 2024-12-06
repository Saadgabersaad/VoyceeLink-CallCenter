'use client'
import React from 'react'
import HrNavigation from "modules/hhrr/departments/components/HrNavigation";
import {Box} from "@mui/material";
import CustomTabPanel from "../components/DepartmentTabs"
export const Employees = () => {
    return (
        <Box component='div' sx={{bgcolor:'grey.100',p:0,display:'flex',flexDirection:'column',gap:'24px',}}>
            <HrNavigation/>
            <CustomTabPanel/>
        </Box>
    )
}
