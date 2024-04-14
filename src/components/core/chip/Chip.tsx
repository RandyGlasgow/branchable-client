import { FC } from 'react';

type ChipProps = {} & React.HTMLAttributes<HTMLSpanElement>;
export const Chip: FC<ChipProps> = ({ children, className, ...props }) => {
  return (
    <span
      {...props}
      className={`p-1 px-2 rounded-full text-sm font-normal disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </span>
  );
};
