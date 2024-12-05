'use client'
import React from 'react'
import Table from "../components/Table";
import HrNavigation from "modules/hhrr/employees/components/HrNavigation";
import {Box} from "@mui/material";

export default function Employees() {
    return (
        <Box component='div' sx={{bgcolor:'grey.100',p:0,display:'flex',flexDirection:'column',gap:'24px',height:"100vh"}}>
            <HrNavigation/>
            <Table/>
        </Box>
    )
}
