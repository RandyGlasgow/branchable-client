import { useMutation, useQuery } from 'convex/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, ChangeEventHandler, FC, MouseEventHandler, useState } from 'react';

import { Button } from '@components/core/button/Button';
import { ButtonDanger } from '@components/core/button/ButtonDanger';
import { ButtonNeutral } from '@components/core/button/ButtonNeutral';
import { TextArea } from '@components/core/inputs/TextArea';
import { TextInput } from '@components/core/inputs/TextInput';
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

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
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
      <TextArea
        name="description"
        onChange={handleChange}
        placeholder="Description (optional)"
        value={intermediateData?.description}
      />
      <span className="flex justify-between items-center gap-2">
        <ButtonDanger
          type="button"
          className="justify-self-start"
          onClick={(e) => {
            router.push("/branch_collection");
            deleteBranchCollection({
              branchCollectionId: collection._id,
            }).then(() => {});
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
                  description: intermediateData.description,
                  name: intermediateData.name,
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
