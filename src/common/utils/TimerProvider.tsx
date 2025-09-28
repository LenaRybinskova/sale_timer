'use client';
import {createContext, useContext, useState} from 'react';


type TimerContextType = {
    endTime: boolean;
    setEndTime: (value: boolean) => void;
    criticalTime: boolean;
    setCriticalTime: (value: boolean) => void;
}

const AppContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({children}: { children: React.ReactNode }) {
    const [endTime, setEndTime] = useState(false);
    const [criticalTime, setCriticalTime] = useState(false);

    return (
        <AppContext.Provider value={{endTime, setEndTime, criticalTime, setCriticalTime}}>
            {children}
        </AppContext.Provider>
    );
}

export function useTimerContext() {
    return useContext(AppContext);
}