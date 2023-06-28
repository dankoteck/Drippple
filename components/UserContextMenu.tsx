"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export default function UserContextMenu({ user }: { user: Session["user"] }) {
  const [open, setOpen] = useState(false);

  const onSignout = () => {
    signOut();
  };

  return (
    <Popover open={open}>
      <PopoverTrigger asChild onClick={() => setOpen(true)}>
        <Image
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          src={
            "https://cdn.dribbble.com/assets/avatar-default-e370af14535cdbf137637a27ee1a8e451253edc80be429050bc29d59b1f7cda0.gif"
          }
          alt="Image Profile"
        />
      </PopoverTrigger>
      <PopoverContent
        hideWhenDetached
        sideOffset={28}
        align="end"
        className="px-6 py-8 rounded-lg w-80"
      >
        <div className="flex flex-col items-center gap-3">
          <Image
            width={80}
            height={80}
            className="rounded-full"
            src={
              "https://cdn.dribbble.com/assets/avatar-default-e370af14535cdbf137637a27ee1a8e451253edc80be429050bc29d59b1f7cda0.gif"
            }
            alt="Image Profile"
          />

          <span className="font-semibold">{user?.name}</span>

          <Link
            className="block xl:hidden"
            onClick={() => setOpen(false)}
            href={"/uploads/new"}
          >
            <Button variant="outline">Share Work</Button>
          </Link>
        </div>

        <ul className="mt-4 space-y-4">
          <li className="cursor-pointer">Work preferences</li>
          <li className="cursor-pointer">Settings</li>
          <li
            className="pt-4 border-t cursor-pointer border-t-slate-200"
            onClick={onSignout}
          >
            Sign out
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
