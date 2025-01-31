import React, { useState, useRef, useCallback } from 'react';
import {Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popover, MenuItem, MenuList, Box} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { PRIMARY } from "modules/core/consts/theme";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { liveStatusOptions } from 'modules/callcenter/manager-agents/consts/LiveStatusOptions';

interface StatusMenuProps {
    status?: string;
    onStatusChange?: (status: string) => void;
    filterOptions: {
        label: string ;
        color?: string;
        backgroundColor?:string}[]
}



export default function StatusMenu({ status, onStatusChange, filterOptions }: StatusMenuProps) {
    const options = filterOptions || [];
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(
        Math.max(options.findIndex((option) => option.label === status), 0)
    );
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => setOpen((prev) => !prev);

    const handleClose = (event: MouseEvent | TouchEvent) => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    };

    const handleMenuItemClick = useCallback(
        (index: number) => {
            setSelectedIndex(index);
            setOpen(false);
            onStatusChange?.(options[index].label);
        },
        [options, onStatusChange]
    );

    const selectedOption = options[selectedIndex];

    return (
        <>
            <ButtonGroup
                sx={{
                    p: 0.5,
                    pr: 2.5,
                    border: 'solid 1px #F0F0F0',
                    bgcolor:'white',

                }}
                onClick={handleToggle}

            >
                <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px'

                    }}
                >
                    <Button
                        ref={anchorRef}
                        sx={{
                            color: selectedOption?.color || 'black',
                            bgcolor: selectedOption?.backgroundColor || 'white',
                            border: filterOptions === liveStatusOptions ? 'none' : '1px solid #F0F0F0',
                            gap: filterOptions === liveStatusOptions ? 0.5 : 0,
                            textTransform: 'none',
                            fontSize: '12px',
                            padding: '4px 10px',
                            borderRadius: '5px',
                        }}
                    >
                        {filterOptions=== liveStatusOptions &&<FiberManualRecordIcon sx={{fontSize: "10px"}}/>}

                        {selectedOption?.label || 'Select Status'}
                    </Button>
                </Box>
            </ButtonGroup>

            <Popover
                open={open}
                anchorEl={anchorRef.current}
                onClose={handleClose}
                role={undefined}
                disablePortal
                sx={{ zIndex: 1 }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Grow in={open}>
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                                autoFocusItem
                                sx={{
                                    border: 'solid 1px #36976E',
                                    borderRadius: '5px',
                                    px: 0.5,
                                    py: 0.2,
                                    display: 'flex',
                                    alignItems: 'start',
                                }}
                            >
                                <Box>
                                    {options.map((option, index) => (
                                        <Box
                                            key={option.label}
                                            onClick={() => handleMenuItemClick(index)}
                                            sx={{
                                                pr: 6,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'start',
                                                marginX: "0",
                                                borderRadius: '5px',
                                                '&:hover': {
                                                    backgroundColor: '#E3EEE9',
                                                    color: '#000',
                                                    transition: 'background-color 0.3s ease',
                                                },
                                            }}
                                        >
                                            <MenuItem
                                                key={option.label}
                                                sx={{
                                                    borderRadius: '5px',
                                                    my: '2px',
                                                    px: 1.25,
                                                    py: 0.5,
                                                    zIndex: 3,
                                                    fontSize: "12px",
                                                    gap: filterOptions === liveStatusOptions ? 0.5 : 0,

                                                    backgroundColor: option.backgroundColor,
                                                    color: option.color,
                                                    '&:hover': {
                                                        backgroundColor: option.backgroundColor,
                                                        color: '#000',
                                                        transition: 'background-color 0.3s ease',
                                                    },
                                                }}
                                            >
                                                {filterOptions=== liveStatusOptions &&<FiberManualRecordIcon sx={{fontSize: "10px"}}/>}
                                                {option.label}
                                            </MenuItem>
                                        </Box>
                                    ))}
                                </Box>
                                <KeyboardArrowUpIcon sx={{ color: PRIMARY }} />
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            </Popover>
        </>
    );
}
