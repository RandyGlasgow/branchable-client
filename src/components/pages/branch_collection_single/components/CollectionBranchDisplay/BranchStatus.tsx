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
        <Chip className="bg-zinc-500" {...rest}>
          Inactive
        </Chip>
      )}
      {status === "available" && (
        <Chip className="bg-green-500" {...rest}>
          Available
        </Chip>
      )}
      {status === "taken" && (
        <Chip className="bg-amber-500" {...rest}>
          Unavailable
        </Chip>
      )}
      {status === "under_review" && (
        <Chip className="bg-purple-500" {...rest}>
          Under Review
        </Chip>
      )}
    </>
  );
};
