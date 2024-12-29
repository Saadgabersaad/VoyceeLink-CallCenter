import type { Metadata } from 'next'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppLayout } from 'modules/core/layouts/app'
import theme from 'modules/core/consts/theme'
import './globals.css'
import React from 'react'
import ReactQueryProvider from 'modules/core/providers/ReactQuery'
import { PositionContextProvider } from 'modules/hhrr/positions/epmloyees/shared/PositionSelectedId'

export const metadata: Metadata = {
  title: 'Voycelink',
  description: 'Voycelink App'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
      <PositionContextProvider>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ReactQueryProvider>
            <AppLayout>
              {children}
            </AppLayout>
          </ReactQueryProvider>
        </ThemeProvider>
      </PositionContextProvider>

      </body>
    </html>
  )
}
