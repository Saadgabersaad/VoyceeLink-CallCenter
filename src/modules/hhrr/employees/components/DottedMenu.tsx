import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Get the current pathname
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const options = [
    { label: 'View Profile Info', icon: <PersonIcon color="primary" /> },
    { label: 'Change User Position', icon: <WorkIcon color="primary" /> },
    { label: 'Change User Dept', icon: <ApartmentIcon color="primary" /> },
    { label: 'Edit User', icon: <EditIcon color="primary"/> },
    { label: 'Delete User', icon: <DeleteIcon sx={{color:'red'}} /> },
];

const ITEM_HEIGHT = 48;

export default function DottedMenu({ userId }: { userId: string }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        // const newPath = `/hhrr/employees/employee-profile/${userId}`;
        const newPath = `/hhrr/employees/employee-profile/`;
        router.push(newPath);
        handleClose();
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        style: {
                            maxHeight: ITEM_HEIGHT * 5.5,
                            width: '23ch',
                            border: 'solid 1px green',
                        },
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.label}
                        onClick={option.label === 'View Profile Info' ? handleProfileClick : handleClose}
                        sx={{paddingX:'16px',paddingY:'12px'}}
                    >
                        {option.icon}
                        <span style={{ marginLeft: '10px' }}>{option.label}</span>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
