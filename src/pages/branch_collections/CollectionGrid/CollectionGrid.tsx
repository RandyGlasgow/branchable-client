"use client";

import { useQuery } from 'convex/react';
import { FC } from 'react';

import { Card } from '@components/card/Card';
import { CardContent } from '@components/card/CardContetn';
import { CardHeader } from '@components/card/CardHeader';
import { Chip } from '@components/chip/Chip';
import { BranchCollectionLink, BranchCollectionsLink } from '@components/shared/Links';
import { useUserId } from '@hooks/useStoreUserEffect';
import { ExternalLinkIcon, FaceIcon, GroupIcon } from '@radix-ui/react-icons';

import { api } from '../../../../convex/_generated/api';
import { Doc, Id } from '../../../../convex/_generated/dataModel';
import { CreateNewCollectionDialog } from '../dialogs/NewCollectionDialog/NewCollectionDialog';

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

const CollectionCard = ({
  collectionId,
}: {
  collectionId: Id<"branch_collection">;
}) => {
  const userId = useUserId();
  const branchCollection = useQuery(
    api.branchCollection.get_branch_collection,
    collectionId ? { branchCollectionId: collectionId } : "skip"
  );

  const ownerId = branchCollection?.owner;
  const isOwner = userId === ownerId;

  const isMember = branchCollection?.members.includes(userId!) && !isOwner;
  if (!branchCollection) return null;
  return (
    <BranchCollectionLink branchCollectionId={branchCollection!._id!}>
      <Card className="group">
        <CardContent>
          <CardHeader
            className="text-xl font-bold flex items-center group-hover:text-blue-500"
            right={<ExternalLinkIcon className="scale-125" />}
          >
            {branchCollection!.name}
          </CardHeader>
          <div className="flex justify-between">
            <span>
              {isOwner && <Chip className="bg-blue-400">Owner</Chip>}
              {isMember && <Chip className="bg-indigo-500">Member</Chip>}
            </span>
            <span className="flex items-center gap-2" title="members">
              <FaceIcon />
              {branchCollection?.members.length}
            </span>
          </div>
          <p>{branchCollection?.description}</p>
        </CardContent>
      </Card>
    </BranchCollectionLink>
  );
};
