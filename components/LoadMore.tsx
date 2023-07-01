"use client";

import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  session: Session | null;
  endCursor: string;
};

export default function LoadMore({ session, endCursor }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const onSignin = () => {
    signIn("google");
  };

  const onNavigation = () => {
    const currentParams = new URLSearchParams(window.location.search);

    currentParams.delete("endCursor");
    currentParams.set("endCursor", endCursor);

    const newSearchParams = currentParams.toString();
    const newPathname = `${pathname}?${newSearchParams}`;

    router.push(newPathname);
  };

  return (
    <div className="flex items-center justify-center gap-8 mt-10">
      {session ? (
        <Button onClick={onNavigation} className="bg-pink-500">
          Load more Shots
        </Button>
      ) : (
        <>
          <Button onClick={onSignin} className="px-12 bg-pink-500">
            Sign up to continue
          </Button>
          <Button onClick={onSignin} className="text-pink-500" variant="ghost">
            or sign in
          </Button>
        </>
      )}
    </div>
  );
}
