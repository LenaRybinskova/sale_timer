'use client';
import DotIconSVG from '../../../public/assets/icons/Dot'
import {useState, useEffect} from 'react';
import {useTimerContext} from '@/common/utils/TimerProvider';

export default function Header() {
    console.log('ререндер Header')
    const [timeLeft, setTimeLeft] = useState(5);

    const context = useTimerContext();
    if (!context) return null;
    const {endTime, setEndTime, setCriticalTime} = context;

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const newTime = prev - 1;

                if (newTime === 30) {
                    setCriticalTime(true);
                }

                if (newTime <= 0) {
                    clearInterval(timer);
                    setEndTime(true);
                    return 0;
                }

                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [setCriticalTime, setEndTime]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
/*    TODO вынести в компоненту*/
    return (
        <header className="flex items-center justify-center w-full bg-foreground-secondary h-20">
            <div className="flex justify-center items-center text-center w-full gap-6">
                <span className="text-text font-bold text-[30px] leading-[130%]">Скидка действует:</span>
                <div className={'flex items-center justify-center  flex-col '}>
                    <div className={'flex items-center justify- gap-4 '}>

                        {/*//Count*/}
                        <div className={`flex  text-[60px] font-family-fourth leading-none font-bold ${endTime ? "text-primary":"text-secondary" }`}>
                            {minutes.toString().padStart(2, '0')}
                        </div>
                        <div className={'flex flex-col justify-center items-center gap-[5px]'}>
                            <DotIconSVG className={endTime ? "text-primary" : "text-secondary"}/>
                            <DotIconSVG className={endTime ? "text-primary" : "text-secondary"}/>
                        </div>
                        <div className={`flex  text-[60px] font-family-fourth leading-none font-bold ${endTime ? "text-primary":"text-secondary" }`}>
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