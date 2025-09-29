'use client';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Tariff, tariffApi} from '@/store/api';


const tariffsSlice = createSlice({
    name: 'tariffs',
    initialState:[] as Tariff[],
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchTariffs.fulfilled, (state, action) => {
            return action.payload.mockTariffs
        })
    }});

export const fetchTariffs = createAsyncThunk(
    'tariffs/fetchTariffs',
    async () => {
        return await tariffApi.getAllTariff();
    }
);

export default tariffsSlice.reducer;