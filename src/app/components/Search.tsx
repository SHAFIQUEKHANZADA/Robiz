"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FiSearch } from "react-icons/fi"

const SHEET_SIDES = ["left"] as const

export function Search() {
    return (
        <div className="md:block hidden">
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                            <FiSearch className="text-2xl cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent side={side} className="bg-[#f7f7f7]">
                        <div className="">
                            <div className="relative">
                                <FiSearch className="h-6 w-6 cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2" />
                                <input
                                    id="name"
                                    placeholder="What are you looking for?"
                                    className="p-2 pl-12 focus:outline-none bg-transparent w-full"
                                />
                            </div>

                            <div className="w-full h-[1.5px] bg-black"></div>
                        </div>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    )
}
