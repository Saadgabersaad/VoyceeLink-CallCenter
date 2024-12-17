import React, { useState, useRef } from 'react';
import {Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, Box,} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';

interface FilterBtnProps {
    onFilterChange: {
        setPositionFilter?: (value: string) => void;
        setStatusFilter?: (value: string) => void;
    };
}
const FilterBtn = ({ onFilterChange }: FilterBtnProps) => {

    const { setPositionFilter, setStatusFilter } = onFilterChange || {};
    const optionGroups = [
        {
            title: 'Position Options',
            options: ['Admin', 'Manager', 'HR', 'User'],
            onSelect: setPositionFilter || (() => {}),
        },
        {
            title: 'Status Options',
            options: ['Active', 'Inactive'],
            onSelect: setStatusFilter || (() => {}),
        },
    ];

    const [open, setOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = (event: Event) => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) return;
        setOpen(false);
    };

    const handleOptionClick = (onSelect: (value: string) => void, value: string, group: string) => {
        if (group === 'Position') {
            setSelectedPosition(value);
        } else if (group === 'Status') {
            setSelectedStatus(value);
        }
        onSelect(value);
//        setOpen(false);
    };

    return (
        <>
            <ButtonGroup
                ref={anchorRef}
                sx={{color: '#424242', bgcolor: 'white',}}
            >
                <Button
                    sx={{
                        border: '1px solid lightGray', borderRadius: '5px',
                        color: '#424242', width: '220px', display: 'flex',
                        justifyContent: 'space-between', alignItems: 'center',
                        py: 0, fontWeight: 'bold', fontSize: '16px',
                        textTransform: 'capitalize',
                    }}
                    onClick={handleToggle}
                >
                    <FilterListIcon />
                    <span>Filters</span>
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
                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',}}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    sx={{padding: '8px', borderRadius: '5px',}}
                                    autoFocusItem>
                                    <Box
                                        sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2,}}>

                                        {optionGroups.map((group) => (
                                            <Box key={group.title}>
                                                <strong
                                                    style={{
                                                        marginBottom: '8px',
                                                        display: 'block',
                                                        fontSize: '12px',
                                                        color: '#616161',
                                                    }}>
                                                    {group.title}
                                                </strong>
                                                {group.options.map((option) => (
                                                    <MenuItem
                                                        key={option}
                                                        sx={{
                                                            fontSize: '12px',
                                                            borderRadius: '5px',
                                                            my: '5px',
                                                            backgroundColor:
                                                                (group.title === 'Position Options' &&
                                                                    selectedPosition === option) ||
                                                                (group.title === 'Status Options' &&
                                                                    selectedStatus === option)
                                                                    ? '#e9f1ed'
                                                                    : '#F7F7F7',
                                                            cursor: 'pointer',
                                                            '&:hover': {
                                                                backgroundColor: '#e9f1ed',
                                                            },
                                                        }}
                                                        onClick={() =>
                                                            handleOptionClick(
                                                                group.onSelect,
                                                                option,
                                                                group.title === 'Position Options' ? 'Position' : 'Status')
                                                        }
                                                    >
                                                        {option}
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
};

export default FilterBtn;
