import { FC } from 'react';

type ChipProps = {} & React.HTMLAttributes<HTMLSpanElement>;
export const Chip: FC<ChipProps> = ({ children, className, ...props }) => {
  return (
    <span
      className={`p-1 px-2 rounded-full bg-zinc-400 text-zinc-50 text-sm ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
