import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material'
import { HeadCell } from 'modules/core/consts/tableHead'

type EnhacedTableHeadProps = {
  rowCount: number
  numSelected: number
  headCells: HeadCell[]
  onSelectAllClick: (e:React.ChangeEvent<HTMLInputElement>) => void
}


export function EnhancedTableHead({
  headCells,
  rowCount,
  numSelected,
  onSelectAllClick
}: EnhacedTableHeadProps) {
  return (
    <TableHead>
      <TableRow sx={{bgcolor:'#f7f7f7'}} >
        <TableCell  padding="checkbox">
          <Checkbox
            color='primary'
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sx={{ fontWeight: '600',fontSize:'16px'}}
          >
            {headCell.label}
          </TableCell>
        ))}
        <TableCell padding="checkbox"></TableCell>
      </TableRow>
    </TableHead>
  );
}