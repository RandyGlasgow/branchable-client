import { FC, forwardRef } from "react";

type ButtonProps = {
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, color, ...props }, ref) => {
  switch (color) {
    case "danger":
      return (
        <button
          ref={ref}
          {...props}
          className={`px-2 py-1 rounded shadow-inner-hard shadow-red-500 hover:shadow-red-600
        bg-red-600 hover:bg-red-700 text-red-50 transition-all`}
        >
          {children}
        </button>
      );
    case "success":
      return (
        <button
          ref={ref}
          {...props}
          className={`px-2 py-1 rounded shadow-inner-hard shadow-green-500 hover:shadow-green-600
        bg-green-600 hover:bg-green-700 text-green-50 transition-all`}
        >
          {children}
        </button>
      );
    case "warning":
      return (
        <button
          ref={ref}
          {...props}
          className={`px-2 py-1 rounded shadow-inner-hard shadow-yellow-500 hover:shadow-yellow-600
        bg-yellow-600 hover:bg-yellow-700 text-yellow-50 transition-all`}
        >
          {children}
        </button>
      );
    case "secondary":
      return (
        <button
          ref={ref}
          {...props}
          className={`px-2 py-1 rounded shadow-inner-hard shadow-zinc-500 hover:shadow-zinc-600
        bg-zinc-600 hover:bg-zinc-700 text-zinc-50 transition-all`}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          ref={ref}
          {...props}
          className={`px-2 py-1 rounded shadow-inner-hard shadow-blue-500 hover:shadow-blue-800
        bg-blue-600 hover:bg-blue-700 text-blue-50 transition-all`}
        >
          {children}
        </button>
      );
  }
});

Button.displayName = "Button";

export const BlankButton: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, "color">
>(({ className, children, ...props }, ref) => {
  return (
    <button ref={ref} {...props} className={className}>
      {children}
    </button>
  );
});

BlankButton.displayName = "BlankButton";
