import { FC } from 'react';

import * as DialogComponents from '@radix-ui/react-dialog';

/**
 * .DialogContent {
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
 */
type DialogContentProps = {} & DialogComponents.DialogContentProps;
export const DialogContent: FC<DialogContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <DialogComponents.DialogContent
      {...props}
      className={`bg-white rounded-lg shadow-lg p-2 w-full max-w-md max-h-96 overflow-y-auto relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      {children}
    </DialogComponents.DialogContent>
  );
};

export const DialogOverlay: FC<DialogComponents.DialogOverlayProps> = (
  props
) => {
  return (
    <DialogComponents.DialogOverlay
      {...props}
      className="fixed inset-0 bg-black bg-opacity-50"
    />
  );
};
