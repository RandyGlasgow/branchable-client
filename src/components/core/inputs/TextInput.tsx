import { FC } from 'react';

type TextInputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;
export const TextInput: FC<TextInputProps> = ({ className, ...props }) => (
  <input
    id={props.placeholder}
    type="text"
    className={`w-full p-1 shadow-inner bg-zinc-100 rounded focus:ring-2 focus:ring-primary focus:outline-none ${className}`}
    {...props}
  />
);
