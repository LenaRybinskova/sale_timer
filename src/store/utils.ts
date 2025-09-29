export const transformTariffs = (mockData: any) => {
    if (!mockData || typeof mockData !== 'object') {
        console.error('Invalid data format:', mockData);
        return { forever: [], notForever: [] };
    }

    const result = {
        forever: [] as any[],
        notForever: [] as any[]
    };


    const calculateDiscountPercentage = (originalPrice: number, discountPrice: number): number => {
        if (!originalPrice || !discountPrice || originalPrice <= discountPrice) {
            return 0;
        }
        return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
    };

    const getTariffText = (type: string): string => {
        switch (type) {
            case '1 неделя':
                return 'Чтобы просто начать 👍🏻';
            case '1 месяц':
                return 'Привести тело впорядок 💪🏻';
            case '3 месяца':
                return 'Изменить образ жизни 🔥';
            case 'навсегда':
                return 'Всегда быть в форме и поддерживать своё здоровье ⭐️';
            default:
                return '';
        }
    };

    Object.entries(mockData).forEach(([ownerId, tariffsData]) => {
        if (!tariffsData || typeof tariffsData !== 'object') {
            return;
        }

        Object.entries(tariffsData as { [key: string]: any[] }).forEach(([tariffId, items]) => {
            if (!Array.isArray(items) || items.length === 0) {
                return;
            }

            const firstItem = items[0];
            if (!firstItem?.name) {
                return;
            }

            const name = firstItem.name.toLowerCase();

            if (name.includes('навсегда') || name.includes('forever')) {
                const transformed: any = {
                    type: 'навсегда',
                    id: tariffId,
                    text: getTariffText('навсегда') // добавляем текст
                };

                items.forEach(item => {
                    if (item.isDiscount === true) {
                        transformed.foreverDiscountPrice = item.price;
                    } else if (item.isDiscount === false) {
                        transformed.foreverPrice = item.price;
                    }
                });

                if (transformed.foreverPrice && transformed.foreverDiscountPrice) {
                    transformed.discountPercentage = calculateDiscountPercentage(
                        transformed.foreverPrice,
                        transformed.foreverDiscountPrice
                    );
                }

                result.forever.push(transformed);
            }
            else {
                let type = '';
                if (name.includes('недел') || name.includes('week')) {
                    type = '1 неделя';
                } else if (name.includes('1 месяц') || name.includes('1 month')) {
                    type = '1 месяц';
                } else if (name.includes('3 месяц') || name.includes('3 month')) {
                    type = '3 месяца';
                } else {
                    console.warn('Unknown tariff name:', firstItem.name);
                    return;
                }

                const transformed: any = {
                    type,
                    id: tariffId,
                    text: getTariffText(type)
                };

                items.forEach(item => {
                    if (item.isPopular === false && item.isDiscount === true) {
                        transformed.discountMinPrice = item.price;
                    } else if (item.isPopular === true && item.isDiscount === false) {
                        transformed.discountPrice = item.price;
                    } else if (item.isPopular === true && item.isDiscount === true) {
                        transformed.price = item.price;
                    }
                });

                // Расчет скидки для обычных тарифов (между discountPrice и price)
                if (transformed.price && transformed.discountPrice) {
                    transformed.discountPercentage = calculateDiscountPercentage(
                        transformed.price,
                        transformed.discountPrice
                    );
                }

                result.notForever.push(transformed);
            }
        });
    });

    return result;
};