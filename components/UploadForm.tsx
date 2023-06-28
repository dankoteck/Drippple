"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import Modal from "./Modal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function UploadForm() {
  const [params, setParams] = useState<{
    image: string | null;
  }>({
    image: null,
  });

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      alert("Please upload only image!");

      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      setParams((prevParams) => ({
        ...prevParams,
        image: result,
      }));
    };
  };

  return (
    <Modal>
      <div className="flex items-center justify-end w-full mb-6">
        <Button disabled={!params.image} className="bg-pink-500">
          Continue
        </Button>
      </div>

      {!params.image && (
        <h1 className="text-3xl font-bold mb-14">
          What have you been working on?
        </h1>
      )}

      {params.image && (
        <Input
          className="mb-8 text-3xl font-bold text-gray-400"
          placeholder="Give it a name"
        />
      )}

      <div className="flex w-full justify-start max-w-screen-lg after:absolute after:top-[80%] after:-right-2 after:-bottom-2 after:-left-2 after:bg-[linear-gradient(hsla(0,0%,100%,0),#fff)] min-h-[524px] relative">
        <label
          htmlFor="poster"
          className={` border-2 border-dashed border-slate-200 z-10 justify-center w-full h-full text-center rounded-2xl`}
        >
          {!params.image && (
            <div className="flex flex-col items-center justify-center w-full h-full p-20 m-auto ">
              <div className="flex flex-col space-y-3">
                <div className="relative w-20 h-20 mx-auto">
                  <Image
                    fill
                    sizes="100vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="https://dribbble.com/assets/packs/media/assets/images/picture-placeholder-663241b1d5d22ee9abbe41bf9dd724df.png"
                    src={
                      "https://dribbble.com/assets/packs/media/assets/images/picture-placeholder-663241b1d5d22ee9abbe41bf9dd724df.png"
                    }
                    alt="Placeholder Image"
                  />
                </div>

                <span className="">
                  Drag and drop an image, or{" "}
                  <span className="text-pink-500">Browse</span>
                </span>

                <span className="text-sm text-gray-600">
                  Minimum 1600px width recommended. Max 10MB each (20MB for
                  videos)
                </span>

                <ul className="grid grid-cols-2 !mt-10 gap-y-2 gap-x-20 text-gray-500 text-sm text-left list-disc">
                  <li className="">High resolution images (png, jpg, gif)</li>
                  <li className="">Videos (mp4)</li>
                  <li className="">Animated gifs</li>
                  <li className="">Only upload media you own the rights to</li>
                </ul>
              </div>
            </div>
          )}
        </label>

        <input
          id="image"
          type="file"
          accept="image/*"
          required
          className="absolute z-30 w-full h-full opacity-0 cursor-pointer"
          onChange={(e) => handleChangeImage(e)}
        />
        {params.image && (
          <div className="relative">
            <Image
              fill
              src={params?.image}
              className="z-20 object-cover p-4 rounded-[2rem]"
              alt="image"
            />
          </div>
        )}
      </div>
    </Modal>
  );
}
