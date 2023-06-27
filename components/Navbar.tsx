"use client";

import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";
import { MenuToggle } from "./MenuToggle";
import { Button } from "./ui/button";

function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <div className="relative">
      <div className="flex items-center justify-between h-24 px-6 border-b border-b-slate-200 sm:px-10">
        <div className="flex items-center gap-4">
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
          <ul className="items-center hidden gap-8 ml-4 lg:flex">
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
        <div className="flex items-center gap-4">
          <div className="items-center hidden gap-4 lg:flex">
            <Button variant="link" onClick={() => {}}>
              Log in
            </Button>

            <span className="hidden mr-4 text-sm xl:block">&bull;</span>
          </div>

          <Button size="lg">Sign up</Button>
        </div>
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
