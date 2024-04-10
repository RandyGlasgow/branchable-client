import { FC, PropsWithChildren } from 'react';

export const CardHeader: FC<{
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}> = ({ className, left, right }) => {
  return (
    <div className={`flex justify-between gap-2 ${className}`}>
      <span className="left w-full flex items-center gap-2">{left}</span>
      <span className="right w-full flex items-center justify-end gap-2">
        {right}
      </span>
    </div>
  );
};
