import { IconButton } from '@mui/material'
import { Position } from '../shared/Position'
import { Department } from '../shared/Department'
import { Delete } from '@mui/icons-material'
import { useBoolean } from 'modules/core/hooks/use-boolean'
import DeletePositionFromDepartmentModal from './DeletePositionFromDepartmentModal'

export type DeletePositionFromDepartmentProps = {
  position: Position
  department: Department
}

export default function DeletePositionFromDepartment({
  position,
  department
}: DeletePositionFromDepartmentProps) {
  const [open, onOpen, onClose] = useBoolean()

  return <>
    <IconButton onClick={onOpen}>
      <Delete />
    </IconButton>
    {open && (
      <DeletePositionFromDepartmentModal
        onClose={onClose}
        department={department}
        position={position}
      />
    )}
  </>
}
