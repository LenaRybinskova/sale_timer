'use client';
import DotIconSVG from '../../../public/assets/icons/Dot';
import { useTimerContext } from '@/common/utils/TimerProvider';
import { useState, useEffect } from 'react';

export default function Header() {
    console.log('ререндер Header');

    const [timeLeft, setTimeLeft] = useState(36);
    const { endTime, criticalTime, setEndTime, setCriticalTime } = useTimerContext();

    useEffect(() => {
        if (endTime) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const newTime = prev - 1;

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
    }, [endTime, criticalTime, setEndTime, setCriticalTime]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <header className="flex items-center justify-center w-full bg-foreground-secondary h-20">
            <div className="flex justify-center items-center text-center w-full gap-6">
                <span className="text-text font-bold text-[30px] leading-[130%]">Скидка действует:</span>
                <div className={'flex items-center justify-center flex-col'}>
                    <div className={'flex items-center justify-center gap-4'}>
                        <div className={`flex text-[60px] font-family-fourth leading-none font-bold ${endTime ? "text-primary" : "text-secondary"}`}>
                            {minutes.toString().padStart(2, '0')}
                        </div>
                        <div className={'flex flex-col justify-center items-center gap-[5px]'}>
                            <DotIconSVG className={endTime ? "text-primary" : "text-secondary"}/>
                            <DotIconSVG className={endTime ? "text-primary" : "text-secondary"}/>
                        </div>
                        <div className={`flex text-[60px] font-family-fourth leading-none font-bold ${endTime ? "text-primary" : "text-secondary"}`}>
                            {seconds.toString().padStart(2, '0')}
                        </div>
                    </div>
                    <div className={'flex items-center justify-center gap-8'}>
                        <div className="font-bold leading-tight text-text-second font-bold">минут</div>
                        <div className="font-bold leading-tight text-text-second font-bold">секунд</div>
                    </div>
                </div>
            </div>
        </header>
    );
}