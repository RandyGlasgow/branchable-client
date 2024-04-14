import { useMutation } from 'convex/react';
import { FC } from 'react';

import { Button } from '@components/core/button/Button';

import { api } from '../../../../../../convex/_generated/api';
import { Doc, Id } from '../../../../../../convex/_generated/dataModel';
import { BranchStates } from '../../../../../../convex/constants/branchStates';
import { BranchStatus } from './BranchStatus';

export const BranchToggleStatus: FC<{
  branchId: Doc<"branch_collection_branch">;
}> = ({ branchId }) => {
  const availableStatus = Object.values(BranchStates);

  const toggle = useMutation(api.branchCollection.update_branch_status);
  return (
    <span className="flex items-center justify-start w-full gap-2 py-2">
      {availableStatus.map((status) => (
        <button
          key={status}
          disabled={branchId.state === status}
          onClick={() => toggle({ branchId: branchId._id, state: status })}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <BranchStatus status={status} disabled />
        </button>
      ))}
    </span>
  );
};
