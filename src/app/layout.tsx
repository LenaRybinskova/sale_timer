import './globals.css';
import Header from '@/common/components/Header';
import Main from '@/common/components/Main';

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {


    return (
        <html lang="en" suppressHydrationWarning>
        <body className={'flex  flex-col w-full'}>
        <Header/>
        <Main/>
        </body>
        </html>
    );
}