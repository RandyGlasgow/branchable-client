import { FC, forwardRef } from 'react';

import { ButtonProps } from './Button.types';

export const ButtonDefault: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`p-2 hover:bg-blue-500 bg-blue-400 rounded hover:shadow-inner shadow-inner-hard transition-all text-blue-50 hover:text-blue-50 flex gap-2 items-center ${className}`}
    >
      {children}
    </button>
  );
});

ButtonDefault.displayName = "ButtonDefault";