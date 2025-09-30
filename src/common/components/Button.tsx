'use client';

type Props = {
    label: string,
    className?:string

}

export default function Button({label, className}: Props) {

    return (
        <button className={`items-center justify-center bg-primary text-foreground-secondary pt-5 px-[42px] pb-[22px] font-medium text-[20px] leading-[100%]  rounded-[60px] cursor-pointer ${className}`}>{label}</button>
    );
}
