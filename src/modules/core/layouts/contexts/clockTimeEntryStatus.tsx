import { Attendance } from "modules/dashboard/shared/Attendance";
import React, { useState } from "react";

type ContextStatusEntry = {
    entrieStatus: Attendance | null,
    setEntrieStatus: Function
}

export const ContextStatus = React.createContext({} as ContextStatusEntry);

export default function ClockContextEntry({ children }: Readonly<{
    children: React.ReactNode
}>) {
    const [entrieStatus, setEntrieStatus] = useState<Attendance | null>(null);

    return (
        <ContextStatus.Provider value={{ entrieStatus, setEntrieStatus }}>
            {children}
        </ContextStatus.Provider>
    )
}