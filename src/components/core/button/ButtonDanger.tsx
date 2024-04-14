import { FC, forwardRef } from 'react';

import { ButtonProps } from './Button.types';

export const ButtonDanger: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`p-2 hover:bg-red-500 bg-red-200 rounded hover:shadow-inner shadow-inner-hard transition-all text-red-700 hover:text-red-50 flex gap-2 items-center ${className}`}
    >
      {children}
    </button>
  );
});

ButtonDanger.displayName = "ButtonDanger";
