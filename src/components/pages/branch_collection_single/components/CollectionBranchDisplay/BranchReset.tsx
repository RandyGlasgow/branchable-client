import { useMutation } from 'convex/react';
import { FC } from 'react';

import { ButtonNeutral } from '@components/core/button/ButtonNeutral';
import { ResetIcon } from '@radix-ui/react-icons';

import { api } from '../../../../../../convex/_generated/api';
import { Id } from '../../../../../../convex/_generated/dataModel';

export const BranchReset: FC<{
  branchId: Id<"branch_collection_branch">;
}> = ({ branchId }) => {
  const resetBranch = useMutation(api.branchCollection.reset_branch);
  return (
    <ButtonNeutral
      className="py-1 text-sm"
      onClick={() => resetBranch({ branchId: branchId })}
    >
      <ResetIcon />
      Reset Branch
    </ButtonNeutral>
  );
};
