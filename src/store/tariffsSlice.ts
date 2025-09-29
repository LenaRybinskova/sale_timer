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
}

const tariffsSlice = createSlice({
    name: 'tariffs',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTariffs.fulfilled, (state, action) => {
            return transformTariffs(action.payload);
        })
    }
});



export const fetchTariffs = createAsyncThunk(
    'tariffs/fetchTariffs',
    async () => {
        const response = await tariffApi.getAllTariff();
        console.log('Raw API response:', response);
        console.log('MockData:', response.mockData);
        return response.mockData;
    }
);

export default tariffsSlice.reducer;