import React from 'react'
import {Flex} from "modules/core/components/flex";
import {PRIMARY} from "modules/core/consts/theme";
import {Box, Divider, Typography} from "@mui/material";
import StatusMenu from 'modules/core/components/StatusMenu';
import SelectActionCard from "modules/callcenter/manager-agents/components/CallsCard";

const PersonalInfo = ({status}:{status:string}) => {
    return (
        <Flex flexDirection={'column'} gap={2}>
            <Box><Typography variant={'h6'} fontWeight={'bold'} >Personal Info</Typography></Box>
            <Box><StatusMenu  status={status}/></Box>
            <Flex  alignItems={'start'} justifyContent={'start'} gap={10}  >
                <Flex flexDirection={'column'}  width={'35%'} gap={2} >
                    <Flex flexDirection={'column'} >
                        <Typography color={'#616161'}>Agent Name</Typography>
                        <Typography fontWeight={'500'}>James Adam</Typography>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Typography color={'#616161'}>Languages</Typography>
                        <Typography fontWeight={'500'} color={PRIMARY}>English , Spanish , Arabic</Typography>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Typography color={'#616161'}>Clients</Typography>
                        <Typography fontWeight={'500'} >Client_1 ,Client_2,</Typography>
                    </Flex>
                </Flex>

                <Flex flexDirection={'column'} width={'40%'} gap={2}>
                    <Flex flexDirection={'column'}>
                        <Typography color={'#616161'}>Email</Typography>
                        <Typography fontWeight={'500'}>AhmedMohamed@gmail.com</Typography>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Typography color={'#616161'}>Speciality</Typography>
                        <Typography fontWeight={'500'} color={PRIMARY}>Medical</Typography>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Typography color={'#616161'}>Campaigns</Typography>
                        <Typography fontWeight={'500'}>Campaigns1, Campaigns2</Typography>
                    </Flex>
                </Flex >

            </Flex>
            <Divider/>
            <Box><Typography variant={'h6'} fontWeight={'bold'} >This Month Overview</Typography></Box>
            <SelectActionCard/>

        </Flex>
    )
}
export default PersonalInfo
