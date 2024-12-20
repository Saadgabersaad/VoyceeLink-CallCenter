'use client'
import React from "react";
import { Page, Heading } from 'modules/core/components/page'
import {Typography} from "@mui/material";
import  {PRIMARY} from "modules/core/consts/theme";
import {Search} from "modules/core/components/Search";
import {Table} from "../components/positionViewTable";
import {usePositionView} from "modules/hhrr/position-view/hooks/use-viewPosition";

export default function PositionView() {
    const {
        data,
        isLoading,
        onSearch,
        onCreatePosition,
    } = usePositionView()

    console.log(isLoading)
    console.log(data)
    return (
        <Page>
            <Heading title=' Tech Admin Position' description='' children={undefined}/>
            <Typography fontWeight='bold' fontSize={'24px'} variant='h4' component='h6'>
                Employees Assigned Position
                <span style={{color: PRIMARY}}>Tech Admin</span> in department<span style={{color:PRIMARY}}> Tech Team</span>
            </Typography>
            <Search onSearch={onSearch} />
            <Table
                rows={data}
                loading={isLoading}
            />

        </Page>
    )
}
