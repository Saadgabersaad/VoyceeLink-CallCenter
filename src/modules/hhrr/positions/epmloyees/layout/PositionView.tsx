import React from "react";
import { Page, Heading } from 'modules/core/components/page'
import { Box, Typography } from "@mui/material";
import { PRIMARY } from "modules/core/consts/theme";
import { Table } from "modules/hhrr/positions/epmloyees/components/positionViewTable";
import { useEmployeesPosition } from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";
import TextField from "@mui/material/TextField";
import { Flex } from "modules/core/components/flex";
import {usePositionContext} from "modules/hhrr/positions/epmloyees/shared/PositionSelectedId";

export default function PositionView() {
const {positionId}=usePositionContext()
    const { data, isLoading } = useEmployeesPosition();

    const [positionName, setPositionName] = React.useState('Tech Administrator');
    const [departmentName, setDepartmentName] = React.useState('Tech Team');

    return (
        <Page>
            <Heading title=' Tech Admin Position' description='' children={undefined} />
            <Box
                sx={{   m: 1, width: 'full' }}
            >
                <Flex gap={2}>
                    <TextField
                        fullWidth
                        id="outlined-controlled"
                        label="Position Name"
                        value={positionName}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPositionName(event.target.value);
                        }}
                    />
                    <TextField
                        fullWidth
                        id="outlined-controlled"
                        label="Department Related"
                        value={departmentName}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDepartmentName(event.target.value);
                        }}
                    />
                </Flex>
            </Box>

            <Typography fontWeight='bold' fontSize={'24px'} variant='h4' component='h6'>
                Employees Assigned Position
                <span style={{ color: PRIMARY }}>Tech Admin</span> in department
                <span style={{ color: PRIMARY }}> Tech Team</span>
            </Typography>

            <Table
                rows={data}
                loading={isLoading}
            />
        </Page>
    );
}
