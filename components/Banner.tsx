"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "~/hooks/useParams";
import { categories, trendingSearches } from "../constants";
import { Input } from "./ui/input";

export default function Banner() {
  const { data } = useSession();
  const router = useRouter();
  const param = useParams("category");
  const initCategoryIdx = categories.findIndex((item) => item.key === param);
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(initCategoryIdx);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!param) {
      setActiveCategoryIdx(0);
    }
  }, [param]);

  const onCategoryClick = async (redirectURL: string, idx: number) => {
    router.push(redirectURL);
    // Simulation for API calls
    // TODO: replace with real API calls
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setActiveCategoryIdx(idx);
    setLoading(false);
  };

  if (param && activeCategoryIdx < 0) {
    return <h1>Not found dude</h1>;
  }

  if (data?.user) {
    return null;
  }

  return (
    <div className="border-t border-t-slate-200 h-[650px] md:h-[560px] flex-col flex relative items-center gap-8 max-w-full overflow-hidden px-5 py-[50px] bg-black">
      {/* Categories */}
      <div className="relative z-10 order-[0] w-[calc(100%+30px)] pt-4 -ml-4 -mr-4 mt-0 mb-5 overflow-x-auto overflow-y-hidden text-center border-0 no-scrollbar">
        <ul className="overflow-x-auto overflow-y-hidden px-0.5 no-scrollbar whitespace-nowrap scroll-smooth">
          {categories.map((category, i) => (
            <li
              key={category.key}
              className="inline-block text-sm lg:text-base"
            >
              <div
                role="button"
                onClick={() =>
                  onCategoryClick(
                    `${category.href}?category=${category.key}`,
                    i
                  )
                }
                className={`${
                  param === category.key ? "!bg-white !text-black" : ""
                } text-center px-4 py-2.5 inline-block mr-4 lg:px-5 lg:py-4 text-white transition duration-300 bg-black rounded-[50px] w-fit bg-opacity-50 hover:bg-white hover:bg-opacity-100 hover:text-black`}
              >
                {category.text}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Media (Videos) */}
      <div className="absolute inset-0 flex items-center justify-center brightness-[0.3] lg:brightness-50">
        <video
          className={`${
            loading ? "opacity-0" : "opacity-100"
          } absolute w-screen h-screen transition duration-500 md:h-auto`}
          muted
          playsInline
          loop
          autoPlay
          src={categories[activeCategoryIdx]?.videoURL}
        >
          <source
            src={categories[activeCategoryIdx]?.videoURL}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Title/Description */}
      <div className="flex flex-col items-center max-w-[624px] gap-6 text-center">
        <h1 className="max-w-[500px] mx-auto z-10 text-2xl lg:text-4xl font-semibold text-white">
          {`Explore the world's leading design portfolios`}
        </h1>

        <p className="z-10 text-sm text-white leading-[2] lg:leading-none md:text-base">
          {`Millions of designers and agencies around the world showcase their
        portfolio work on Dribbble - the home to the world's best design and
        creative professionals.`}
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-[600px] w-full my-4">
        <Input
          placeholder="Search..."
          className="z-10 py-8 pt-7 pr-11 pb-7 pl-14 rounded-[50px]"
        />
      </div>

      {/* Trending tags */}
      <div className="z-10 flex flex-wrap items-center justify-center gap-3 text-sm text-white">
        <span className="text-[12px]">Trending searches</span>
        {trendingSearches.map((search) => (
          <Link
            href={search.href}
            className="py-1.5 px-3.5 rounded-[50px] border border-gray-500 hover:border-white transition duration-200"
            key={search.key}
          >
            {search.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
