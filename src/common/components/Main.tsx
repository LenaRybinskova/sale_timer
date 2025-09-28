'use client';
import Image from 'next/image';
import tgBe2Card from './../../../public/assets/image/to_be_2_card.png';
import Item from '@/common/components/Item';
import Button from '@/common/components/Button';
import {useState} from 'react';
import CheckIcon from '../../../public/assets/icons/CheckIcon';


export default function Main() {

    const [isChecked, setIsChecked] = useState(false)

    return (
        <main className={'flex w-full p-[26px] px-[172px]'}>
            <div className={'flex items-center justify-center w-full flex-col'}>
                <h1 className={'flex items-center justify-center font-bold text-[40px] leading-[110%] tracking-[0.01em] uppercase font-family-third mb-[108px]'}>выберите
                    подходящий тарифный план</h1>
                <section className={'flex items-start justify-between  w-full'}>

                    <Image src={tgBe2Card} alt={'to_be'} width={434} height={715} priority/>
                    <figure className={'flex flex-col items-center justify-center gap-[8px] w-full'}>
                        <div className={'flex items-center justify-center gap-[8px] mb-9 w-full'}>
                            <Item/>
                            <Item/>
                            <Item/>
                        </div>
                        <Item className={'w-full mb-[11px]'} variant={'horizontally'}/>
                        <p className={'w-full text-text font-medium text-[18px] leading-[130%] mb-[27px]'}>Следуя плану
                            на 3
                            месяца, люди получают в 2 раза лучший
                            результат, чем за 1 месяц</p>


                        {/*                        <div className={"flex items-center justify-start w-full gap-[12px] mb-[50px]"}>
                            <input type={'checkbox'} className={"w-[24px] h-[24px] rounded-[5px] accent-secondary cursor-pointer transition-all duration-300 ease-in-out"}/>
                            <label  className={"text-text-second font-normal text-base leading-[110%]"}>
                                Я соглашаюсь с <a href="/rules" className="text-text-privacy hover:underline">Правилами сервиса</a> и условиями<br />
                                <a href="/offer" className="text-text-privacy hover:underline"> Публичной оферты</a>.
                            </label >
                        </div>*/}


                        {/*  <div className={'flex items-center justify-start w-full gap-[12px] mb-[50px]'}>
                            <button className={` flex items-center justify-center w-6 h-6 rounded-md border-2 transition-all duration-200 ${isChecked ? 'bg-teal-500 border-teal-500' : 'bg-white border-gray-300 hover:border-teal-400'}`}
                                    aria-checked={isChecked} role="checkbox">

                            </button>
                            <label className={'text-text-second font-normal text-base leading-[110%]'}>
                                Я соглашаюсь с <a href="/rules" className="text-text-privacy hover:underline">Правилами
                                сервиса</a> и условиями<br/>
                                <a href="/offer" className="text-text-privacy hover:underline"> Публичной оферты</a>.
                            </label>
                        </div>*/}

                        <div className={'flex items-center justify-start w-full gap-[12px] mb-[50px]'}>
                            <button
                                className={`relative flex items-center justify-center w-6 h-6 rounded-md border-2 transition-all duration-200 cursor-pointer ${isChecked ? 'bg-teal-500 border-teal-500' : 'bg-white border-gray-300 hover:border-teal-400'}`}
                                aria-checked={isChecked}
                                role="checkbox"
                                onClick={() => setIsChecked(!isChecked)}>
                                {isChecked && (<CheckIcon className="w-4 h-4 text-white"/>)}
                            </button>
                            <label className={'text-text-second font-normal text-base leading-[110%]'}>
                                Я соглашаюсь с <a href="/rules" className="text-text-privacy hover:underline">Правилами
                                сервиса</a> и условиями<br/>
                                <a href="/offer" className="text-text-privacy hover:underline"> Публичной оферты</a>.
                            </label>
                        </div>

                        <Button label={'купить'} className={'flex items-center justify-start self-start mb-[30px]'}/>
                        <p className={'flex items-center justify-start self-start text-text-second'}>
                            Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств
                            по
                            истечению купленного периода. Дальнейшие списания по тарифам участвующим в акции
                            осуществляются по полной стоимости согласно оферте.
                        </p>
                    </figure>

                </section>

            </div>


        </main>
    );
}

