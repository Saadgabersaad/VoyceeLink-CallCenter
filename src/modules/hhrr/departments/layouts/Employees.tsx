'use client'
import React from 'react'
import Table from "../components/Table";
import HrNavigation from "modules/hhrr/departments/components/HrNavigation";
import {Box} from "@mui/material";

export const Employees = () => {
    return (
        <Box component='div' sx={{bgcolor:'grey.100',p:0,display:'flex',flexDirection:'column',gap:'24px'}}>
            <HrNavigation/>
            <Table/>
        </Box>
    )
}
