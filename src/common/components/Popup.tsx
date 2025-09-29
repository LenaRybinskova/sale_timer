'use client'


import {MonthlyTariffType} from '@/store/tariffsSlice';
import ItemDiscount from '@/common/components/ItemDiscount';
import {flushAndExit} from 'next/dist/telemetry/flush-and-exit';
import Button from '@/common/components/Button';

type Props = {
    items: MonthlyTariffType[]
}

export default function Popup({items}:Props) {
    return (
        <div className={'flex flex-col justify-center items-center w-[750px] h-[658px] bg-background-primary px-[37px] py-[37px]'}>

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

            <div className={"flex flex-col justify-center items-center gap-[24px] mb-[28px]"}>
                <h4 className={'font-medium text-[24px] leading-[130%] mb-[10px]'}>
                    <span>Посмотри, что мы для тебя приготовили 🔥</span>
                </h4>
                <div className={"flex justify-center items-center gap-[10px]"}>
                    {items.map(item => <ItemDiscount name={item.type} key={item.id} discountPercentage={item.discountPercentage} discountMinPrice={item.discountMinPrice} discountPrice = {item.discountPrice} />)}
                </div>
            </div>

            <Button label={"начать тренироваться"}/>
        </div>
    );
}

