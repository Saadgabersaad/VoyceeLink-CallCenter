import { Position } from '../shared/Position'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Box, TableCell } from '@mui/material';
import { Flex } from 'modules/core/components/flex';
import { Add, KeyboardArrowDown } from '@mui/icons-material';
import { PRIMARY } from 'modules/core/consts/theme';
import { Department } from '../shared/Department';
import { useBoolean } from 'modules/core/hooks/use-boolean';
import AddPositionsModal from 'modules/positions/components/AddPositionsModal';

type Props = {
  department: Department
  positions: Position[] //positions from this department
}

export default function PositionsRow({
  positions,
  department
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const userPositions = positions?.map((position, index) => position.name)

  const [modal, onOpen, onClose] = useBoolean()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <>
    <TableCell>
      <Flex alignItems='center'>
        <Box
          {...!!positions.length && {
            border: 1,
            borderColor: 'grey.400',
            borderRadius: 1,
            p: 1.3
          }}
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          display={'flex'}
          sx={{ width: 200 }}
        >
          <Box sx={{
            textWrap: 'nowrap', overflowX: 'hidden', textOverflow: 'ellipsis'
          }}>
            {userPositions.join(', ')}
          </Box>
          {!!positions.length && <KeyboardArrowDown />}
        </Box>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          sx={{ width: '100%' }}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {positions.map((position, index) => (
            <MenuItem onClick={handleClose} key={position.id}>{position.name}</MenuItem>
          ))}
          <MenuItem onClick={() => {
            onOpen()
            handleClose()
          }}>
            Add New Position <Add sx={{ color: PRIMARY, ml: 1 }} />
          </MenuItem>
        </Menu>
      </Flex>
    </TableCell>
    {modal && (
      <AddPositionsModal
        department={department}
        onClose={onClose}
        open
      />
    )}
  </>
}
