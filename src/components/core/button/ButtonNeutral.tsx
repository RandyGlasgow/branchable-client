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
      className={`p-2 hover:bg-zinc-200 bg-zinc-100 rounded border hover:shadow-inner hover:shadow-zinc-800/10 transition-all text-zinc-700 hover:text-zinc-800 flex gap-2 items-center disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
});

ButtonNeutral.displayName = "ButtonDefault";
