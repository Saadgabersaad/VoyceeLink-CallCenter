// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { Flex } from 'modules/core/components/flex';
// import {MenuList} from "@mui/material";
//
// const statusOptions = [
//     { label: 'Active', backgroundColor: '#36976E', color: '#ffffff' },
//     { label: 'Inactive', backgroundColor: '#777575', color: '#ffffff' },
//     { label: 'Pending', backgroundColor: '#FF9500', color: '#ffffff' },
// ];
//
// interface SimpleListMenuProps {
//     status?: string;
// }
//
// export default function SimpleListMenu({ status }: SimpleListMenuProps) {
//     // Options to display
//     const options = status ? statusOptions : [];
//
//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//     const [selectedIndex, setSelectedIndex] = React.useState(0); // Default to the first option
//     const open = Boolean(anchorEl);
//
//     const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorEl(event.currentTarget);
//     };
//
//     const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
//         setSelectedIndex(index);
//         setAnchorEl(null);
//     };
//
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//
//     // Dynamic button styles
//     const selectedOption = options[selectedIndex];
//     const buttonStyles = {
//         backgroundColor: selectedOption?.backgroundColor ,
//         color: selectedOption?.color ,
//         width: 'fit-content',
//         paddingX: '15px',
//         paddingY: '4px',
//         borderRadius: '100px',
//     };
//
//     return (
//         <div>
//             <List
//                 component="nav"
//                 aria-label="Dropdown menu"
//                 sx={{
//                     bgcolor: 'background.paper',
//                     width: 'fit-content',
//                     border: '1px solid lightGray',
//                     p: 1,
//                     borderRadius: '5px',
//                     px:2
//
//                 }}
//                 onClick={handleClickListItem}
//
//             >
//              <Flex justifyContent="space-between" alignItems="center">
//                  <ListItemButton
//                  id="lock-button"
//                  aria-haspopup="listbox"
//                  aria-controls="lock-menu"
//                  aria-label="Dropdown menu"
//                  aria-expanded={open ? 'true' : undefined}
//                  sx={buttonStyles}
//              >
//                  <ListItemText primary={selectedOption?.label } />
//              </ListItemButton>
//                  <ArrowDropDownIcon color="action" />
//              </Flex>
//             </List>
//             <Menu
//                 id="lock-menu"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 MenuListProps={{
//                     'aria-labelledby': 'lock-button',
//                     role: 'menu',
//                 }}
//             >
//                     <MenuList sx={{
//                         border:'solid 1px green'
//                     }}>
//                 {options.map((option, index) => (
//                     <MenuItem
//                         key={option.label}
//                         selected={index === selectedIndex}
//                         onClick={(event) => handleMenuItemClick(event, index)}
//                         sx={{
//                             backgroundColor: option.backgroundColor ,
//                             color: option.color ,
//                             marginX:"20px",
//                             marginY:"5px",
//                             borderRadius:'100px'
//                         }}
//                     >
//                         {option.label}
//                     </MenuItem>
//                 ))}
//                     </MenuList>
//             </Menu>
//         </div>
//     );
// }

import React, { useState, useRef } from 'react';
import {Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, Box,} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Flex} from "modules/core/components/flex";


interface SimpleListMenuProps {
    status?: string;
}

const statusOptions = [
    { label: 'Active', backgroundColor: '#36976E', color: '#ffffff' },
    { label: 'Inactive', backgroundColor: '#777575', color: '#ffffff' },
    { label: 'Pending', backgroundColor: '#FF9500', color: '#ffffff' },
];

export default function SimpleListMenu({ status }: SimpleListMenuProps) {
    const options = status ? statusOptions : [];
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setOpen((prev) => !prev);

    const handleClose = (event: Event) => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    };

    const handleMenuItemClick = (index: number) => {
        setSelectedIndex(index);
        setOpen(false);
        console.info(`You clicked ${options[index].label}`);
    };

    const selectedOption = options[selectedIndex];

    return (
        <>
            <ButtonGroup ref={anchorRef}
            sx={{
                px:1.5,
                py:1,
                border:'solid 1px lightgray'
            }}
            >
                <Box
                   sx={{display:'flex', justifyContent:"space-between", alignItems:"center",gap:'15px'}}
                    onClick={handleToggle}
                >
                <Button
                    sx={{
                        color: selectedOption?.color || 'black',
                        bgcolor: selectedOption?.backgroundColor || 'white',
                        border: '1px solid lightGray',
                        textTransform: 'none',
                        padding: '4px 10px',
                        borderRadius: '100px',
                    }}
                >
                    {selectedOption?.label || 'Select Status'}
                </Button>
                    <ArrowDropDownIcon />
                </Box>
            </ButtonGroup>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                sx={{ zIndex: 1 }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem sx={{
                                    border:'solid 1px #36976E',
                                    borderRadius:'5px',
                                    py:2,
                                    px:5,
                                }}>
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option.label}
                                            selected={index === selectedIndex}
                                            onClick={() => handleMenuItemClick(index)}
                                            sx={{
                                                borderRadius: '50px',
                                                my: '5px',
                                                px:2,
                                                backgroundColor: option.backgroundColor,
                                                color: option.color,
                                            }}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}
