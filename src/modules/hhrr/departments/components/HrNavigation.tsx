import React from 'react'
import {Actions} from "modules/hhrr/departments/components/Actions";
import {Flex} from "modules/core/components/flex";
import {Box, Typography} from "@mui/material";

const HrNavigation = () => {
    return (

        <Flex justifyContent='space-between' width='95%' margin='auto'>
            <Box>
               <Typography fontSize='32px' fontWeight="bold" variant="h4" component="div">
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
