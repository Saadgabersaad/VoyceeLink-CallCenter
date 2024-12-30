'use client'
import { Toaster } from 'react-hot-toast'
import { AppHeader } from './Appbar'
import { Main } from './Main'
import React, { useState } from 'react';
import { Attendance } from 'modules/dashboard/shared/Attendance';

export const ContextStatus = React.createContext();
export const AppLayout = ({ children }: Readonly<{
  children: React.ReactNode
}>) => {
  const [entrieState, setEntrieState] = useState<Attendance | null>(null);
  return <>
    <ContextStatus.Provider value={[entrieState, setEntrieState]}>
      <AppHeader />
      <Main>
        {children}
        <Toaster />
      </Main>
    </ContextStatus.Provider>
  </>
}
