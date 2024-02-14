import React, { ForwardedRef } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: 'number' | 'email' | 'text' | 'tel';
  className?: string;
  required?: boolean;
  disabled?: boolean;
  validationSchema?: any;
}

const Input = React.forwardRef(
  (
    {
      id,
      label,
      placeholder,
      type,
      className,
      required,
      disabled,
      validationSchema,
    }: InputProps,
    _ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { register } = useFormContext();

    return (
      <div className={className}>
        <label htmlFor={id} className='font-bold capitalize'>
          {label}
        </label>
        <input
          {...register(id, validationSchema)}
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
  }
);
export default Input;
