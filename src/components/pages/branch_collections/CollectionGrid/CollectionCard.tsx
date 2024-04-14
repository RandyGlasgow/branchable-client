"use client";
import { useQuery } from 'convex/react';

import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { CardHeader } from '@components/core/card/CardHeader';
import { Chip } from '@components/core/chip/Chip';
import { BranchCollectionLink } from '@components/shared/Links';
import { useUserId } from '@hooks/useStoreUserEffect';
import { ExternalLinkIcon, FaceIcon } from '@radix-ui/react-icons';
import * as Tooltip from '@radix-ui/react-tooltip';

import { api } from '../../../../../convex/_generated/api';
import { Id } from '../../../../../convex/_generated/dataModel';

export const CollectionCard = ({
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
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <BranchCollectionLink
            branchCollectionId={branchCollection!._id!}
          >
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
                    {isMember && (
                      <Chip className="bg-indigo-500">Member</Chip>
                    )}
                  </span>
                  <span
                    className="flex items-center gap-2"
                    title="members"
                  >
                    <FaceIcon />
                    {branchCollection?.members.length}
                  </span>
                </div>
              </CardContent>
            </Card>
          </BranchCollectionLink>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="bottom">
            <Tooltip.Arrow className="fill-white" />
            <Card className="min-w-52 shadow-2xl">
              <CardContent>
                <CardHeader className="w-full">
                  <h6>Details</h6>
                </CardHeader>
                <p className="text-sm">
                  {branchCollection?.description ||
                    "No description provided"}
                </p>
              </CardContent>
            </Card>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
