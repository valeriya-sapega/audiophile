interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: 'number' | 'email' | 'text' | 'tel';
  handleChange?: () => void;
  className?: string;
}

const Input = ({
  id,
  label,
  placeholder,
  type,
  className,
  handleChange,
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className='font-bold capitalize'>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className={`appearance-none mt-2 py-4 px-6 w-full font-bold outline-none rounded-lg border border-primary border-opacity-30 placeholder:font-bold placeholder:text-primary placeholder:text-opacity-50 focus:border-accentOrange `}
        onChange={handleChange}
      />
    </div>
  );
};
export default Input;
