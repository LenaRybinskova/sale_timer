'use client';
import SaleLabelSVG from '../../../public/assets/icons/SaleLabelSVG';

type Props = {
    label: string,
    className?:string
}

export default function Button({label, className}: Props) {


    return (
        <button className={`${className} items-center justify-center bg-primary text-foreground-secondary px-[100px] py-[28px] font-medium text-[20px] leading-[100%] uppercase rounded-[60px] cursor-pointer`}>{label}</button>
    );
}
