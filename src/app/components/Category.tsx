"use client";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { BsSmartwatch } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoCameraOutline, IoGameControllerOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const categories = [
  { icon: <CiMobile3 className="w-14 h-14 group-hover:text-white" />, name: "Phones" },
  { icon: <HiOutlineComputerDesktop className="sm:w-12 sm:h-12 w-16 h-16 group-hover:text-white" />, name: "Computers" },
  { icon: <BsSmartwatch className="sm:w-12 sm:h-12 w-16 h-16 group-hover:text-white" />, name: "Smart Watch" },
  { icon: <PiHeadphones className="sm:w-12 sm:h-12 w-16 h-16 group-hover:text-white" />, name: "Head Phones" },
  { icon: <IoGameControllerOutline className="sm:w-12 sm:h-12 w-16 h-16 group-hover:text-white" />, name: "Gaming" },
  { icon: <IoCameraOutline className="sm:w-12 sm:h-12 w-16 h-16 group-hover:text-white" />, name: "Camera" },
  { icon: <BsSmartwatch className="sm:w-12 sm:h-12 w-16 h-16 group-hover:text-white" />, name: "Wearables" },
];

const CategoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);


  useEffect(() => {
    const updateVisibleItems = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setVisibleItems(5);
      } else if (screenWidth >= 768) {
        setVisibleItems(3);
      } else {
        setVisibleItems(1);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);

  const itemsToDisplay = categories.slice(currentIndex, currentIndex + visibleItems);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + visibleItems) % categories.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - visibleItems + categories.length) % categories.length
    );
  };
 
  return (
    <div className={`${poppins.className} relative md:px-[65px] px-5 flex flex-col justify-between my-12`}>
      <div className="flex items-center gap-4 mb-5">
        <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-md" />
        <h1 className="text-[16px] font-semibold text-[#DB4444] hover:underline">
          Categories
        </h1>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="md:text-[36px] text-[28px] font-semibold">Browse By Category</h1>
        <div className="md:flex hidden items-center gap-3">
          <button
            onClick={prevSlide}
            className="  bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className=" bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center"
          >
            <FaArrowRight />
          </button>

        </div>
        <div className="md:hidden block">
          <button
            onClick={prevSlide}
            className="absolute left-5 top-[50%] transform -translate-y-1/2 bg-[#F5F5F5]  w-10 h-10 rounded-full flex items-center justify-center "
          >
            &#60;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-[50%] transform -translate-y-1/2 bg-[#F5F5F5]  w-10 h-10 rounded-full flex items-center justify-center "
          >
            &#62;
          </button>
        </div>
      </div>

      <div className="md:px-10 py-9">
        <div className="flex flex-wrap justify-center lg:justify-between gap-4">
          {itemsToDisplay.map((category, index) => (
            <div
              key={index}
              className="sm:w-[170px] w-[60vw] h-[60vw] sm:h-[145px] border border-zinc-300 group hover:border-none duration-200 hover:scale-105 rounded flex flex-col justify-evenly items-center hover:bg-[#DB4444]"
            >
              {category.icon}
              <h1 className="sm:text-[16px] text-[20px] group-hover:text-white">{category.name}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#000000] opacity-[30%] sm:h-[1px] h-[8px] rounded-2xl sm:w-full w-[30%] mx-auto sm:my-16 my-8" />
    </div>
  );
};

export default CategoryCarousel;
