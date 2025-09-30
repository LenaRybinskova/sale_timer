/*
'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type TimerContextType = {
    endTime: boolean;
    criticalTime: boolean;
    timeLeft: number;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({ children }: { children: ReactNode }) {
    const [endTime, setEndTime] = useState(false);
    const [criticalTime, setCriticalTime] = useState(false);
    const [timeLeft, setTimeLeft] = useState(35); // 2 минуты

    useEffect(() => {
        if (endTime) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const newTime = prev - 1;

                // Проверяем условия
                if (newTime <= 30 && !criticalTime) {
                    setCriticalTime(true);
                }

                if (newTime <= 0) {
                    setEndTime(true);
                    return 0;
                }

                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime, criticalTime]);

    const value = {
        endTime,
        criticalTime,
        timeLeft
    };

    return (
        <TimerContext.Provider value={value}>
            {children}
        </TimerContext.Provider>
    );
}

export function useTimerContext() {
    const context = useContext(TimerContext);
    if (!context) {
        throw new Error('useTimerContext must be used within a TimerProvider');
    }
    return context;
}*/
'use client';
import {createContext, useContext, useState, useEffect, ReactNode, useMemo} from 'react';


type TimerContextType = {
    endTime: boolean;
    criticalTime: boolean;
    setEndTime: (value: boolean) => void;
    setCriticalTime: (value: boolean) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({ children }: { children: ReactNode }) {
    const [endTime, setEndTime] = useState(false);
    const [criticalTime, setCriticalTime] = useState(false);

    const contextValue = useMemo(() => ({
        endTime,
        criticalTime,
        setEndTime,
        setCriticalTime
    }), [endTime, criticalTime]);

    return (
        <TimerContext.Provider value={contextValue}>
            {children}
        </TimerContext.Provider>
    );
}

export function useTimerContext() {
    const context = useContext(TimerContext);
    if (!context) {
        throw new Error('useTimerContext must be used within a TimerProvider');
    }
    return context;
}