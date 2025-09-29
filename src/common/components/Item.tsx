'use client';
import SaleLabelSVG from '../../../public/assets/icons/SaleLabelSVG';

type Ptops = {
    className?: string
    variant?: 'horizontally' | 'vertically';
    selected?: boolean;
    onClick?:() => void

    name?:string
    discountMinPrice?:number
    discountPrice?:number
    price?:number
    discountPercentage?:number
    text?:string
}

export default function Item({className, variant, selected, name, discountMinPrice, discountPrice, price,text, discountPercentage}: Ptops) {


    return (
        <div className={`w-full flex border-2 border-border rounded-[20px] relative transition-all duration-300 ease-in-out hover:bg-background-card hover:border-secondary cursor-pointer
         ${selected ? 'bg-background-card border-secondary' : 'bg-foreground-secondary'} 
         ${className} ${variant === 'horizontally'
            ? 'flex-row  items-start justify-center  p-[31px_57px_26px_37px]'
            : 'flex-col  items-center justify-center gap-[26px] p-[45px_35px_26px_37px]'}  `}>

            <h3 className={`${variant === 'horizontally'
                ? 'color-text text-left text-[38px] leading-[100%] uppercase font-family-second font-normal mt-[10px] mr-[22px]'
                : 'text-text-third text-center text-[30px] leading-[100%] uppercase font-family-second font-normal '
            }`}>
                {name}
            </h3>

            <div className={`flex flex-col text-price ${variant === 'horizontally'
                ? 'w-auto justify-center items-center gap-0 mr-[56px]'
                : 'w-full justify-between items-end gap-[10px]'
            }`}>

                <div className={`flex flex-col items-end ${variant === 'horizontally' ? 'w-auto' : 'w-full'}`}>
                    <div className="color-text text-[50px] leading-[110%] font-bold">{discountPrice}p</div>
                    <div className="line-through text-text-muted">{price}p</div>
                </div>

            </div>

            <span className={`color-text-price block  w-full font-medium text-base leading-[130%] text-text-price ${variant === 'horizontally' ? 'text-left' : 'text-center'}`}>{text}</span>

            <div className={'absolute -top-9 right-1 flex items-center justify-center'}>
                <div className={'relative'}>
                    <SaleLabelSVG className={'w-12 h-12'}/>
                    <div className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm font-medium text-[18px] leading-[130%]'}>
                        -{discountPercentage}
                    </div>
                </div>
            </div>

        </div>
    );
}