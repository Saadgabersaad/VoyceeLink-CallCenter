import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useBoolean } from 'modules/core/hooks/use-boolean';
import { usePositionContext } from 'modules/hhrr/positions/epmloyees/shared/PositionSelectedId';

// Define the types for option items
type OptionItem = {
    label: string;
    icon: JSX.Element;
    action?: () => void;
};

type DottedMenuProps = {
    userId: string;
    mainModal?: React.ReactNode; // Optional modal to be rendered on option click
    NameModal?: React.ReactNode; // Additional modal for "Change Position Name"
    options: OptionItem[]; // List of options with labels, icons, and actions
};

const ITEM_HEIGHT = 48;

export default function DottedMenu({ userId, mainModal, NameModal, options = [] }: DottedMenuProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [open, onOpen, onClose] = useBoolean();
    const [nameModalOpen, setNameModalOpen] = useState(false); // Separate state for NameModal visibility
    const router = useRouter();

    const { setPositionId } = usePositionContext();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget); // Set anchor for menu
    };

    const handleClose = () => {
        setAnchorEl(null); // Close the menu
    };

    // Navigate to a new path
    const navigateTo = (path: string) => {
        router.push(path);
        handleClose();
    };

    // Handle the opening of the modal on specific option click
    const handleOptionClick = (option: OptionItem) => {
        if (option.label === 'Delete User') {
            onOpen(); // Open main modal
        } else if (option.label === 'View Position') {
            setPositionId(userId);
            navigateTo(`/hhrr/positions/employee`);
        } else if (option.label === 'Change Position Name') {
            setNameModalOpen(true); // Open NameModal
        } else {
            option.action?.();
            handleClose();
        }
    };

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
                        border: 'solid 1px green',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.label}
                        onClick={() => handleOptionClick(option)} // Handle option click
                        sx={{ paddingX: '16px', paddingY: '12px' }}
                    >
                        {option.icon}
                        <span style={{ marginLeft: '10px' }}>{option.label}</span>
                    </MenuItem>
                ))}
            </Menu>

            {/* Render the modals based on their respective states */}
            {open && mainModal && React.cloneElement(mainModal as React.ReactElement, { open, onClose })}
            {nameModalOpen && NameModal && React.cloneElement(NameModal as React.ReactElement, {
                open: nameModalOpen,
                onClose: () => setNameModalOpen(false) // Close NameModal when onClose is triggered
            })}
        </div>
    );
}
