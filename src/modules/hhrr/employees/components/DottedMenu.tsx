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
import { useBoolean } from 'modules/core/hooks/use-boolean';
import ChangeEmployeePosModal from 'modules/hhrr/departments/components/ChangeEmployeePosModal';
import { Employee } from '../shared/Employee';
import useDepartment from 'modules/hhrr/departments/hooks/use-department';
import { DialogProps } from 'modules/core/components/FormDialog';
import { useQueryClient } from '@tanstack/react-query';
import { EMPLOYEES } from '../consts/queryKeys';
import DeleteEmployeeModal from './DeleteEmployeeModal';

const ITEM_HEIGHT = 48;


type Props = {
    employee: Employee
}

export default function DottedMenu({ employee }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();
    const pathname = usePathname();

    const [moveEmployeePosModal, openMoveEmployeePos, closeMoveEmployeePos] = useBoolean()
    const [deleteEmployeeModal, openDeleteModal, closeDeleteModal] = useBoolean()

    const options = [
        { label: 'View Profile Info', icon: <PersonIcon color="primary" />, },
        { label: 'Change User Position', icon: <WorkIcon color="primary" />, onClick: openMoveEmployeePos },
        { label: 'Change User Dept', icon: <ApartmentIcon color="primary" />, onClick: openMoveEmployeePos },
        { label: 'Edit User', icon: <EditIcon color="primary" /> },
        { label: 'Delete User', icon: <DeleteIcon sx={{ color: 'red' }} />, onClick: openDeleteModal },
    ];


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
                        onClick={option.onClick}
                        sx={{ paddingX: '16px', paddingY: '12px' }}
                    >
                        {option.icon}
                        <span style={{ marginLeft: '10px' }}>{option.label}</span>
                    </MenuItem>
                ))}
            </Menu>
            {moveEmployeePosModal && <PositionModal
                employee={employee}
                onClose={closeMoveEmployeePos}
            />}
            {deleteEmployeeModal && <DeleteEmployeeModal
                employeeId={employee.id}
                onClose={closeDeleteModal}
                invalidateQueryKey={EMPLOYEES}
                
            />}
        </div>
    );
}


const PositionModal = ({ employee, onClose }: Props & DialogProps) => {
    const { data } = useDepartment(employee?.position?.departmentId)
    if (!data) return

    return (
        <ChangeEmployeePosModal
            employee={employee}
            onClose={onClose}
            department={data?.data}
            invalidateKey={EMPLOYEES}
        />
    )
}