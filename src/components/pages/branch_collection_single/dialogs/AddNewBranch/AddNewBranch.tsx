"use client";
import { useQuery } from 'convex/react';
import { FC } from 'react';

import { Button } from '@components/core/button/Button';
import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { CardHeader } from '@components/core/card/CardHeader';
import { DialogContent, DialogOverlay } from '@components/core/dialog/Dialog';
import { useUserId } from '@hooks/useStoreUserEffect';
import * as Dialog from '@radix-ui/react-dialog';
import { GearIcon, PlusIcon } from '@radix-ui/react-icons';

import { Doc } from '../../../../../../convex/_generated/dataModel';
import { AddNewBranchForm } from './AddNewBranchForm';

export const AddNewBranch: FC<{
  collection: Doc<"branch_collection">;
}> = ({ collection }) => {
  const userId = useUserId();
  if (userId !== collection?.owner) {
    return null;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="col-span-full">
        <Card>
          <CardContent>
            <CardHeader
              right={
                <Button>
                  <PlusIcon className="scale-150" />
                </Button>
              }
            >
              <h3 className="flex items-center gap-2">Add Branch</h3>
            </CardHeader>
          </CardContent>
        </Card>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <AddNewBranchForm collection={collection} />
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
