'use client';
import SaleLabelSVG from '../../../public/assets/icons/SaleLabelSVG';

type Ptops = {
    className?: string
    selected?: boolean;
    name?: string
    discountMinPrice?: number
    discountPercentage?: number
    price?: number
    text?: string
}

export default function ItemDiscount({className, selected = false, name, discountMinPrice, discountPercentage, price}: Ptops) {

    return (
        <div className={'flex flex-col items-start w-[210px] h-[197px] justify-start border-[2px] border-border rounded-[22px] pt-[26px] pr-[22px] pb-[20px] pl-[26px] gap-[30px]  hover:bg-background-card hover:border-secondary cursor-pointer relative before:content-[""] before:absolute before:top-1/2 before:left-0 before:right-0 before:w-[134px] before:h-px before:bg-br before:-translate-y-1/2 before:mx-auto'}>

            <div className={'flex flex-col w-full justify-center items-start gap-[18px]'}>

                <div className={'flex items-center justify-between w-full font-normal text-[26px] leading-[100%]'}>
                    <h3 className={'font-family-second font-bold  text-[26px] leading-[100%] uppercase tracking-[-2px]'}>
                        {name}
                    </h3>
                    <div className="w-[22px] h-[22px] bg-black rounded-full"></div>
                </div>

                {/* зачеркивание*/}
                <p className="font-bold text-[20px] leading-[110%] relative inline-block overflow-hidden text-text-muted
              before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-full before:h-0.5 before:bg-primary before:origin-center before:rotate-20 before:scale-x-[1.414] before:-translate-y-1/2
              after:content-[''] after:absolute after:top-1/2 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-center after:-rotate-20 after:scale-x-[1.414] after:-translate-y-1/2">
                    {price}р
                </p>
            </div>

            {/*//-------------------------------------*/}

            <div className={'flex relative justify-start items-center'}>
                <p className={'font-[700] text-[40px] leading-[100%] '}>{discountMinPrice}р</p>
                <div className={'absolute top-[-15px] right-[-45px] flex items-center justify-center'}>
                    <div className={'relative'}>
                        <SaleLabelSVG className="w-[47px] h-[47px]"/>
                        <div className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm font-medium text-[13px] leading-[130%]'}>
                            -{discountPercentage}%
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}