
export const transformTariffs = (mockData: any) => {
    if (!mockData || typeof mockData !== 'object') {
        console.error('Invalid data format:', mockData);
        return {};
    }

    const result: { [ownerId: string]: { [key: string]: any } } = {};

    Object.entries(mockData).forEach(([ownerId, tariffsData]) => {
        if (!tariffsData || typeof tariffsData !== 'object') {
            return;
        }

        result[ownerId] = {};

        Object.entries(tariffsData as { [key: string]: any[] }).forEach(([tariffId, items]) => {
            if (!Array.isArray(items) || items.length === 0) {
                return;
            }

            const firstItem = items[0];
            if (!firstItem?.name) {
                return;
            }

            let tariffKey: string;
            const name = firstItem.name.toLowerCase();

            if (name.includes('недел') || name.includes('week')) tariffKey = 'OneWeek';
            else if (name.includes('1 месяц') || name.includes('1 month')) tariffKey = 'OneMonth';
            else if (name.includes('3 месяц') || name.includes('3 month')) tariffKey = 'ThreeMonth';
            else if (name.includes('навсегда') || name.includes('forever')) tariffKey = 'forever';
            else {
                console.warn('Unknown tariff name:', firstItem.name);
                return;
            }


            if (!firstItem.isEndless) {
                const transformed: any = { id: tariffId };
                items.forEach(item => {
                    if (item.isPopular === false && item.isDiscount === true) {
                        transformed.discountMinPrice = item.price;
                    } else if (item.isPopular === true && item.isDiscount === false) {
                        transformed.discountPrice = item.price;
                    } else if (item.isPopular === true && item.isDiscount === true) {
                        transformed.price = item.price;
                    }
                });
                result[ownerId][tariffKey] = transformed;
            }

            else {
                const transformed: any = { id: tariffId };
                items.forEach(item => {
                    if (item.isDiscount === true) {
                        transformed.foreverDiscountPrice = item.price;
                    } else if (item.isDiscount === false) {
                        transformed.foreverPrice = item.price;
                    }
                });

                result[ownerId][tariffKey] = transformed;
            }
        });
    });

    console.log('Transformed tariffs:', result);
    return result;
};