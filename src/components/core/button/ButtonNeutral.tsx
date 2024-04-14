import { FC, forwardRef } from 'react';

import { ButtonProps } from './Button.types';

export const ButtonNeutral: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`p-2 hover:bg-zinc-500 bg-zinc-200 rounded hover:shadow-inner shadow-inner-hard transition-all text-zinc-700 hover:text-zinc-50 flex gap-2 items-center ${className}`}
    >
      {children}
    </button>
  );
});

ButtonNeutral.displayName = "ButtonDefault";
