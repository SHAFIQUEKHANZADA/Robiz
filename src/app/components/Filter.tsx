import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowDownUp } from "lucide-react";
import Image from "next/image";

// Filter Component
export const Filter = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="p-1 rounded-full border border-black cursor-pointer">
          <Image src={"/svg/filter.svg"} alt="filter" width={100} height={100} className="h-5 w-5"/>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-[#F7F7F7]">
        <SheetHeader>
          <SheetTitle className="font-light text-[18px] text-left">Filter</SheetTitle>
          <div className="w-full h-[1.5px] bg-black mt-10"></div>
        </SheetHeader>
        {/* Add filter options or content here */}
        <div className="mt-4">
          <p>Filter options will go here.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Sort Component
export const Sort = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="p-1 rounded-full border border-black cursor-pointer">
          <ArrowDownUp className="h-5 w-5"/>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-[#F7F7F7]">
        <SheetHeader>
          <SheetTitle className="font-light text-[18px] text-left">Sort</SheetTitle>
          <div className="w-full h-[1.5px] bg-black mt-10"></div>
        </SheetHeader>
        {/* Add sort options or content here */}
        <div className="mt-4">
          <p>Sort options will go here.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Combined Component
const FilterAndSort = () => {
  return (
    <div className="flex sm:hidden items-center space-x-2">
      <Filter />
      <Sort />
    </div>
  );
};

export default FilterAndSort;
