import React, { FC, PropsWithChildren } from 'react';

type CardProps = {} & React.HTMLAttributes<HTMLDivElement>;
export const Card: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`bg-white shadow-md rounded-lg w-full ${className}`}
    >
      {children}
    </div>
  );
};
