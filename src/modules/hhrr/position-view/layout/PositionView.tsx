'use client'
import React from "react";
import { Page, Heading } from 'modules/core/components/page'
import {Box, Typography} from "@mui/material";
import  {PRIMARY} from "modules/core/consts/theme";
import {Search} from "modules/core/components/Search";
import {Table} from "../components/positionViewTable";
import {usePositionView} from "modules/hhrr/position-view/hooks/use-viewPosition";
import TextField from "@mui/material/TextField";
import { Flex } from "modules/core/components/flex";

export default function PositionView() {
    const {
        data,
        isLoading,
        onSearch,
        onCreatePosition,
    } = usePositionView()

    console.log(isLoading)
    console.log(data)
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
