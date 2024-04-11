import { FC, useEffect, useMemo, useState } from 'react';
import { adjectives, animals, colors } from 'unique-names-generator';

import { Button } from '@components/core/Button';
import { ReloadIcon } from '@radix-ui/react-icons';

export const CreateNewCollectionForm: FC = () => {
  const [name, setName] = useState("");
  const createRandomName = () => {
    const maxLenAdj = adjectives.length;
    const maxLenAnim = animals.length;

    const randAdj = Math.floor(Math.random() * maxLenAdj + Math.random());
    const randAnim = Math.floor(Math.random() * maxLenAnim);

    return [adjectives[randAdj], animals[randAnim]].join("-");
  };

  const [fromData, setFormData] = useState({
    name: createRandomName(),
  });

  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    const regex = new RegExp("^[a-z-_]+$");
    setIsValidForm(!regex.test(fromData.name));
  }, [fromData.name]);
  return (
    <form onChange={(formEvent) => {}} className="flex flex-col gap-4">
      <label htmlFor="collection-name">Collection Name</label>
      <span className="flex justify-between items-center gap-2">
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
