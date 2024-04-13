import { useMutation, useQuery } from 'convex/react';
import { useRouter } from 'next/navigation';
import { FC, MouseEventHandler, useState } from 'react';

import { Button } from '@components/button/Button';
import { TextInput } from '@components/inputs/TextInput';
import { useGetBranchCollection } from '@hooks/queries/useGetBranchCollection';
import { Close } from '@radix-ui/react-dialog';

import { api } from '../../../../../convex/_generated/api';
import { Id } from '../../../../../convex/_generated/dataModel';

type OwnerSettingsFormProps = {
  branchCollectionId: Id<"branch_collection">;
};
export const OwnerSettingsForm: FC<OwnerSettingsFormProps> = ({
  branchCollectionId,
}) => {
  const branchCollection = useGetBranchCollection(branchCollectionId);
  const updateBranchCollection = useMutation(
    api.branchCollection.update_branch_collection
  );

  const deleteBranchCollection = useMutation(
    api.branchCollection.delete_branch_collection
  );

  const router = useRouter();

  const [intermediateData, setIntermediateData] = useState({
    name: branchCollection?.name,
    description: branchCollection?.description,
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
      <span className="flex justify-end items-center gap-2">
        <Button
          color="danger"
          onClick={(e) => {
            e.preventDefault();
            deleteBranchCollection({ branchCollectionId }).then(() => {
              router.push("/branch_collection");
            });
          }}
        >
          Delete
        </Button>

        <Close asChild>
          <Button color="neutral">Cancel</Button>
        </Close>
        <Close asChild>
          <Button
            onClick={(e) => {
              updateBranchCollection({
                branchCollectionId,
                ...intermediateData,
              });
            }}
            type="submit"
          >
            Save
          </Button>
        </Close>
      </span>
    </form>
  );
};
