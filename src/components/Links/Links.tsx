import Link from "next/link";
import { ComponentProps, FC } from "react";

type LinksProps = {} & Omit<ComponentProps<typeof Link>, "href">;

export const LoginLink: FC<LinksProps> = ({ children, ...props }) => {
  return (
    <Link href="/auth/login" {...props}>
      {children}
    </Link>
  );
};
