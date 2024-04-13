import { useQuery } from 'convex/react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { useUserId } from '@hooks/useStoreUserEffect';

import { api } from '../../../convex/_generated/api';
import { Id } from '../../../convex/_generated/dataModel';

export const useGetBranchCollection = (
  branchCollectionId: Id<"branch_collection">
) => {
  const router = useRouter();
  const userId = useUserId();
  const branchCollection = useQuery(
    api.branchCollection.get_branch_collection,
    userId && branchCollectionId
      ? { branchCollectionId: branchCollectionId }
      : "skip"
  );
  const ref = useRef(false);

  return branchCollection;
};
