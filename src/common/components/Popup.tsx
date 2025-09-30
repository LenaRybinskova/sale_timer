'use client'
import {MonthlyTariffType} from '@/store/tariffsSlice';
import ItemDiscount from '@/common/components/ItemDiscount';
import Button from '@/common/components/Button';

type Props = {
    items: MonthlyTariffType[]
}

export default function Popup({items}: Props) {
    return (
        <div className={'flex flex-col justify-center items-center w-[750px] h-[658px] bg-background-primary px-[37px] pt-[61px] relative before:content-[\'горящее_предложение\'] before:absolute before:top-[15px] before:left-[30px] before:transform before:-translate-y-1/2 before:bg-secondary before:pt-[4px] before:px-[10px] before:pb-[6px] before:text-foreground-secondary font-medium text-base leading-[1.3] tracking-wide'}>

            <h3 className={'font-bold text-2xl leading-relaxed uppercase font-family-third flex gap-2 mb-[35px]'}>
                <span>Не упусти</span>
                <span className="text-secondary">свой последний шанс</span>
            </h3>

            <h4 className={'font-medium text-[24px] leading-[130%] mb-[10px]'}>
                <span>Мы знаем, как трудно начать..</span>
                <span className={'font-bold'}>Поэтому!</span>
            </h4>

            <div className={'px-[30px] py-[18px] border-[2px] border-secondary rounded-[30px] mb-[33px]'}>
                <p className={'font-bold text-[24px] leading-[130%] '}>
                    <span>Дарим скидку для </span>
                    <span className="text-secondary">лёгкого старта 🏃‍♂️</span>
                </p>
            </div>

            <div className={'flex flex-col justify-center items-center gap-[24px] mb-[28px]'}>
                <h4 className={'font-medium text-[24px] leading-[130%] mb-[10px]'}>
                    <span>Посмотри, что мы для тебя приготовили 🔥</span>
                </h4>
                <div className={'flex justify-center items-center gap-[10px]'}>
                    {items.map(item =>
                        <ItemDiscount name={item.type} key={item.id} discountPercentage={item.discountPercentage} discountMinPrice={item.discountMinPrice} price={item.price}/>)}
                </div>
            </div>

            <Button label={'Начать тренироваться'} className={' font-[500] text-[20px] leading-[100%]'}/>
        </div>
    );
}

