interface RadioButtonProps {
  id: string;
  label: string;
  handleChange?: () => void;
  className?: string;
  value: 'cash' | 'emoney';
  checked: boolean;
}

const RadioButton = ({
  id,
  label,
  className,
  handleChange,
  value,
  checked,
}: RadioButtonProps) => {
  return (
    <label
      htmlFor={id}
      className={`${className} flex flex-row items-center mt-2 py-4 px-6 w-full font-bold outline-none rounded-lg border border-primary border-opacity-30 focus:border-accentOrange`}
    >
      <input
        value={value}
        checked={checked}
        onChange={handleChange}
        id={id}
        name='paymentMethod'
        type='radio'
        className='appearance-none w-4 h-4 rounded-full bg-white border-accentOrange border-2  focus:ring-accentOrangeHover focus:ring-2 checked:bg-accentOrangeHover checked:border-accentOrange   focus:bg-accentOrangeHover'
      />
      <span className='ml-2'>{label}</span>
    </label>
  );
};
export default RadioButton;
