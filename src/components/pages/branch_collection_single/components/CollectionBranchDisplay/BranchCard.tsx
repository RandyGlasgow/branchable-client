import { FC } from 'react';

import { Button } from '@components/core/button/Button';
import { ButtonNeutral } from '@components/core/button/ButtonNeutral';
import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { Chip } from '@components/core/chip/Chip';
import { DialogOverlay } from '@components/core/dialog/Dialog';
import * as Dialog from '@radix-ui/react-dialog';
import { ResetIcon } from '@radix-ui/react-icons';

import { Doc } from '../../../../../../convex/_generated/dataModel';
import { BranchReset } from './BranchReset';
import { BranchStatus } from './BranchStatus';
import { BranchToggleStatus } from './BranchToggleStatus';

export const BranchCard: FC<{
  branch: Doc<"branch_collection_branch">;
}> = ({ branch }) => {
  return (
    <Dialog.Root modal>
      <Dialog.Trigger className="appearance-none col-span-full" asChild>
        <Card role="button" key={branch._id}>
          <CardContent>
            <h2 className="flex items-center justify-between pb-1">
              {branch.name}
            </h2>
            <BranchStatus status={branch.state} />
          </CardContent>
        </Card>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          {/* animate the slide in */}
          <Dialog.Content className="fixed top-0 right-0 animate-slide-in-from-left animate-slide-out-from-left fade-in">
            <Card className="h-full rounded-none min-w-[100dvw] min-h-screen md:min-w-[35dvw]">
              <CardContent>
                <h2 className="flex items-center justify-between pb-1">
                  {branch.name}
                  <BranchReset branchId={branch._id} />
                </h2>
                <div>
                  <BranchToggleStatus branchId={branch} />
                </div>
              </CardContent>
            </Card>
          </Dialog.Content>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
