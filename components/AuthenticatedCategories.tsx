"use client";

import { useRef } from "react";
import { PiCaretLeftBold } from "@react-icons/all-files/pi/PiCaretLeftBold"; // Import Swiper styles
import { PiCaretRightBold } from "@react-icons/all-files/pi/PiCaretRightBold"; // Import Swiper styles
import { useRouter } from "next/navigation";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "~/constants";
import { useParams } from "~/hooks/useParams";

// Import Swiper styles
import "swiper/css";

export default function AuthenticatedCategories() {
  const router = useRouter();
  const param = useParams("category");
  const swiperRef = useRef<SwiperCore>();

  const onRedirect = (redirectURL: string) => {
    router.push(redirectURL);
  };

  return (
    <div className="relative overflow-hidden">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="swiper-arrow left-0-0"
      >
        <PiCaretLeftBold className="w-4 h-4" />
      </button>

      <Swiper
        spaceBetween={0}
        slidesPerView="auto"
        updateOnWindowResize
        centeredSlidesBounds
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.key}
            className={`${
              param === category.key
                ? "font-semibold text-black bg-slate-100"
                : "bg-white"
            } !transition !w-fit text-sm px-4 py-2.5 rounded-lg cursor-pointer duration-300 text-gray-500 hover:text-black`}
            onClick={() =>
              onRedirect(`${category.href}?category=${category.key}`)
            }
          >
            {category.text}
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="-right-4 swiper-arrow"
      >
        <PiCaretRightBold className="w-4 h-4" />
      </button>
    </div>
  );
}
