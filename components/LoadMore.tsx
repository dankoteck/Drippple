"use client";

import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function LoadMore({ session }: { session: Session | null }) {
  const onSignin = () => {
    signIn("google");
  };

  return (
    <div className="flex items-center justify-center gap-8 mt-10">
      {session ? (
        <Button onClick={onSignin} className="bg-pink-500">
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
