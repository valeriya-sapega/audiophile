import { VariantProps, cva } from 'class-variance-authority';
import clsx, { ClassValue } from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  className,

  ...props
}) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant, className }))}>
      {children}
    </button>
  );
};

export default Button;

const buttonVariants = cva(
  'text-center text-sm py-4 px-8 font-bold tracking-wide',
  {
    variants: {
      variant: {
        primary:
          'uppercase text-white bg-accentOrange hover:bg-accentOrangeHover',
        secondary:
          'uppercase bg-white border border-black text-black hover:bg-black hover:text-white hover:border-white',
        link: 'text-black text-opacity-60 hover:text-accentOrange hover:underline hover:underline-offset-1',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
