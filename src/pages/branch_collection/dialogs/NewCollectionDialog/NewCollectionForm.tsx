import { useMutation } from 'convex/react';
import { FC, useEffect, useState } from 'react';
import { adjectives, animals } from 'unique-names-generator';

import { Button } from '@components/button/Button';
import { Close } from '@radix-ui/react-dialog';
import { ReloadIcon } from '@radix-ui/react-icons';

import { api } from '../../../../../convex/_generated/api';

const createRandomName = () => {
  const maxLenAdj = adjectives.length;
  const maxLenAnim = animals.length;

  const randAdj = Math.floor(Math.random() * maxLenAdj + Math.random());
  const randAnim = Math.floor(Math.random() * maxLenAnim);

  return [adjectives[randAdj], animals[randAnim]].join("-");
};
export const CreateNewCollectionForm: FC = () => {
  const [fromData, setFormData] = useState({
    name: createRandomName(),
    description: "",
  });

  const [isValidForm, setIsValidForm] = useState(false);
  const createBranchCollection = useMutation(
    api.branchCollection.create_branch_collection
  );
  useEffect(() => {
    const regex = new RegExp("^[a-z-_]+$");
    setIsValidForm(!regex.test(fromData.name));
  }, [fromData.name]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createBranchCollection({ name: fromData.name }).then((d) => {
          document.getElementById("dialog-close")?.click();
        });
      }}
      className="flex flex-col gap-4"
    >
      <span className="flex gap-2 items-center w-full">
        <input
          id="collection-name"
          name="collection-name"
          type="text"
          value={fromData.name}
          required
          onChange={(e) =>
            setFormData({ ...fromData, name: e.target.value })
          }
          className="w-full p-1 shadow-inner bg-zinc-100 rounded focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <Button
          onClick={() => {
            setFormData({ ...fromData, name: createRandomName() });
          }}
          color="neutral"
          type="button"
          className="p-1"
        >
          <ReloadIcon />
        </Button>
      </span>
      <textarea
        value={fromData.description}
        onChange={(e) =>
          setFormData({ ...fromData, description: e.target.value })
        }
        className="w-full p-1 shadow-inner bg-zinc-100 text-sm text-zinc-600 rounded focus:ring-2 focus:ring-primary focus:outline-none"
      />

      <Button
        type="submit"
        color="primary"
        className="max-w-fit self-end"
        disabled={isValidForm}
      >
        Create
      </Button>
    </form>
  );
};
