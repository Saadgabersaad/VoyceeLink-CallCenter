import React, { useState, useRef } from 'react';
import {
    Button,
    ButtonGroup,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Box,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function FilterBtn() {
    const optionGroups = [
        {
            title: 'Position Options',
            options: [
                { label: 'Admin', backgroundColor: '#F7F7F7' },
                { label: 'Manager', backgroundColor: '#F7F7F7' },
                { label: 'HR', backgroundColor: '#F7F7F7' },
                { label: 'User', backgroundColor: '#F7F7F7' },
            ],
        },
        {
            title: 'Department Options',
            options: [
                { label: 'Depart-1', backgroundColor: '#F7F7F7' },
                { label: 'Depart-3', backgroundColor: '#F7F7F7' },
                { label: 'Depart-2', backgroundColor: '#F7F7F7' },
            ],
        },
        {
            title: 'Status Options',
            options: [
                { label: 'Active', backgroundColor: '#F7F7F7' },
                { label: 'Inactive', backgroundColor: '#F7F7F7' },
            ],
        },
    ];

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = (event: Event) => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) return;
        setOpen(false);
    };

    return (
        <>
            <ButtonGroup
                ref={anchorRef}
                sx={{
                    color: '#424242',
                    bgcolor: 'white',
                }}
            >
                <Button
                    sx={{
                        border: "1px solid lightGray",
                        borderRadius: '5',
                        color: '#424242',
                        width: "220px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 0,
                        fontWeight: 'bold',
                        fontSize: '16px',
                        textTransform: 'capitalize'

                    }}

                    onClick={handleToggle}
                >
                    <FilterListIcon />
                    <span >Filters</span>
                    <ArrowDropDownIcon />
                </Button>
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
                                <MenuList
                                    sx={{
                                        padding: '8px',
                                        borderRadius: '5px',
                                    }}
                                    autoFocusItem
                                >
                                    <Box
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr 1fr',
                                            gap: 2,
                                        }}
                                    >
                                        {optionGroups.map((group) => (
                                            <Box key={group.title}>
                                                <strong style={{ marginBottom: '8px', display: 'block', fontSize: '12px', color: '#616161' }}>
                                                    {group.title}
                                                </strong>
                                                {group.options.map((option) => (
                                                    <MenuItem
                                                        key={option.label}
                                                        sx={{
                                                            fontSize: '12px',
                                                            borderRadius: '5px',
                                                            my: '5px',
                                                            backgroundColor: option.backgroundColor,
                                                        }}
                                                    >
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Box>
                                        ))}
                                    </Box>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}
