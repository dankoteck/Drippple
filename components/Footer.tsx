import Image from "next/image";
import Link from "next/link";

import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { footerLinks } from "~/constants";

type FooterLink = {
  title: string;
  links: string[];
};

const icons = [
  {
    icon: <AiOutlineTwitter className="w-6 h-6" />,
    href: "/",
  },
  {
    icon: <AiFillFacebook className="w-6 h-6" />,
    href: "/",
  },
  {
    icon: <AiFillGithub className="w-6 h-6" />,
    href: "/",
  },
  {
    icon: <AiFillLinkedin className="w-6 h-6" />,
    href: "/",
  },
];

function FooterColumn({ column }: { column: FooterLink }) {
  return (
    <ul
      className="flex flex-col flex-1 w-full space-y-4 text-sm min-w-max md:min-w-fit"
      key={column.title}
    >
      <li className="mt-0 font-semibold md:mt-8">{column.title}</li>
      {column.links.map((item) => (
        <li className="" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="px-5 py-12 md:px-8 xl:px-16 bg-gray-50">
      <div className="xl:flex xl:gap-12 xl:justify-center">
        <div className="flex flex-col flex-1 w-full gap-6 max-w-fit">
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

          {/* Description */}
          <p className="max-w-xs text-sm">
            {`Dribbble is the world's leading community for creatives to share, grow,
        and get hired.`}
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            {icons.map((item, i) => (
              <Link href={item.href} key={i}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Links */}
        <section className="flex flex-wrap gap-12 mt-12 md:mt-0 lg:gap-x-8 2xl:gap-x-16 gap-y-2">
          <FooterColumn column={footerLinks[0]} />

          <div className="flex flex-col flex-1 gap-0">
            <FooterColumn column={footerLinks[1]} />
            <FooterColumn column={footerLinks[2]} />
          </div>

          <FooterColumn column={footerLinks[3]} />

          <div className="flex flex-col flex-1 gap-0">
            <FooterColumn column={footerLinks[4]} />
            <FooterColumn column={footerLinks[5]} />
          </div>

          <FooterColumn column={footerLinks[6]} />
        </section>
      </div>
    </footer>
  );
}
