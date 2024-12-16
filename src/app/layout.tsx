import type { Metadata } from 'next'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppLayout } from 'modules/core/layouts/app'
import theme from 'modules/core/consts/theme'
import './globals.css'
import React from 'react'
import ReactQueryProvider from 'modules/core/providers/ReactQuery'

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ReactQueryProvider>
            <AppLayout>
              {children}
            </AppLayout>
          </ReactQueryProvider>
        </ThemeProvider>`
      </body>
    </html>
  )
}
