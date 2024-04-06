import { FC, forwardRef } from "react";

type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`px-2 py-1 rounded 
      bg-blue-600 hover:bg-blue-700 text-blue-50 transition-colors
      focus:ring-4 ring-blue-300 dark:ring:ring-blue-500 outline-none ${className}`}
    >
      {children}
    </button>
  );
});
