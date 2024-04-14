import { DropdownMenuContent, DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';

type DropdownContentProps = DropdownMenuContentProps & {};

export const DropdownContent: React.FC<DropdownContentProps> = ({
  className,
  ...props
}) => {
  return (
    <DropdownMenuContent
      {...props}
      className={`bg-zinc-50 border border-gray-200 shadow-lg rounded-md p-1 ${className}`}
    >
      {props.children}
    </DropdownMenuContent>
  );
};
