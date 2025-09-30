import {Ref, SVGProps, forwardRef, memo} from 'react';

const CheckIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4.8" fill="#01B9C5"/>
        <path
            d="M6 12.7579L10.5692 16.8L19.2 7.2"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
const ForwardRef = forwardRef(CheckIcon);
const Memo = memo(ForwardRef);

export default Memo;
