'use client';
import './globals.css';
import Header from '@/common/components/Header';
import {TimerProvider} from '@/common/utils/TimerProvider';
import {Provider} from 'react-redux';
import {store} from '@/store/store';

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={'flex flex-col w-full'}>
        <Provider store={store}>
          <TimerProvider>
              <Header/>
              {children}
          </TimerProvider>
        </Provider>
        </body>
        </html>
    );
}