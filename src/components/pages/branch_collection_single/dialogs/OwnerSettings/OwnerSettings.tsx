"use client";
import { useQuery } from 'convex/react';
import { FC } from 'react';

import { Button } from '@components/core/button/Button';
import { CardContent } from '@components/core/card/CardContetn';
import { DialogContent, DialogOverlay } from '@components/core/dialog/Dialog';
import { useUserId } from '@hooks/useStoreUserEffect';
import * as Dialog from '@radix-ui/react-dialog';
import { GearIcon } from '@radix-ui/react-icons';

import { Doc } from '../../../../../../convex/_generated/dataModel';
import { OwnerSettingsForm } from './OwnerSettingsForm';

export const OwnerSettings: FC<{
  collection: Doc<"branch_collection">;
}> = ({ collection }) => {
  const userId = useUserId();
  if (userId !== collection?.owner) {
    return null;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <GearIcon />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <CardContent>
              <h4>Owner Settings</h4>
              <OwnerSettingsForm collection={collection} />
            </CardContent>
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
