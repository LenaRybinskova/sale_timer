import {Ref, SVGProps, forwardRef, memo} from 'react';

const DotIconSVG = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} >
        <circle cx="2.50366" cy="2.5" r="2.5" fill="#01B9C5"/>
    </svg>
);
const ForwardRef = forwardRef(DotIconSVG);
const Memo = memo(ForwardRef);

export default Memo;


/*
<svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
>
    <g clipPath={'url(#arrow-ios-back-outline_svg__a)'}>
        <path
            d={
                'M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64'
            }
            fill={'currentColor'}
        />
    </g>
    <defs>
        <clipPath id={'arrow-ios-back-outline_svg__a'}>
            <path d={'M0 0h24v24H0z'} fill={'#fff'}/>
        </clipPath>
    </defs>
</svg>*/
