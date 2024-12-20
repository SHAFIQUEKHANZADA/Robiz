"use client";
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
import NavHero from './NavHero';

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

const Hero = () => {
    const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

    const toggleDropdown = (category: string) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const categories = [
        {
            name: "Woman’s Fashion",
            items: [
                { name: "Top", link: "/women-fashion" },
                { name: "Purse", link: "/men-fashion" },
            ]
        },
        {
            name: "Men’s Fashion",
            items: [
                { name: "Shirts", link: "/electronics/mobile" },
                { name: "Shoes", link: "/electronics/laptops" },
            ]
        },
    ];

    return (
        <div className="md:bg-[url('/images/banner.webp')] bg-[url('/images/minibanner.webp')] bg-cover bg-center">
            <NavHero />
            <div className={`${poppins.className} md:h-[calc(100vh-120px)]  h-[95vh]  flex items-start justify-between`}>

                <div className='md:flex hidden flex-col gap-4 w-[217px] md:mt-10'>
                    {categories.map((category) => (
                        <div key={category.name} className="relative">
                            <button
                                onClick={() => toggleDropdown(category.name)}
                                className="flex items-center gap-2 text-[16px] font-normal cursor-pointer focus:outline-none"
                            >
                                {category.name}{" "}
                                <span className="transition-transform duration-300 text-[16px]">
                                    {openDropdowns[category.name] ? <IoIosArrowDown /> : <MdKeyboardArrowRight />}
                                </span>
                            </button>

                            {openDropdowns[category.name] && (
                                <div className="w-fit flex flex-col gap-2 mt-2">
                                    {category.items.map((item) => (
                                        <Link key={item.name} href={item.link}>
                                            <div className="relative text-[16px] sm:cursor-pointer group">
                                                <span className="group-hover:text-orange-500 inline-block relative">
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

                    <ul className='flex flex-col gap-4 w-fit text-[16px] font-normal'>
                        <li className="relative text-gray-800 cursor-pointer group">
                            <span className="group-hover:text-orange-500 transition-all duration-300 inline-block relative">
                                Electronics
                                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300"></div>
                            </span>
                        </li>
                        <li className="relative text-gray-800  cursor-pointer group">
                            <span className="group-hover:text-orange-500 transition-all duration-300 inline-block relative">
                                Home & Lifestyle
                                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300"></div>
                            </span>
                        </li>
                        <li className="relative text-gray-800  cursor-pointer group">
                            <span className="group-hover:text-orange-500 transition-all duration-300 inline-block relative">
                                Medicine
                                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300"></div>
                            </span>
                        </li>
                        <li className="relative text-gray-800  cursor-pointer group">
                            <span className="group-hover:text-orange-500 transition-all duration-300 inline-block relative">
                                Sports & Outdoor
                                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300"></div>
                            </span>
                        </li>
                        <li className="relative text-gray-800  cursor-pointer group">
                            <span className="group-hover:text-orange-500 transition-all duration-300 inline-block relative">
                                Baby’s & Toys
                                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300"></div>
                            </span>
                        </li>
                        <li className="relative text-gray-800  cursor-pointer group">
                            <span className="group-hover:text-orange-500 transition-all duration-300 inline-block relative">
                                Groceries & Pets
                                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300"></div>
                            </span>
                        </li>
                        <li className="relative text-gray-800  cursor-pointer group">
                            <span className="group-hover:text-orange-500 transition-all duration-300 inline-block relative">
                                Health & Beauty
                                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300"></div>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="bg-[#000000] opacity-[30%] w-[1px] h-[380px] md:block hidden" />
                {/* <MainBanner/> */}

            </div>
        </div>
    );
};

export default Hero;
