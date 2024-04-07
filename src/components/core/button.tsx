import { FC, forwardRef } from "react";

type ButtonProps = {
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const getColor = (color: ButtonProps["color"]) => {
  switch (color) {
    case "danger":
      return "red";
    case "success":
      return "green";
    case "warning":
      return "yellow";
    case "secondary":
      return "gray";
    case "primary":
      return "blue";
    default:
      return "blue";
  }
};
export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, ...props }, ref) => {
  const color = getColor(props.color);
  return (
    <button
      ref={ref}
      {...props}
      className={`px-2 py-1 rounded shadow-inner-hard shadow-${color}-500 hover:shadow-${color}-600
      bg-${color}-600 hover:bg-${color}-700 text-${color}-50 transition-all
      focus:ring-4 ring-${color}-300 dark:ring:ring-${color}-500 outline-none ${className}`}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
