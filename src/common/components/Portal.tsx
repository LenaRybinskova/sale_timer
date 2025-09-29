import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    backdropClass?: string;
}

const Portal: React.FC<PortalProps> = ({
                                           children,
                                           isOpen,
                                           onClose,
                                           backdropClass = "bg-opacity"
                                       }) => {
    const [mounted, setMounted] = useState(false);

    console.log('Portal rendered:', { isOpen, mounted });

    useEffect(() => {
        console.log('Portal useEffect ');
        setMounted(true);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div
            className={`fixed inset-0 ${backdropClass} flex items-center justify-center z-50 p-4`}
            onClick={handleBackdropClick}
        >
            {children}
        </div>,
        document.body
    );
};

export default Portal;