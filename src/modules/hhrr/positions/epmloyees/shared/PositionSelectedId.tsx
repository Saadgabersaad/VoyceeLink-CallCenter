'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';


type Position = {
    id: string;
    name: string;
};
type PositionContextType = {
    positionId: string | null;
    setPositionId: (id: string | null) => void;

};


const PositionContext = createContext<PositionContextType | undefined>(undefined);

export const PositionContextProvider = ({ children }: { children: ReactNode }) => {
    const [positionId, setPositionId] = useState<string | null>(null);

    return (
        <PositionContext.Provider value={{ positionId, setPositionId}}>
            {children}
        </PositionContext.Provider>
    );
};

export const usePositionContext = () => {
    const context = useContext(PositionContext);
    if (!context) {
        throw new Error('usePositionContext must be used within a PositionContextProvider');
    }
    return context;
};
