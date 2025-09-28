'use client';
import DotIconSVG from '../../../public/assets/icons/Dot'


export default function Header() {


    return (
        <header className="flex items-center justify-center w-full bg-foreground-secondary h-20">
            <div className="flex justify-center items-center text-center w-full gap-6">
                <span className="text-text font-bold text-[30px] leading-[130%]">Скидка действует:</span>
                <div className={'flex items-center justify-center  flex-col '}>
                    <div className={'flex items-center justify- gap-4 '}>
                        <div className={'flex text-secondary text-[60px] font-family-fourth leading-none font-bold'}>
                            09
                        </div>
                        <div className={'flex flex-col justify-center items-center gap-[5px]'}>
                            <DotIconSVG className="opacity-50"/>
                            <DotIconSVG className="opacity-50"/>
                        </div>
                        <div className={'flex text-secondary text-[60px] font-family-fourth leading-none font-bold'}>
                            09
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