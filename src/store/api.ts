'use client';
export type Tariff ={
    name: string;
    price: number;
    minPrice?:number
    originalPrice:number,
    discountPercent:number,
    lengthInDays: number;
    isPopular: boolean;
    isEndless: boolean;
    isDiscount: boolean;
    nonDiscountId: string | null;
    id: string;
    ownerId: string;
    statusId: string | null;
    creationDateTime: string;
    deleted: boolean;
}

export type TariffMockType ={
    name: string;
    price: number;
    lengthInDays: number;
    isPopular: boolean;
    isEndless: boolean;
    isDiscount: boolean;
    nonDiscountId: string | null;
    id: string;
    ownerId: string;
    statusId: string | null;
    creationDateTime: string;
    deleted: boolean;
}


const mockData = {
    "00000000-0000-0000-0000-000000000000":{
        "f347d050-073c-4969-ae91-7341111111":[ // 1 неделя
            {
                "name": "1 неделя",
                "price": 599,
                "lengthInDays": 7,
                "isPopular": false,
                "isEndless": false,
                "isDiscount": true,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7341111111",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
            {
                "name": "1 неделя",
                "price": 699,
                "lengthInDays": 7,
                "isPopular": true,
                "isEndless": false,
                "isDiscount": false,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7341111111",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
            {
                "name": "1 неделя",
                "price": 999,
                "lengthInDays": 7,
                "isPopular": true,
                "isEndless": false,
                "isDiscount": true,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7341111111",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
            /*{
                "name": "1 неделя",
                "price": 5990,
                "lengthInDays": 7,
                "isPopular": false,
                "isEndless": true,
                "isDiscount": true,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7341111111",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
            {
                "name": "1 неделя",
                "price": 18990,
                "lengthInDays": 7,
                "isPopular": false,
                "isEndless": true,
                "isDiscount": false,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7341111111",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            }*/


        ],
        "f347d050-073c-4969-ae91-7342222222":[
            {
                "name": "1 месяц",
                "price": 799,
                "lengthInDays": 7,
                "isPopular": false,
                "isEndless": false,
                "isDiscount": true,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7342222222",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
            {
                "name": "1 месяц",
                "price": 999,
                "lengthInDays": 7,
                "isPopular": true,
                "isEndless": false,
                "isDiscount": false,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7342222222",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
            {
                "name": "1 месяц",
                "price": 1690,
                "lengthInDays": 7,
                "isPopular": true,
                "isEndless": false,
                "isDiscount": true,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7342222222",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
        ],
        "f347d050-073c-4969-ae91-7343333333":[ // 1 неделя
            {
                "name": "3 месяца",
                "price": 1690,
                "lengthInDays": 7,
                "isPopular": false,
                "isEndless": false,
                "isDiscount": true,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7343333333",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
            {
                "name": "3 месяца",
                "price": 2990,
                "lengthInDays": 7,
                "isPopular": true,
                "isEndless": false,
                "isDiscount": false,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7343333333",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
            {
                "name": "3 месяца",
                "price": 5990,
                "lengthInDays": 7,
                "isPopular": true,
                "isEndless": false,
                "isDiscount": true,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7343333333",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
        ],
        "f347d050-073c-4969-ae91-7344444444":[{
            "name": "навсегда",
            "price": 5990,
            "lengthInDays": 7,
            "isPopular": false,
            "isEndless": true,
            "isDiscount": true,
            "nonDiscountId": null,
            "id": "f347d050-073c-4969-ae91-7344444444",
            "ownerId": "00000000-0000-0000-0000-000000000000",
            "statusId": null,
            "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
            "deleted": false
        },
            {
                "name": "навсегда",
                "price": 18990,
                "lengthInDays": 7,
                "isPopular": true,
                "isEndless": true,
                "isDiscount": false,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7344444444",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            }, ]


    }
}





const mockTariffs: Tariff[] = [
    {
        "name": "1 неделя",
        "minPrice":599,
        "price": 699,
        "originalPrice": 999,
        "discountPercent":30,
        "lengthInDays": 7,
        "isPopular": true,
        "isEndless": false,
        "isDiscount": false,
        "nonDiscountId": null,
        "id": "f347d050-073c-4969-ae91-7341111111",
        "ownerId": "00000000-0000-0000-0000-000000000000",
        "statusId": null,
        "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
        "deleted": false
    },
    {
        "name": "1 месяц",
        "price": 999,
        "minPrice":799,
        "originalPrice": 1690,
        "discountPercent":40,
        "lengthInDays": 30,
        "isPopular": false,
        "isEndless": false,
        "isDiscount": true,
        "nonDiscountId": "f347d050-073c-4969-ae91-7346f935cf71",
        "id": "f347d050-073c-4969-ae91-7346f935cf72",
        "ownerId": "00000000-0000-0000-0000-000000000000",
        "statusId": null,
        "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
        "deleted": false
    },
    {
        "name": "3 месяца",
        "price": 2990,
        "minPrice":1690,
        "originalPrice": 5990,
        "discountPercent":50,
        "lengthInDays": 7,
        "isPopular": true,
        "isEndless": false,
        "isDiscount": false,
        "nonDiscountId": null,
        "id": "f347d050-073c-4969-ae91-7346f935cf72",
        "ownerId": "00000000-0000-0000-0000-000000000000",
        "statusId": null,
        "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
        "deleted": false
    },
    {
        "name": "Навсегда",
        "price": 5990,
        "originalPrice": 18990,
        "discountPercent":70,
        "lengthInDays": 0,
        "isPopular": false,
        "isEndless": true,
        "isDiscount": true,
        "nonDiscountId": "f347d050-073c-4969-ae91-7346f935cf73",
        "id": "f347d050-073c-4969-ae91-7346f935cf74",
        "ownerId": "00000000-0000-0000-0000-000000000000",
        "statusId": null,
        "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
        "deleted": false
    }
];

export const tariffApi = {
    getAllTariff: () =>
        Promise.resolve({mockTariffs}),
}