import Image from "next/image";
import { getProjects } from "~/libs/actions";
import { Button } from "./ui/button";
import { BiSolidFolderPlus } from "@react-icons/all-files/bi/BiSolidFolderPlus";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";

export default function Projects({
  data,
}: {
  // data: Awaited<ReturnType<typeof getProjects>>;
  data: any[]
}) {
  return (
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item, i) => (
        <li key={i} className="group">
          <div className="relative w-full rounded-2xl aspect-[3/2]">
            {item.type === "video" ? (
              <video
                className="object-cover w-full h-full rounded-2xl"
                muted
                playsInline
                loop
                autoPlay
                src={item.url}
              >
                <source src={item.url} type="video/mp4" />
              </video>
            ) : (
              <Image
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover w-full h-full rounded-2xl"
                src={item.url}
                alt={item.title}
              />
            )}

            {/* Hover description */}
            <div className="absolute inset-0 flex items-end justify-between w-full h-full p-4 transition duration-150 opacity-0 rounded-2xl bg-shadow group-hover:opacity-100">
              <span className="text-lg font-semibold text-white">
                {item.title}
              </span>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="rounded-lg" size="icon">
                  <BiSolidFolderPlus className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-lg" size="icon">
                  <AiFillHeart className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <div className="relative w-6 rounded-full aspect-square">
                <Image
                  width={24}
                  height={24}
                  className="object-cover rounded-full"
                  src={item.author.avatar}
                  alt={item.author.name}
                />
              </div>
              <p className="text-sm font-medium">{item.author.name}</p>
            </div>

            <div className="flex items-center gap-2 ">
              <div className="flex items-center gap-1 text-xs">
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-0 hover:bg-transparent w-fit group/reaction"
                >
                  <AiFillHeart className="w-4 h-4 transition duration-300 group-hover/reaction:fill-pink-500 fill-slate-300" />
                </Button>
                {item.likes}
              </div>

              <div className="flex items-center gap-1 text-xs">
                <AiFillEye className="w-5 h-5 transition duration-300 hover:fill-pink-500 fill-slate-300" />
                {item.views}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
