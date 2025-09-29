interface CheckboxProps {
    checked?: boolean;
    onChange?: () => void;
    className?: string;
}

const Checkbox = ({ checked, onChange, className = "" }: CheckboxProps) => {
    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            onClick={onChange}
            className={`
        relative flex items-center justify-center
        w-[22px] h-[22px] rounded-full border border-gray-400
        transition-all duration-200 cursor-pointer
        bg-transparent
        hover:border-gray-600
        ${checked ? 'bg-gray-400' : 'bg-transparent'}
        ${className}
      `}
        >
            {checked && (
                <div className="w-2 h-2 bg-white rounded-full" />
            )}
        </button>
    );
};