import React from 'react'
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {Box, Button} from "@mui/material";
import { Flex } from 'modules/core/components/flex';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const FilterButton = () => {
    return (

        <Flex gap={2.5}>

            <Button color={'inherit'} sx={{px:1.5,py:1.25,border:"solid 1px #D6D6D6 ",borderRadius:'5px',fontSize:'14px'}}>
                Filter <FilterAltIcon/>
            </Button>
            <IconButton size={'large'} color={'inherit'} sx={{px:1,py:1,border:"solid 1px #D6D6D6 ",borderRadius:'5px',fontSize:'14px'}}>
                < MoreVertIcon/>
            </IconButton>
        </Flex>
    )
}
export default FilterButton
