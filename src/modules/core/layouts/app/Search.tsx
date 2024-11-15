import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export function SearchInput() {
  return (
    <Paper
      component='form'
      sx={{
        p: '0px 3px',
        display: 'flex',
        alignItems: 'center',
        width: 330,
        boxShadow: '0px 1px 3px 0px #0000001F',
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontSize: 14,
        }}
        placeholder='Search for a page'
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton
        type='button'
        sx={{ p: '7px' }}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
