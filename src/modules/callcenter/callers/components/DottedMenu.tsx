import React, { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


type OptionItem = {
    label: string;
    icon: JSX.Element;
    action?: () => void;
    disabled?: boolean;
    hidden?: boolean;
}

enum ModalType {
    Name = 'nameModalOpen',
}
const ITEM_HEIGHT = 48;

export default function DottedMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();



    const options = [
        { label: 'Deactivate User', icon: <PersonIcon color="primary" />, },
        { label: 'Change Call Type', icon: <EditIcon color="primary" /> },
        { label: 'Delete Callers', icon: <DeleteIcon sx={{ color: 'red' }} /> },
    ];


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={anchorEl ? 'long-menu' : undefined}
                aria-expanded={anchorEl ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                sx={{
                    paper: {
                        maxHeight: ITEM_HEIGHT * 5.5,
                        width: '23ch',
                        border: '1px solid green',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.label}
                        sx={{ paddingX: '16px', paddingY: '12px' }}
                    >
                        {option.icon}
                        <span style={{ marginLeft: '10px' }}>{option.label}</span>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}


