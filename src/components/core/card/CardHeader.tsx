import { FC, PropsWithChildren } from 'react';

export const CardHeader: FC<
  PropsWithChildren<{
    className?: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
  }>
> = ({ className, left, right, children }) => {
  return (
    <div
      className={`flex justify-between items-center gap-2 w-full text-nowrap text-lg font-semibold ${className}`}
    >
      {left && (
        <span className="left w-full flex items-center gap-2">{left}</span>
      )}
      {children}
      {right && (
        <span className="right w-full flex items-center justify-end gap-2">
          {right}
        </span>
      )}
    </div>
  );
};
