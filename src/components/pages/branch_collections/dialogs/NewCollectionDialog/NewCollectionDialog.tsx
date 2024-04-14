import { Button } from '@components/core/button/Button';
import { CardHeader } from '@components/core/card/CardHeader';
import { DialogContent, DialogOverlay } from '@components/core/dialog/Dialog';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons';

import { CreateNewCollectionForm } from './NewCollectionForm';

export const CreateNewCollectionDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          className="px-2 p-2 py-2 flex justify-center gap-2"
          title="create new collection"
        >
          <span className="hidden md:block">New Collection</span>
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
