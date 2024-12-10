import React from 'react'
import { Box } from '@mui/material'

export const Page = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <Box p={1} sx={{
      bgcolor: 'grey.100',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      pt: 4
    }}>
      {children}
    </Box>
  )
}
