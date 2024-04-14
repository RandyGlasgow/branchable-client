import { FC } from 'react';

import { Chip } from '@components/core/chip/Chip';

import { BranchStates } from '../../../../../../convex/constants/branchStates';

export const BranchStatus: FC<{
  status: (typeof BranchStates)[keyof typeof BranchStates];
}> = ({ status }) => {
  if (status === "taken")
    return <Chip className="bg-purple-500">{status}</Chip>;

  if (status === "inactive")
    return <Chip className="bg-zinc-500">{status}</Chip>;

  if (status === "available")
    return <Chip className="bg-blue-500">{status}</Chip>;
};
