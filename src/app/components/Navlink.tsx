"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SlMenu } from "react-icons/sl";

const MobileMenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

    const toggleDropdown = (name: string) => {
        setOpenDropdowns((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const categories = [
        {
            name: "Woman’s Fashion",
            items: [
                { name: "Top", link: "/women-fashion" },
                { name: "Purse", link: "/men-fashion" },
            ],
        },
        {
            name: "Men’s Fashion",
            items: [
                { name: "Shirts", link: "/electronics/mobile" },
                { name: "Shoes", link: "/electronics/laptops" },
            ],
        },
    ];

    const staticCategories = [
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby’s & Toys",
        "Groceries & Pets",
        "Health & Beauty",
    ];

    return (
        <div className="relative md:hidden">
        {/* Menu Button */}
        {!isMenuOpen && (
           <SlMenu
                onClick={() => setIsMenuOpen(true)}
                className="h-[22px] w-[22px]   cursor-pointer"
            />
        )}
    
        {/* Fullscreen Menu */}
        {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                <div className="relative w-full h-full bg-white p-4 flex flex-col items-start overflow-y-auto">
                    {/* Close Button */}
                    <AiOutlineClose
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-4 right-4 h-6 w-6 text-black cursor-pointer"
                    />
    
                    {/* Menu Links */}
                    <ul className="flex flex-col mt-12 gap-6 w-full text-left px-6 text-[40px]">
                        {["Home", "Contact", "About", "Sign Up"].map((link) => (
                            <Link href={`/${link.toLowerCase()}`} key={link}>
                                <li className="relative text-gray-800 text-lg cursor-pointer group">
                                    <span className="group-hover:text-orange-500 transition-all duration-300 inline-block relative">
                                        {link}
                                        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300"></div>
                                    </span>
                                </li>
                            </Link>
                        ))}
                    </ul>
    
                    {/* Categories Section */}
                    <div className="mt-8 w-full px-6">
                        <button
                            onClick={() => toggleDropdown("categories")}
                            className="flex items-center gap-2 text-lg font-medium cursor-pointer"
                        >
                            Categories
                            <span>
                                {openDropdowns["categories"] ? <IoIosArrowDown /> : <MdKeyboardArrowRight />}
                            </span>
                        </button>
    
                        {openDropdowns["categories"] && (
                            <div className="flex flex-col gap-4 mt-4 pl-4">
                                {staticCategories.map((category) => (
                                    <div key={category} className="text-black text-md cursor-pointer group">
                                        <span className="group-hover:text-orange-500 transition-all duration-300 inline-block relative">
                                            {category}
                                            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300"></div>
                                        </span>
                                    </div>
                                ))}
    
                                {categories.map((category) => (
                                    <div key={category.name} className="relative mt-4">
                                        <button
                                            onClick={() => toggleDropdown(category.name)}
                                            className="flex items-center gap-2 text-md font-normal cursor-pointer"
                                        >
                                            {category.name}
                                            <span className="transition-transform duration-300">
                                                {openDropdowns[category.name] ? (
                                                    <IoIosArrowDown />
                                                ) : (
                                                    <MdKeyboardArrowRight />
                                                )}
                                            </span>
                                        </button>
                                        {openDropdowns[category.name] && (
                                            <div className="flex flex-col gap-2 mt-2 pl-4">
                                                {category.items.map((item) => (
                                                    <Link key={item.name} href={item.link}>
                                                        <div className="text-black text-sm cursor-pointer group">
                                                            <span className="group-hover:text-orange-500 transition-all duration-300 inline-block relative">
                                                                {item.name}
                                                                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300"></div>
                                                            </span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}
    </div>
    
    );
};

export default MobileMenuBar;
