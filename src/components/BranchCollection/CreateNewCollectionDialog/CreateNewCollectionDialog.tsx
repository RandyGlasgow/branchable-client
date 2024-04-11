import { Button } from '@components/core/Button';
import { DialogContent, DialogOverlay } from '@components/core/dialog/Dialog';
import * as Dialog from '@radix-ui/react-dialog';
import { PlusIcon } from '@radix-ui/react-icons';

import { CreateNewCollectionForm } from './CreatNewCollectionForm';

export const CreateNewCollectionDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="p-0 py-2">
          <PlusIcon />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <CreateNewCollectionForm />
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
