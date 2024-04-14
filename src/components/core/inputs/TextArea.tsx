import { FC } from 'react';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: FC<TextAreaProps> = ({ className, ...props }) => (
  <textarea
    className={`w-full p-1 shadow-inner bg-zinc-100 rounded focus:ring-2 focus:ring-primary focus:outline-none ${className}`}
    {...props}
  />
);
