import * as React from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import {Flex} from "modules/core/components/flex";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {Box} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';

type FilterPopoverProps = {
    id?: string;
    open: boolean;
    anchorEl: HTMLElement | null;
    handleClose: () => void;
};

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

    const filterOptions = [
        { label: "Select Languages" },
        { label: "Select Client" },
        { label: "Select Speciality" },
        { label: "Select Status" },
    ];

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
                sx={{ minWidth: "400px" }}
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
                {/* Header */}
                <Flex fontWeight="bold" p={2} bgcolor="#D6D6D6" justifyContent="space-between">
                    <Typography>Filter</Typography>
                    <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
                </Flex>

                {/* Content */}
                <Flex flexDirection="column" gap={2} p={2}>
                    {filterOptions.map((option, index) => (
                        <FilterSection key={index} label={option.label} />
                    ))}
                </Flex>
            </Popover>
        </div>
    );
}

const FilterSection: React.FC<{ label: string }> = ({ label }) => (
    <Flex flexDirection="column" gap={1.25}>
        <Flex justifyContent="space-between">
            <Typography>{label}</Typography>
            <Typography sx={{ cursor: "pointer", color: "#1976d2" }}>Clear</Typography>
        </Flex>
        <BasicSelect />
    </Flex>
);

function BasicSelect() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 400 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
//
// import React from "react";
// import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
// import CloseIcon from "@mui/icons-material/Close";
// import { Flex } from "modules/core/components/flex";
// import BasicSelect from "modules/core/components/BasicSelect";
//
// type FilterPopoverProps = {
//     id?: string;
//     open: boolean;
//     anchorEl: HTMLElement | null;
//     handleClose: () => void;
// };
//
// const filterOptions = [
//     { label: "Select Languages" },
//     { label: "Select Client" },
//     { label: "Select Speciality" },
//     { label: "Select Status" },
// ];
//
// const FilterPopover: React.FC<FilterPopoverProps> = ({ id, open, anchorEl, handleClose }) => {
//     return (
//         <Popover
//             sx={{ minWidth: "400px" }}
//             id={id}
//             open={open}
//             anchorEl={anchorEl}
//             onClose={handleClose}
//             anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//             }}
//             transformOrigin={{
//                 vertical: "top",
//                 horizontal: "center",
//             }}
//         >
//             {/* Header */}
//             <Flex fontWeight="bold" p={2} bgcolor="#D6D6D6" justifyContent="space-between">
//                 <Typography>Filter</Typography>
//                 <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
//             </Flex>
//
//             {/* Content */}
//             <Flex flexDirection="column" gap={2} p={2}>
//                 {filterOptions.map((option, index) => (
//                     <FilterSection key={index} label={option.label} />
//                 ))}
//             </Flex>
//         </Popover>
//     );
// };
//
// // Reusable Section Component
// const FilterSection: React.FC<{ label: string }> = ({ label }) => (
//     <Flex flexDirection="column" gap={1.25}>
//         <Flex justifyContent="space-between">
//             <Typography>{label}</Typography>
//             <Typography sx={{ cursor: "pointer", color: "#1976d2" }}>Clear</Typography>
//         </Flex>
//         <BasicSelect />
//     </Flex>
// );
//
// export default FilterPopover;
