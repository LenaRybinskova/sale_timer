'use client';
import Main from '../common/components/Main';
import {useTimerContext} from '@/common/utils/TimerProvider';
import {useEffect, useState} from 'react';
import Portal from '@/common/components/Portal';
import Popup from '@/common/components/Popup';
import {useSelector} from 'react-redux';
import {selectNotForever} from '@/store/tariffsSlice';

export default function Home() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const MonthlyTariffs = useSelector(selectNotForever);
    const context = useTimerContext();

    if (!context) return null;
    useEffect(() => {
        if (context.endTime) {
            setIsOpenModal(true);
        }
    }, [context.endTime]);

    const hanldeCloseModal = (isOpen: boolean) => {
        setIsOpenModal(isOpen)
    }

    return (
        <>
            <Main/>
            <Portal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} backdropClass="bg-black/50">
                <Popup items={MonthlyTariffs} callbackClose={hanldeCloseModal}/>
            </Portal>
        </>
    );
}