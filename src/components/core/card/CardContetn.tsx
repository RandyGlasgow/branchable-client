import { FC, PropsWithChildren } from 'react';

export const CardContent: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
