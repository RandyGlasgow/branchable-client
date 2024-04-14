"use client";
import { useQueries, useQuery } from 'convex/react';
import Link from 'next/link';

import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { CardHeader } from '@components/core/card/CardHeader';
import { BranchCollectionLink } from '@components/shared/Links';
import { useUserId } from '@hooks/useStoreUserEffect';

import { api } from '../../../../convex/_generated/api';

export const BranchCollection = () => {
  const userId = useUserId();
  const collections = useQuery(
    api.branchCollection.get_all_branch_collections,
    userId ? { userId } : "skip"
  );
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-1 gap-1 mt-4">
          {collections?.map((collection) => {
            if (!collection) return null;
            return (
              <div key={collection._id}>
                <BranchCollectionLink
                  branchCollectionId={collection._id}
                  className="hover:text-zinc-600"
                >
                  <div className="p-1">{collection.name}</div>
                </BranchCollectionLink>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
