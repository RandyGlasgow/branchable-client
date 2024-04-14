import { FC } from 'react';

import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { DialogOverlay } from '@components/core/dialog/Dialog';
import * as Dialog from '@radix-ui/react-dialog';

import { Doc } from '../../../../../../convex/_generated/dataModel';
import { BranchStatus } from './BranchStatus';

export const BranchCard: FC<{
  branch: Doc<"branch_collection_branch">;
}> = ({ branch }) => {
  const isOpenForUse = branch.state === "available";

  return (
    <Dialog.Root modal>
      <Dialog.Trigger className="col-span-full appearance-none" asChild>
        <Card role="button" key={branch._id} className={""}>
          <CardContent>
            <h2 className="flex justify-between items-center">
              {branch.name} <BranchStatus status={branch.state} />
            </h2>
            <div>
              <span></span>
            </div>
          </CardContent>
        </Card>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          {/* animate the slide in */}
          <Dialog.Content className="fixed right-0 top-0 animate-slide-in-from-left animate-slide-out-from-left fade-in">
            <Card className="h-full rounded-none min-w-[100dvw] min-h-screen md:min-w-[35dvw]">
              <CardContent>
                <h2>{branch.name}</h2>
                <div>
                  <span>
                    <BranchStatus status={branch.state} />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Dialog.Content>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
