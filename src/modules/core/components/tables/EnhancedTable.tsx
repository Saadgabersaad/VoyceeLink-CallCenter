import React from 'react'
import { Checkbox, TableCell, TableContainer, Table, TableRow, TableBody, Paper, TablePagination } from '@mui/material'
import { HeadCell } from 'modules/core/consts/tableHead'
import { EnhancedTableHead } from './EnhancedTableHead'

export type EnhancedTableProps<T> = {
  rows: (T & { id: string })[]
  headCells: HeadCell[]
  loading: boolean
  rowsPerPageCount: number
  onPageChange(newPage: number): void
  render?: (row: T) => React.ReactNode
}

export function EnhancedTable<T>({
  rows,
  render,
  headCells,
  loading,
  rowsPerPageCount,
  onPageChange
}: EnhancedTableProps<T>) {
  const [selected, setSelected] = React.useState<readonly string[]>([])
  const [page, setPage] = React.useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageCount || 5)

  const handleClick = (_event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }
    setSelected(newSelected)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n?.id)
      setSelected(newSelected);
      return
    }
    setSelected([])
  }

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
    onPageChange(newPage)
  }

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () => loading ? [] :
      [...rows]
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, loading],
  )

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <EnhancedTableHead
            headCells={headCells}
            numSelected={selected.length}
            rowCount={rows?.length || 0}
            onSelectAllClick={handleSelectAllClick}
          />
          <TableBody>
            {visibleRows?.map((row, index) => {
              const key = row.id
              const isItemSelected = selected.includes(key);
              const labelId = `enhanced-table-checkbox-${index}`

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, key)}
                  role='checkbox'
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={key}
                  selected={isItemSelected}
                  sx={{ cursor: 'pointer', height: '65px' }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </TableCell>
                  {render && render(row)}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 56,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          page={page}
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows?.length || 0}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Paper>
  )
}