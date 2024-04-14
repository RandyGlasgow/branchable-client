"use client";

import { useQuery } from 'convex/react';
import { FC } from 'react';

import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { CardHeader } from '@components/core/card/CardHeader';
import { BranchCollectionsLink } from '@components/shared/Links';
import { useUserId } from '@hooks/useStoreUserEffect';
import { GroupIcon } from '@radix-ui/react-icons';

import { api } from '../../../../../convex/_generated/api';
import { Doc } from '../../../../../convex/_generated/dataModel';
import { CreateNewCollectionDialog } from '../dialogs/NewCollectionDialog/NewCollectionDialog';
import { CollectionCard } from './CollectionCard';

type CollectionGridProps = {};
export const CollectionGrid: FC<CollectionGridProps> = () => {
  const userId = useUserId();
  const collections = useQuery(
    api.branchCollection.get_all_branch_collections,
    userId ? { userId } : "skip"
  );

  return (
    <>
      <Card>
        <CardContent>
          <CardHeader
            left={<h2>Organizations</h2>}
            right={<CreateNewCollectionDialog />}
          />
        </CardContent>
      </Card>
      <div className="w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-2">
        {collections
          ?.sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .map((collection) => (
            <CollectionCard
              key={collection._id}
              collectionId={collection._id}
            />
          ))}
      </div>
    </>
  );
};

