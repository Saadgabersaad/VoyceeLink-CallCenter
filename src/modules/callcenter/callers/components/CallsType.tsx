import React, { useState, useRef } from 'react';
import { typeOptions } from '../consts/typeOptions';
import { PRIMARY } from "modules/core/consts/theme";
import { Flex } from 'modules/core/components/flex';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popover, MenuItem, MenuList, Box, Link,} from '@mui/material';

interface SimpleListMenuProps {
    type?: string;
    onTypeChange: (type: string) => void;
}

export default function CallsType({ type,onTypeChange }: SimpleListMenuProps) {
    const options = type ? typeOptions : [];
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(
        options.findIndex((option) => option.label === type)
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
        const selectedType = options[index].label;
        if (onTypeChange) {
            onTypeChange(selectedType);
        }
    };

    const selectedOption = options[selectedIndex];

    return (
        <>
            <ButtonGroup
                sx={{p: 0.5, pr: .5, border: 'solid 1px lightgray'}}
                ref={anchorRef}
            >
                <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}
                    onClick={handleToggle}
                >
                    <Button
                        sx={{
                            color: selectedOption?.color || 'black',
                            bgcolor: selectedOption?.backgroundColor || 'white',
                            border: '1px solid #F0F0F0',
                            textTransform: 'none',
                            fontSize: '12px',
                            padding: selectedOption?.label === '' ? '0px 0px' : '4px 10px',
                            borderRadius: '5px',
                        }}
                    >
                        {selectedOption?.label !== 'Video&Audio' && selectedOption?.label}
                        {selectedOption?.icon}

                    </Button>
                        <KeyboardArrowDownOutlinedIcon sx={{color:PRIMARY}}/>
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
                                    px: 1.25,
                                    py: 0.5,
                                    display: 'flex',
                                    flexDirection:'column',
                                    alignItems: 'start',
                                }}
                            >
                                <Flex>
                                <Box>
                                    {options.map((option, index) => (
                                    <Box
                                        key={option.label || index}
                                        onClick={() => handleMenuItemClick(index)}
                                        sx={{
                                            pr: 6,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'start',
                                            marginX: '0',
                                            borderRadius: '5px',
                                            '&:hover': {
                                                backgroundColor: '#E3EEE9',
                                                color: '#000',
                                                transition: 'background-color 0.3s ease',
                                            },
                                        }}
                                    >
                                        <MenuItem
                                            key={option.label || index}
                                            sx={{
                                                borderRadius: '5px',
                                                my: '2px',
                                                px: 1.25,
                                                py: 0.5,
                                                zIndex: 3,
                                                fontSize: '12px',
                                                backgroundColor: option.backgroundColor,
                                                color: option.color,
                                                padding: index === 2 ? '0px 0px' : '4px 10px',
                                                '&:hover': {
                                                    backgroundColor: option.backgroundColor,
                                                    color: '#000',
                                                    transition: 'background-color 0.3s ease',
                                                },
                                            }}
                                        >
                                            {option.label !== 'Video&Audio' && option.label}
                                            {option.icon}
                                        </MenuItem>
                                    </Box>
                                ))}
                                </Box>
                                <KeyboardArrowUpIcon sx={{ color: PRIMARY }} />
                                </Flex>

                                    <Link href='#'  alignSelf={'end'} color={PRIMARY}>Edit</Link>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            </Popover>
        </>
    );
}
