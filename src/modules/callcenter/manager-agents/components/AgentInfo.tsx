import React from 'react'
import {Flex} from "modules/core/components/flex";
import {Box, Typography} from "@mui/material";
import { PRIMARY } from 'modules/core/consts/theme';
import Status from "modules/callcenter/manager-agents/components/Status";
import Avatar from "@mui/material/Avatar";

const AgentInfo = () => {
    return (
    <Flex justifyContent={'space-between'} alignItems={'start'} gap={2} p={1.25}>
        <Flex  alignItems={'center'} gap={1}>
            <div>
                <Avatar   sx={{ width: 50, height: 50 }}
                          alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <Flex flexDirection={'column'} gap={1}>
                <Typography variant={'h6'} fontWeight={'bold'} color={PRIMARY}>James Adams</Typography>
                <Typography variant={'subtitle2'} color={'textSecondary'}>AhmedMohamed@gmail.com</Typography>
                <Typography>884-288-7422</Typography>
            </Flex>
        </Flex>
            <Box><Status/></Box>

    </Flex>
    )
}
export default AgentInfo
