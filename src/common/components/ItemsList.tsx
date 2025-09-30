'use client';
import React, { useState, useCallback } from 'react';
import {ItemMemo} from '@/common/components/Item';
import {ForeverTariffType, MonthlyTariffType} from '@/store/tariffsSlice';

export const ItemsList = React.memo(({monthlyTariffs, foreverTariffs, criticalTime, endTime}: {
    monthlyTariffs: MonthlyTariffType[],
    foreverTariffs: ForeverTariffType[],
    criticalTime: boolean,
    endTime: boolean
}) => {
    const [selectItemId, setSelectItemId] = useState<string | ''>('');

    const selectItemHandler = useCallback((itemId: string) => {
        setSelectItemId(itemId);
    }, []);

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

ItemsList.displayName = 'ItemsList';