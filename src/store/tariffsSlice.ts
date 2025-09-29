'use client';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {tariffApi} from '@/store/api';
import {transformTariffs} from '@/store/utils';

export type  TransformedTariff ={
    id: string;
    discountMinPrice?: number;
    discountPrice?: number;
    price?: number;
    foreverDiscountPrice?: number;
    foreverPrice?: number;
    discountPercentage?:number
}

export type TariffsState ={
    forever: Array<{
        type: string;
        id: string;
        foreverDiscountPrice?: number;
        foreverPrice?: number;
        discountPercentage?:number
        text?:string
    }>;
    notForever: Array<{
        type: string;
        id: string;
        discountMinPrice?: number;
        discountPrice?: number;
        price?: number;
        discountPercentage?:number
        text?:string
    }>;
}

const initialState: TariffsState = {
    forever: [],
    notForever: []
};

const tariffsSlice = createSlice({
    name: 'tariffs',
        initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTariffs.fulfilled, (state, action) => {
            return transformTariffs(action.payload);
        })
    },
        selectors: {
            selectNotForever: (state) => state.notForever,
            selectForever: (state) => state.forever
        }
}
);



export const fetchTariffs = createAsyncThunk(
    'tariffs/fetchTariffs',
    async () => {
        const response = await tariffApi.getAllTariff();
        console.log('Raw API response:', response);
        console.log('MockData:', response.mockData);
        return response.mockData;
    }
);

export const { selectNotForever, selectForever } = tariffsSlice.selectors;
export default tariffsSlice.reducer;