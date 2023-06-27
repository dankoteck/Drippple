"use client";

import { Fragment, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { filterViews } from "~/constants";
export default function FilterView() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const onSelect = (val: string) => {
    const idx = filterViews.findIndex((item) => item.value === val);
    setCurrentIdx(idx);
  };

  return (
    <Select defaultValue="popular" onValueChange={onSelect}>
      <SelectTrigger className="w-fit">
        <SelectValue className="text-sm">
          {filterViews[currentIdx]?.title}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {filterViews.map((item, i) => (
            <Fragment key={item.value}>
              {i === filterViews.length - 1 && (
                <SelectSeparator
                  key={i}
                  className="h-[1px] bg-slate-200 my-1.5"
                />
              )}

              <SelectItem value={item.value} className="py-3 text-sm">
                {item.title}
              </SelectItem>
            </Fragment>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
