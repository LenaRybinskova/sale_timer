'use client';

export type TariffMockItem ={
    name: string;
    price: number;
    lengthInDays?: number;
    isPopular: boolean;
    isEndless: boolean;
    isDiscount: boolean;
    nonDiscountId?: string | null;
    id: string;
    ownerId?: string;
    statusId?: string | null;
    creationDateTime?: string;
    deleted?: boolean;
}


const mockData = {
    "00000000-0000-0000-0000-000000000000":{
        "f347d050-073c-4969-ae91-73411week":[ // 1 неделя
            {
                "name": "1 неделя",
                "price": 599,
                "lengthInDays": 7,
                "isPopular": false,
                "isEndless": false,
                "isDiscount": true,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-73411week",
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
                "id": "f347d050-073c-4969-ae91-73411week",
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
                "id": "f347d050-073c-4969-ae91-73411week",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
        ],
        "f347d050-073c-4969-ae91-7341month":[
            {
                "name": "1 месяц",
                "price": 799,
                "lengthInDays": 7,
                "isPopular": false,
                "isEndless": false,
                "isDiscount": true,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7341month",
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
                "id": "f347d050-073c-4969-ae91-7341month",
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
                "id": "f347d050-073c-4969-ae91-7341month",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
        ],
        "f347d050-073c-4969-ae91-7343month":[ // 1 неделя
            {
                "name": "3 месяца",
                "price": 1690,
                "lengthInDays": 7,
                "isPopular": false,
                "isEndless": false,
                "isDiscount": true,
                "nonDiscountId": null,
                "id": "f347d050-073c-4969-ae91-7343month",
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
                "id": "f347d050-073c-4969-ae91-7343month",
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
                "id": "f347d050-073c-4969-ae91-7343month",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            },
        ],
        "f347d050-073c-4969-ae91-73forever":[{
            "name": "навсегда",
            "price": 5990,
            "lengthInDays": 7,
            "isPopular": false,
            "isEndless": true,
            "isDiscount": true,
            "nonDiscountId": null,
            "id": "f347d050-073c-4969-ae91-73forever",
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
                "id": "f347d050-073c-4969-ae91-73forever",
                "ownerId": "00000000-0000-0000-0000-000000000000",
                "statusId": null,
                "creationDateTime": "2024-03-07T14:18:38.5451758+03:00",
                "deleted": false
            }, ]


    }
}

export const tariffApi = {
    getAllTariff: () =>
        Promise.resolve({mockData}),
}