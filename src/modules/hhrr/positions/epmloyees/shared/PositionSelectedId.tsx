'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';


type Position = {
    id: string;
    name: string;
    // Add other properties based on your data structure
};
// Define the context type
type PositionContextType = {
    positionId: string | null;
    setPositionId: (id: string | null) => void;
    positionData: Position[] | null; // Array of positions or null
    setPositionData: (data: Position[] | null) => void;
};


// Create the context
const PositionContext = createContext<PositionContextType | undefined>(undefined);

// Create a provider to wrap components
export const PositionContextProvider = ({ children }: { children: ReactNode }) => {
    const [positionId, setPositionId] = useState<string | null>(null);
    const [positionData, setPositionData] = useState<Position[] | null>(null);

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
