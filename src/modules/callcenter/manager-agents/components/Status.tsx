import React from 'react'
import {Box, Typography} from "@mui/material";
import {PRIMARY} from "modules/core/consts/theme";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {Flex} from "modules/core/components/flex";
const Status = () => {
    return (
        <>
            <Box sx={{padding:"6px  17px 6px 9px",border:'1px solid #28F495',borderRadius:'5px',color:PRIMARY}}>
                <Flex alignItems={'center'} gap={0.5}>
                    <FiberManualRecordIcon sx={{fontSize:"10px"}}/>  <Typography fontSize={12}>  Available</Typography>
                </Flex>
             </Box>
        </>
    )
}
export default Status
