'use client';
import React from 'react';
import {ItemMemo} from '@/common/components/Item';

export const TariffList = React.memo(({
                                          monthlyTariffs,
                                          foreverTariffs,
                                          selectItemId,
                                          criticalTime,
                                          endTime,
                                          selectItemHandler
                                      }: {
    monthlyTariffs: any[],
    foreverTariffs: any[],
    selectItemId: string,
    criticalTime: boolean,
    endTime: boolean,
    selectItemHandler: (id: string) => void
}) => {
    return (
        <>
            <div className={'flex items-stretch justify-center gap-[8px] mb-9 w-full h-[260px]'}>
                {monthlyTariffs.map((tariff) => (
                    <ItemMemo
                        key={tariff.id}
                        id={tariff.id}
                        name={tariff.type}
                        discountMinPrice={tariff.discountMinPrice}
                        discountPrice={tariff.discountPrice}
                        price={tariff.price}
                        discountPercentage={tariff.discountPercentage}
                        text={tariff.text}
                        className="flex-1"
                        criticalTime={criticalTime}
                        endTime={endTime}
                        selected={selectItemId === tariff.id}
                        callbackSelectItem={selectItemHandler}
                    />
                ))}
            </div>

            {foreverTariffs.map((tariff) => (
                <ItemMemo
                    key={tariff.id}
                    id={tariff.id}
                    className={'w-full mb-[11px]'}
                    variant={'horizontally'}
                    discountPrice={tariff.foreverDiscountPrice}
                    price={tariff.foreverPrice}
                    name={tariff.type}
                    discountPercentage={tariff.discountPercentage}
                    text={tariff.text}
                    endTime={endTime}
                    selected={selectItemId === tariff.id}
                    callbackSelectItem={selectItemHandler}
                />
            ))}
        </>
    );
});

TariffList.displayName = 'TariffList';