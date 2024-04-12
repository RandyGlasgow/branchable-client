import { Button } from '@components/core/Button';
import { CardHeader } from '@components/core/card/CardHeader';
import { DialogContent, DialogOverlay } from '@components/core/dialog/Dialog';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons';

import { CreateNewCollectionForm } from './CreatNewCollectionForm';

export const CreateNewCollectionDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="p-0 py-2 ">
          <PlusIcon />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <CardHeader
              className="pb-2 mb-4"
              right={
                <Dialog.Close asChild id="dialog-close">
                  <button className="p-2 rounded-full hover:bg-zinc-100">
                    <Cross1Icon />
                  </button>
                </Dialog.Close>
              }
            >
              Create New Collection
            </CardHeader>
            <CreateNewCollectionForm />
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
