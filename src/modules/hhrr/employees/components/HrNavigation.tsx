import React from 'react'
import {Actions} from "modules/profile/components/Actions";
import {Flex} from "modules/core/components/Flex";
import {Box, Typography} from "@mui/material";

const HrNavigation = () => {
    return (

        <Flex justifyContent='space-between' width='95%' margin='auto'>
            <Box>
               <Typography fontWeight="bold" variant="h4" component="div">
                   Employees List
               </Typography>
                <Typography sx={{color:'gray'}}>
                    view your Team
                </Typography>
            </Box>

            <Actions/>
        </Flex>
    )
}
export default HrNavigation
