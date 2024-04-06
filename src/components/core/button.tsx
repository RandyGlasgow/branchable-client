import { FC, forwardRef } from "react";
import { combineClassNames } from "../utils/combineClassNames";

type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`p-2 rounded-sm 
      bg-emerald-400 text-emerald-950 hover:bg-emerald-500 
      dark:bg-emerald-600 dark:text-emerald-50 hover:dark:bg-emerald-700 
      focus:ring-4 ring-emerald-300 dark:ring:ring-emerald-500 outline-none ${className}`}
    >
      {children}
    </button>
  );
});
