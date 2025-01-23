'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface GradientContextType {
    gradient: string;
    setGradient: (gradient: string) => void;
}

const GradientContext = createContext<GradientContextType | undefined>(undefined);

export const useGradient = () => {
    const context = useContext(GradientContext);
    if (!context) {
        throw new Error('useGradient must be used within a GradientProvider');
    }
    return context;
};

interface GradientProviderProps {
    children: ReactNode;
}

export const GradientProvider: React.FC<GradientProviderProps> = ({ children }) => {
    const [gradient, setGradient] = useState<string>('bg-[radial-gradient(circle_at_top_left,_#FBFFFF,_#80E9FE)]'); // Default gradient

    return (
        <GradientContext.Provider value={{ gradient, setGradient }}>
            {children}
        </GradientContext.Provider>
    );
};
