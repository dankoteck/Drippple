"use client";

import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { motion, useCycle } from "framer-motion";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";
import { MenuToggle } from "./MenuToggle";
import UserContextMenu from "./UserContextMenu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Navbar({ session }: { session: Session | null }) {
  const [open, cycleOpen] = useCycle(false, true);

  const onUserLogin = () => {
    signIn("google");
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between h-24 px-6 sm:px-10">
        <div className="flex items-center flex-1 gap-4">
          <MenuToggle open={open} toggle={cycleOpen} />

          {/* Logo */}
          <Link href="/" className="relative block h-16 w-fit aspect-video">
            <Image
              fill
              priority
              src="/images/logo.svg"
              alt="Logo"
              className="object-contain"
            />
          </Link>

          {/* Nav items */}
          <ul className="items-center hidden gap-4 ml-4 2xl:gap-8 lg:flex">
            {navLinks.map((link) =>
              link.key.includes("Log in") ? null : (
                <li
                  key={link.key}
                  className={`${
                    link.isPrimary ? "text-pink-500" : ""
                  } text-sm font-semibold`}
                >
                  <Link href={link.href} className="py-3 w-fit">
                    {link.text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Login/Signup */}
        {session?.user ? (
          <div className="flex items-center justify-end gap-6 xl:flex-1">
            {/*  */}
            <div className="hidden w-full max-w-[280px] 2xl:max-w-xs xl:block">
              <Input
                placeholder="Search..."
                className="z-10 pl-12 pr-6 py-6 bg-slate-100 border-0 rounded-[50px]"
              />
            </div>
            {/*  */}
            <AiOutlineSearch className="block cursor-pointer w-7 h-7 xl:hidden" />
            <Link className="hidden xl:block" href={"/uploads/new"}>
              <Button size="lg">Share Work</Button>
            </Link>
            <UserContextMenu user={session.user} />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="items-center hidden gap-4 lg:flex">
              <Button variant="link" onClick={onUserLogin}>
                Log in
              </Button>

              <span className="hidden mr-4 text-sm xl:block">&bull;</span>
            </div>

            <Button size="lg">Sign up</Button>
          </div>
        )}
      </div>

      {/* Mobile Nav */}
      <motion.nav
        transition={{
          duration: 0.2,
        }}
        animate={{
          x: open ? 0 : "-100%",
          opacity: open ? 1 : 0,
        }}
        initial={false}
        className="fixed inset-0 z-50 w-full text-sm font-medium max-h-[calc(100vh-96px)] top-24 lg:hidden"
      >
        <div className="relative z-50 p-8 bg-white max-h-[calc(100vh-96px)]">
          <motion.ul
            variants={{
              open: {
                transition: {
                  staggerChildren: 7,
                  delayChildren: 0.2,
                },
              },
              closed: {
                transition: {
                  staggerChildren: 5,
                  staggerDirection: -1,
                },
              },
            }}
            className="flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <li
                key={link.key}
                className={`${link.isPrimary ? "text-pink-500" : ""} 
                ${
                  link.isDivided ? "mt-3 pt-6 border-t border-t-slate-200" : ""
                } flex items-center leading-none w-full`}
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
