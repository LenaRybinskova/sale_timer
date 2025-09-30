import {Ref, SVGProps, forwardRef, memo} from 'react';

const CloseSVG = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18 6L6 18"
            stroke="#CED1D8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6 6L18 18"
            stroke="#CED1D8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
const ForwardRef = forwardRef(CloseSVG);
const Memo = memo(ForwardRef);

export default Memo;
