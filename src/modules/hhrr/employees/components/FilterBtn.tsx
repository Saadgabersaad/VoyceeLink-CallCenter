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
} from '@mui/material';
import { usePathname } from 'next/navigation';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function FilterBtn() {
    const customerOptions = [
        { label: 'Client Type', backgroundColor: '', color: '' },
        { label: '(Lcp)', backgroundColor: '#EEF5F0', color: '#589E67' },
        { label: 'Customer Service', backgroundColor: '#EDF2FE', color: '#4976F4' },
        { label: 'Technical Support', backgroundColor: '#F7F7E8', color: '#B1AB1D' },
        { label: 'Sales', backgroundColor: '#F4EDF7', color: '#954BAF' },
    ];
    const Options = [
        { label: 'Filters', backgroundColor: '', color: '#424242' },
        { label: 'Lost', backgroundColor: '#EEF5F0', color: '#589E67' },
        { label: 'Qualified', backgroundColor: '#F7F7E8', color: '#B1AB1D' },
        { label: 'Contacted', backgroundColor: '#F4EDF7', color: '#954BAF' },
    ];

    const pathname = usePathname();
    const options =  Options

    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = (event: Event) => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) return;
        setOpen(false);
    };
    const handleMenuItemClick = (index: number) => {
        setSelectedIndex(index);
        setOpen(false);
        console.info(`You clicked ${options[index].label}`);
    };

    return (
        <>
            <ButtonGroup
                ref={anchorRef}
                sx={{
                    color:'#424242',
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
                    }}
                    onClick={handleToggle}
                >
                    <FilterListIcon />
                    <span style={{ color: options[selectedIndex].color || 'black' }}>
                        {options[selectedIndex].label}
                    </span>
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
                                    sx={{ padding: '8px', borderRadius: '5px' }}
                                    autoFocusItem
                                >
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option.label}
                                            sx={{
                                                borderRadius: '5px',
                                                my: '5px',
                                                backgroundColor: option.backgroundColor,
                                                color: option.color,
                                            }}
                                            selected={index === selectedIndex}
                                            onClick={() => handleMenuItemClick(index)}
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
