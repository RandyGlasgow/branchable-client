import { ComponentProps, FC } from 'react';

import { Chip } from '@components/core/chip/Chip';

import { BranchStates } from '../../../../../../convex/constants/branchStates';

export const BranchStatus: FC<
  {
    status: (typeof BranchStates)[keyof typeof BranchStates];
    disabled?: boolean;
  } & ComponentProps<typeof Chip>
> = ({ status, ...rest }) => {
  return (
    <>
      {status === "inactive" && (
        <Chip className="bg-zinc-500 text-white" {...rest}>
          Inactive
        </Chip>
      )}
      {status === "available" && (
        <Chip className="bg-green-500 text-white" {...rest}>
          Available
        </Chip>
      )}
      {status === "taken" && (
        <Chip className="bg-amber-500 text-white" {...rest}>
          Unavailable
        </Chip>
      )}
      {status === "under_review" && (
        <Chip className="bg-purple-500 text-white" {...rest}>
          Under Review
        </Chip>
      )}
      {status === "completed" && (
        <Chip className="bg-blue-500 text-white" {...rest}>
          Completed
        </Chip>
      )}
    </>
  );
};
