"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useCallback, useRef } from "react";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { Button } from "./ui/button";

export default function Modal({
  children,
  onCancel,
}: {
  children: ReactNode;
  onCancel?: () => void;
}) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push("/");
    onCancel?.();
  }, [router, onCancel]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-10 mx-auto bg-black/80"
      onClick={(e) => handleClick(e)}
    >
      <Button
        size="icon"
        variant="ghost"
        onClick={onDismiss}
        className="absolute top-2 left-4 hover:bg-transparent"
      >
        <IoMdClose className="w-7 h-7 fill-white" />
      </Button>

      <div
        ref={wrapper}
        className="flex justify-start items-center flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl px-4 py-6 overflow-auto"
      >
        {children}
      </div>
    </div>
  );
}
