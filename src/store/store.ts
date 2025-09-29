'use client';
import {configureStore} from '@reduxjs/toolkit';
import tariffsSlice from './tariffsSlice';

export const store = configureStore({
    reducer: {
        tariffs: tariffsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
