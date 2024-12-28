'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
type PositionContextType = {
    positionId: string | null;
    setPositionId: (id: string | null) => void;
    positionData: PositionContextType | [] | null;
    setPositionData: (data: [] | null) => void;
};

// Create the context
const PositionContext = createContext<PositionContextType | undefined>(undefined);

// Create a provider to wrap components
export const PositionContextProvider = ({ children }: { children: ReactNode }) => {
    const [positionId, setPositionId] = useState<string | null>(null);
    const [positionData, setPositionData] = useState(null);

    return (
        <PositionContext.Provider value={{ positionId, setPositionId,positionData,setPositionData }}>
            {children}
        </PositionContext.Provider>
    );
};

// Custom hook to use the PositionContext
export const usePositionContext = () => {
    const context = useContext(PositionContext);
    const usePositionData = () => useContext(PositionContext);
    if (!context) {
        throw new Error('usePositionContext must be used within a PositionContextProvider');
    }
    return context;
};
