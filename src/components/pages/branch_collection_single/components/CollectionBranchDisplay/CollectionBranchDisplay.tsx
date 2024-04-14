import { useQuery } from 'convex/react';
import { FC } from 'react';

import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { useUserId } from '@hooks/useStoreUserEffect';

import { api } from '../../../../../../convex/_generated/api';
import { Doc, Id } from '../../../../../../convex/_generated/dataModel';
import { BranchCard } from './BranchCard';

type CollectionBranchDisplayProps = {
  id?: Id<"branch_collection">;
};
export const CollectionBranchDisplay: FC<CollectionBranchDisplayProps> = ({
  id,
}) => {
  const userId = useUserId();

  const collectionBranches = useQuery(
    api.branchCollection.get_branches_for_collection,
    userId && id ? { branchCollectionId: id } : "skip"
  );

  return (
    <div className="w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-2">
      {collectionBranches?.map((branch) => (
        <BranchCard key={branch._id} branch={branch} />
      ))}
    </div>
  );
};
