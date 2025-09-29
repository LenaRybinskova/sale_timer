import {ElementType, ReactNode} from 'react';

interface TextProps {
    children: ReactNode;
    as?: ElementType;
    className?: string;
}

const Text = ({children, as: Tag = 'h3', className = ''}:TextProps) => {
    return (
        <Tag className={`font-bold text-2xl leading-relaxed uppercase font-family-third flex gap-2 mb-[35px] ${className}`}>
            {children}
        </Tag>
    );
};

export default Text;