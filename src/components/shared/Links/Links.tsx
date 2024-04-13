import exp from 'constants';
import Link from 'next/link';
import { ComponentProps, FC } from 'react';

import { Id } from '../../../../convex/_generated/dataModel';

type LinksProps = {} & Omit<ComponentProps<typeof Link>, "href">;

export const LoginLink: FC<LinksProps> = ({ children, ...props }) => {
  return (
    <Link href="/auth/login" {...props}>
      {children}
    </Link>
  );
};

export const BranchCollectionsLink: FC<LinksProps> = ({
  children,
  ...props
}) => {
  return (
    <Link href="/branch_collection" {...props}>
      {children}
    </Link>
  );
};

export const BranchCollectionLink: FC<
  { branchCollectionId: Id<"branch_collection"> } & LinksProps
> = ({ branchCollectionId, children, ...props }) => {
  return (
    <Link href={`/branch_collection/${branchCollectionId}`} {...props}>
      {children}
    </Link>
  );
};
