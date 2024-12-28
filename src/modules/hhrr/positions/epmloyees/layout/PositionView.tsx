'use client'
import React from "react";
import { Page, Heading } from 'modules/core/components/page'
import {Box, Typography} from "@mui/material";
import  {PRIMARY} from "modules/core/consts/theme";
import {Table} from "modules/hhrr/positions/epmloyees/components/positionViewTable";
import {useEmployeesPosition} from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";
import TextField from "@mui/material/TextField";
import { Flex } from "modules/core/components/flex";
import { usePositionContext } from "../shared/PositionSelectedId";

export default function PositionView() {

    const {
        data,isLoading,onAssignPosition
    } = useEmployeesPosition()



    // const {positionData}=usePositionContext()

    console.log('23456789234567892345678')
    console.log(data)
    console.log(data)
    console.log('23456789234567892345678')

    // console.log(isLoading)
    const [positionName, setPositionName] = React.useState('Tech Administrator');
    const [departmentName, setDepartmentName] = React.useState('Tech Team');

    return (
        <Page>
            <Heading title=' Tech Admin Position' description='' children={undefined}/>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: 'full' } }}
                noValidate
                autoComplete="off"
            >
              <Flex  gap={2}>  <TextField
                  fullWidth
                  id="outlined-controlled"
                  label="Positon Name"
                  value={positionName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setPositionName(event.target.value);

                  }}
              /> <TextField
                  fullWidth
                  id="outlined-controlled"
                  label="Department Related"
                  value={departmentName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setDepartmentName(event.target.value);
                  }}
              /></Flex>
               </Box>
            <Typography fontWeight='bold' fontSize={'24px'} variant='h4' component='h6'>
                Employees Assigned Position
                <span style={{color: PRIMARY}}>Tech Admin</span> in department<span style={{color:PRIMARY}}> Tech Team</span>
            </Typography>
            <Table
                rows={data}
                loading={isLoading}
            />


        </Page>
    )
}
