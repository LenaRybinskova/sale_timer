import './globals.css';
import Header from '@/common/components/Header';
import {TimerProvider} from '@/common/utils/TimerProvider';

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={'flex flex-col w-full'}>
          <TimerProvider>
              <Header/>
              {children}
          </TimerProvider>
        </body>
        </html>
    );
}