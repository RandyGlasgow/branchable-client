"use client";
import { useQueries, useQuery } from 'convex/react';

import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { CardHeader } from '@components/core/card/CardHeader';
import useStoreUserEffect from '@hooks/useStoreUserEffect';

import { api } from '../../../../convex/_generated/api';
import { CreateNewCollectionDialog } from '../CreateNewCollectionDialog/CreateNewCollectionDialog';

export const BranchCollection = () => {
  const userId = useStoreUserEffect();
  const collections = useQuery(
    api.branchCollection.get_all_branch_collections,
    userId ? { userId } : "skip"
  );
  return (
    <Card>
      <CardContent>
        <CardHeader
          left={<h2>Organizations</h2>}
          right={<CreateNewCollectionDialog />}
        />
        <div className="grid grid-cols-1 gap-4 mt-4">
          {JSON.stringify(collections)}
        </div>
      </CardContent>
    </Card>
  );
};
