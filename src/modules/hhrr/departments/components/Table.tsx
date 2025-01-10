import dayjs from 'dayjs'
import { Button, Menu, MenuItem, TableCell } from '@mui/material'
import {
  EnhancedTable,
  EnhancedTableProps
} from 'modules/core/components/tables/EnhancedTable'
import { headCells } from '../consts/headCells'
import { Department } from '../shared/Department'
import DropdownMenu from 'modules/core/components/Dropdown'
import Link from 'next/link'
import { useBoolean } from 'modules/core/hooks/use-boolean'
import AddPositionsModal from 'modules/positions/components/AddPositionsModal'
import { useState } from 'react'
import DeleteDepartmentModal from './DeleteDepartmentModal'
import NewAreaContextProvider from '../context/new-area.context'
import PositionsRow from './PositionsRow'
import { Apartment, BusinessCenterOutlined, Delete } from '@mui/icons-material'
import { PRIMARY } from 'modules/core/consts/theme'

export const Table = ({
  rows,
  loading
}: Partial<EnhancedTableProps<Department>>) => {

  const [selectedDepartment, setDepartment] = useState<Department | null>(null)

  const [positionsModal, setPositionsModal, closePositionsModal] = useBoolean()
  const [deleteModal, setDeleteModal, closeDeleteModal] =useBoolean()

  const handleSelectDepartment = (department: Department) => {
    setDepartment(department)
  }

  return <NewAreaContextProvider>
    <EnhancedTable
      rows={rows!}
      loading={loading!}
      showCheckBox={true}
      headCells={headCells}
      onPageChange={() => { }}
      render={(row) => {
        return <>
          <TableCell>
            {row.name}
          </TableCell>
          <TableCell>
            John Doe
          </TableCell>
          <TableCell>
            {dayjs(row.updatedAt).format('MMMM D, YYYY h:mm A')}
          </TableCell>
          <PositionsRow
            department={row}
            positions={row.position}
            //department={row}
          />
          <TableCell>
            <DropdownMenu>
              {({ onClose }) => [
                <MenuItem key='view' sx={{ gap: 1 }}>
                  <Apartment sx={{color: PRIMARY}}/>
                  <Link href={`departments/${row.id}`}>
                    View Department
                  </Link>
                </MenuItem>,
                <MenuItem sx={{ gap: 1 }}key='add-modal' onClick={() => {
                  handleSelectDepartment(row)
                  setPositionsModal()
                  onClose()
                }}>
                  <BusinessCenterOutlined sx={{color: PRIMARY}} />
                  Add new Position
                </MenuItem>,
                <MenuItem
                  sx={{ gap: 1 }}
                  key={'delete'}
                  onClick={() => {
                    handleSelectDepartment(row)
                    setDeleteModal()
                    onClose()
                  }}
                >
                  <Delete sx={{ color: '#d52727'}} />
                  Delete Department
                </MenuItem>
              ]}
            </DropdownMenu>
          </TableCell>
        </>
      }}
    />
    {positionsModal && selectedDepartment &&
      <AddPositionsModal
        onClose={closePositionsModal}
        department={selectedDepartment}
        open
      />}
    {deleteModal && selectedDepartment &&
      <DeleteDepartmentModal
        onClose={closeDeleteModal}
        department={selectedDepartment}
        open
      />
    }
  </NewAreaContextProvider>
}
