import * as React from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import {Flex} from "modules/core/components/flex";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function FilterButton() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Flex gap={2.5}>
            <Button ria-describedby={id} onClick={handleClick} color={'inherit'} sx={{px:1.5,py:1.25,border:"solid 1px #D6D6D6 ",borderRadius:'5px',fontSize:'14px'}}>
                Filter <FilterAltIcon/>
            </Button>
            <IconButton size={'large'} color={'inherit'} sx={{px:1,py:1,border:"solid 1px #D6D6D6 ",borderRadius:'5px',fontSize:'14px'}}>
                < MoreVertIcon/>
            </IconButton>
            </Flex>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
        </div>
    );
}
