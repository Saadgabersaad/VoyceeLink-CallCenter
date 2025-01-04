'use client'
import { Toaster } from 'react-hot-toast'
import { AppHeader } from './Appbar'
import { Main } from './Main'
import React from 'react';
import ClockContextEntry from '../contexts/clockTimeEntryStatus';


export const AppLayout = ({ children }: Readonly<{
  children: React.ReactNode
}>) => {
  return <ClockContextEntry>
    <AppHeader />
      <Main>
        {children}
        <Toaster />
      </Main>
  </ClockContextEntry>
}
