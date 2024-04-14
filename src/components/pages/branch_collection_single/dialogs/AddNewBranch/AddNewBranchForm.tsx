import { useMutation } from 'convex/react';
import { FC, useState } from 'react';

import { Button } from '@components/core/button/Button';
import { TextInput } from '@components/core/inputs/TextInput';
import { Close } from '@radix-ui/react-dialog';

import { api } from '../../../../../../convex/_generated/api';
import { Doc } from '../../../../../../convex/_generated/dataModel';

type AddNewBranchFormProps = {
  collection: Doc<"branch_collection">;
};
export const AddNewBranchForm: FC<AddNewBranchFormProps> = ({
  collection,
}) => {
  const [intermediateData, setState] = useState<
    Pick<Doc<"branch_collection_branch">, "name">
  >({ name: "" });

  const addBranch = useMutation(
    api.branchCollection.add_branch_to_collection
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form>
      <TextInput
        placeholder="Name"
        value={intermediateData?.name}
        onChange={handleChange}
        name="name"
      />
      <Close>
        <Button
          onClick={() => {
            addBranch({
              branchCollectionId: collection._id,
              name: intermediateData.name,
            });
          }}
        >
          Add Branch
        </Button>
      </Close>
    </form>
  );
};
