'use client';
import SaleLabelSVG from '../../../public/assets/icons/SaleLabelSVG';

type Ptops = {
    className?: string
    variant?: 'horizontally' | 'vertically';
}

export default function Item({className, variant}: Ptops) {


    return (

        <div className={`w-full flex bg-foreground-secondary  border-2 border-border rounded-[20px] relative transition-all duration-300 ease-in-out hover:bg-background-card hover:border-secondary cursor-pointer ${className} ${variant === 'horizontally'
            ? 'flex-row  items-start justify-center  p-[31px_57px_26px_37px]'
            : 'flex-col  items-center justify-center gap-[26px] p-[45px_35px_26px_37px]'}  `}>

            <h3 className={`${variant === 'horizontally'
                ? 'color-text text-left text-[38px] leading-[100%] uppercase font-family-second font-normal mt-[10px] mr-[22px]'
                : 'text-text-third text-center text-[30px] leading-[100%] uppercase font-family-second font-normal '
            }`}>
                навсегда
            </h3>

            <div className={`flex flex-col text-price ${variant === 'horizontally'
                ? 'w-auto justify-center items-center gap-0 mr-[56px]'  
                : 'w-full justify-between items-end gap-[10px]'
            }`}>

                <div className={`flex flex-col items-end ${variant === 'horizontally' ? 'w-auto' : 'w-full'}`}>
                    <div className="color-text text-[50px] leading-[110%] font-bold">5990p</div>
                    <div className="line-through text-text-muted">18 990p</div>
                </div>

            </div>

            <span className={`color-text-price block  w-full font-medium text-base leading-[130%] text-text-price ${variant === 'horizontally' ? 'text-left' : 'text-center'}`}>Всегда быть в форме поддерживать своё здоровье ⭐️</span>

            <div className={'absolute -top-9 right-1 flex items-center justify-center'}>
                <div className={'relative'}>
                    <SaleLabelSVG className={'w-12 h-12'}/>
                    <div className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm font-medium text-[18px] leading-[130%]'}>
                        -40%
                    </div>
                </div>
            </div>

        </div>
    );
}


/*
<div className={'flex flex-col items-center justify-center md:w-[187px] bg-foreground-secondary p-[45px_35px_26px_37px] gap-[26px] border-2 border-border rounded-[20px] relative'}>

    <h3 className={'text-text-third font-normal text-[30px] leading-[100%] font-family-second'}>1 месяц</h3>
    <div className={'flex flex-col items-end gap-0 text-price justify-between w-full gap-[10px]'}>
        <div className={'color-text text-[50px] leading-[110%] font-bold items-start'}>999p</div>
        <div className={'line-through text-text-muted'}>1690p</div>
    </div>
    <span className={'color-text-price block text-center w-full font-medium text-base leading-[130%]'}>Привести тело впорядок 💪🏻</span>

    <div className={'absolute -top-9 right-1 flex items-center justify-center'}>
        <div className={'relative'}>
            <SaleLabelSVG className={'w-12 h-12'}/>
            <div className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm'}>
                -40%
            </div>
        </div>
    </div>

</div>*/
