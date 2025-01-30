import React, { useState, useRef } from 'react';
import {Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popover, MenuItem, MenuList, Box,} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { PRIMARY } from "modules/core/consts/theme";

interface SimpleListMenuProps {
    status?: string;
    onStatusChange?: (status: string) => void;
}

const statusOptions = [
    { label: 'Active', backgroundColor: '#36976E', color: '#ffffff' },
    { label: 'Inactive', backgroundColor: '#777575', color: '#ffffff' },
];

export default function SimpleListMenu({ status, onStatusChange }: SimpleListMenuProps) {
    const options = status ? statusOptions : [];
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(
        options.findIndex((option) => option.label === status)
    );
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
        const selectedStatus = options[index].label;
        if (onStatusChange) {
            onStatusChange(selectedStatus);
        }
    };

    const selectedOption = options[selectedIndex];

    return (
        <>
            <ButtonGroup
                ref={anchorRef}
                sx={{
                    p: 0.5,
                    pr: 2.5,
                    border: 'solid 1px #F0F0F0',
                }}
            >
                <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}
                    onClick={handleToggle}
                >
                    <Button
                        sx={{
                            color: selectedOption?.color || 'black',
                            bgcolor: selectedOption?.backgroundColor || 'white',
                            border: '1px solid #F0F0F0',
                            textTransform: 'none',
                            fontSize: '12px',
                            padding: '4px 10px',
                            borderRadius: '5px',
                        }}
                    >
                        {selectedOption?.label || 'Select Status'}
                    </Button>
                </Box>
            </ButtonGroup>

            <Popover
                open={open}
                anchorEl={anchorRef.current}
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
                                                    backgroundColor: option.backgroundColor,
                                                    color: option.color,
                                                    '&:hover': {
                                                        backgroundColor: option.backgroundColor,
                                                        color: '#000',
                                                        transition: 'background-color 0.3s ease',
                                                    },
                                                }}
                                            >
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
