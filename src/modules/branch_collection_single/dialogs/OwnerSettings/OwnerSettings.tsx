import { useQuery } from 'convex/react';
import { FC } from 'react';

import { Button } from '@components/button/Button';
import { CardContent } from '@components/card/CardContetn';
import { DialogContent, DialogOverlay } from '@components/dialog/Dialog';
import { useUserId } from '@hooks/useStoreUserEffect';
import * as Dialog from '@radix-ui/react-dialog';
import { GearIcon } from '@radix-ui/react-icons';

import { api } from '../../../../../convex/_generated/api';
import { Id } from '../../../../../convex/_generated/dataModel';
import { OwnerSettingsForm } from './OwnerSettingsForm';

export const OwnerSettings: FC<{
  id: Id<"branch_collection">;
}> = ({ id }) => {
  const userId = useUserId();
  const branchCollection = useQuery(
    api.branchCollection.get_branch_collection,
    id && userId ? { branchCollectionId: id } : "skip"
  );

  if (userId !== branchCollection?.owner) {
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
              <OwnerSettingsForm branchCollectionId={id} />
            </CardContent>
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
