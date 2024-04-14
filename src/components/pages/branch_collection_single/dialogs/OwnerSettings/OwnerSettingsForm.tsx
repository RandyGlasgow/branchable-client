import { useMutation, useQuery } from 'convex/react';
import { useRouter } from 'next/navigation';
import { FC, MouseEventHandler, useState } from 'react';

import { Button } from '@components/core/button/Button';
import { ButtonDanger } from '@components/core/button/ButtonDanger';
import { ButtonNeutral } from '@components/core/button/ButtonNeutral';
import { TextInput } from '@components/inputs/TextInput';
import { useGetBranchCollection } from '@hooks/queries/useGetBranchCollection';
import { Close } from '@radix-ui/react-dialog';

import { api } from '../../../../../../convex/_generated/api';
import { Doc, Id } from '../../../../../../convex/_generated/dataModel';

type OwnerSettingsFormProps = {
  collection: Doc<"branch_collection">;
};
export const OwnerSettingsForm: FC<OwnerSettingsFormProps> = ({
  collection,
}) => {
  const updateBranchCollection = useMutation(
    api.branchCollection.update_branch_collection
  );

  const deleteBranchCollection = useMutation(
    api.branchCollection.delete_branch_collection
  );

  const router = useRouter();

  const [intermediateData, setIntermediateData] = useState({
    name: collection?.name,
    description: collection?.description,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntermediateData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="Name">
        <span className="text-sm font-semibold">Name</span>
        <TextInput
          placeholder="Name"
          value={intermediateData?.name}
          onChange={handleChange}
          name="name"
        />
      </label>
      <TextInput
        name="description"
        onChange={handleChange}
        placeholder="Description (optional)"
        value={intermediateData?.description}
      />
      <span className="flex justify-between items-center gap-2">
        <ButtonDanger
          className="justify-self-start"
          onClick={(e) => {
            e.preventDefault();
            deleteBranchCollection({
              branchCollectionId: collection._id,
            }).then(() => {
              router.push("/branch_collection");
            });
          }}
        >
          Delete
        </ButtonDanger>
        <span className="flex items-center gap-2">
          <Close asChild>
            <ButtonNeutral>Cancel</ButtonNeutral>
          </Close>
          <Close asChild>
            <Button
              onClick={(e) => {
                updateBranchCollection({
                  branchCollectionId: collection._id,
                  ...intermediateData,
                });
              }}
              type="submit"
            >
              Save
            </Button>
          </Close>
        </span>
      </span>
    </form>
  );
};
