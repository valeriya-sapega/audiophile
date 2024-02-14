interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: 'number' | 'email' | 'text' | 'tel';
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input = ({
  id,
  label,
  placeholder,
  type,
  className,
  required,
  disabled,
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className='font-bold capitalize'>
        {label}
      </label>
      <input
        disabled={disabled}
        required={required}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className={`appearance-none mt-2 py-4 px-6 w-full font-bold outline-none rounded-lg border border-primary border-opacity-30 placeholder:font-bold placeholder:text-primary placeholder:text-opacity-50 focus:border-accentOrange disabled:bg-primary disabled:bg-opacity-10`}
      />
    </div>
  );
};
export default Input;
