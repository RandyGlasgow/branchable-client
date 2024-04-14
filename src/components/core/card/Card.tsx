import { FC, PropsWithChildren } from 'react';

export const Card: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div className={`bg-white shadow-md rounded-lg w-full ${className}`}>
      {children}
    </div>
  );
};
