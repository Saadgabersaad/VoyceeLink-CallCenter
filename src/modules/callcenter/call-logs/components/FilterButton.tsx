import * as React from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Flex } from "modules/core/components/flex";
import { PRIMARY } from 'modules/core/consts/theme';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { BasicSelect } from "modules/callcenter/call-logs/components/FilterSelector";
import {filterOptions} from "modules/callcenter/call-logs/consts/filterOptions";

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
                <Button
                    sx={{ px: 1.5, py: 1.25, border: "solid 1px #D6D6D6", borderRadius: '5px', fontSize: '14px' }}
                    onClick={handleClick}
                    aria-describedby={id}
                    color={'inherit'}
                >
                    Filter <FilterAltIcon />
                </Button>
                <IconButton
                    sx={{ px: 1, py: 1, border: "solid 1px #D6D6D6", borderRadius: '5px', fontSize: '14px' }}
                    color={'inherit'}
                    size={'large'}>
                    <MoreVertIcon />
                </IconButton>
            </Flex>

            <Popover
                sx={{ minWidth: "400px", borderRadius: '50px' }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <Box sx={{ border: '1px solid #36976E', borderRadius: '5px' }}>
                    <Flex fontWeight="bold" p={2} bgcolor="#D6D6D6" justifyContent="space-between">
                        <Typography>Filter</Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
                    </Flex>

                    <Flex flexDirection="column" gap={2} p={2}>
                        {filterOptions.map((option, index) => (
                            <FilterSection key={index} label={option.label} />
                        ))}
                    </Flex>

                    <Flex justifyContent="space-between" p={2}>
                        <Button variant="outlined" sx={{ p: 1, color: 'black', border: '1px solid #D6D6D6' }}>
                            Reset
                        </Button>
                        <Button variant="contained" sx={{ bgcolor: PRIMARY, color: "white" }}>
                            Apply Filters
                        </Button>
                    </Flex>
                </Box>
            </Popover>
        </div>
    );
}

const FilterSection: React.FC<{ label: string }> = ({ label }) => {
    const [value, setValue] = React.useState<string>("");

    const handleClear = () => {
        setValue("");
    };

    return (
        <Flex flexDirection="column" gap={1.25}>
            <Flex justifyContent="space-between">
                <Typography fontWeight={'600'} color={'#666666'}>{label}</Typography>
                <Button
                    onClick={handleClear}
                    sx={{ cursor: "pointer", color: PRIMARY, textDecoration: 'underline', fontSize: '12px', fontWeight: 'bold' }}
                >
                    Clear
                </Button>
            </Flex>
            <BasicSelect value={value} onChange={(e) => setValue(e.target.value)} />
        </Flex>
    );
};
