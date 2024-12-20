"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const banners = [
  {
    id: 1,
    title: "iPhone 14 Series",
    description: "Up to 10% off Voucher",
    icon: <FaApple className="text-white text-6xl" />,
    bgColor: "bg-black",  
    buttonText: "Shop Now",
    image: "/images/iphone.png",
    useAsBackground: false,
  },
  {
    id: 2,
    title: "Seasonal Offers",
    description: "Don’t Miss Out!",
    bgColor: "bg-[url('/images/shopmain.jpeg')] bg-cover bg-center",  
    buttonText: "Shop Now",
    useAsBackground: true,
  },
  {
    id: 3,
    title: "Smart Watch Series",
    description: "Up to 30% off Voucher", 
    bgColor: "bg-[url('/images/moto70.jpg')] bg-cover bg-center",  
    buttonText: "Shop Now",
    useAsBackground: true,
  },
  {
    id: 4,
    title: "Men's Jacket",
    description: "Save More on Top Brands",
    buttonText: "Shop Now",
    bgColor: "bg-[url('/images/jeck.jpg')] bg-cover bg-center",  
    useAsBackground: true,
  },
  {
    id: 5,
    title: "Exclusive Pairs",
    description: "Match Your Style", 
    buttonText: "Shop Now",
    bgColor: "bg-[url('/images/shoesban.jpg')] bg-cover md:bg-center bg-left",  
    useAsBackground: true,
  },

];

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative md:w-[892px] md:h-[344px] w-full h-[85vh] md:mt-10 overflow-hidden bg-black">  
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`w-full sm:h-[344px] md:h-[440px] h-[85vh] flex-shrink-0 flex flex-col text-white ${banner.useAsBackground ? banner.bgColor : ""} bg-no-repeat`}
          >
            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex flex-col py-14  md:pl-16 pl-4 md:justify-between">
                
                  <div className="flex gap-4 items-center">
                    {banner.icon}
                    <h1 className="text-[16px]">{banner.title}</h1>
                  </div>
             
                <h1 className="md:text-[48px] text-[70px] font-semibold">
                  {banner.description}
                </h1>
                <span className="md:text-[16px] text-[34px] font-medium flex items-center underline hover:cursor-pointer gap-2 underline-offset-8">
                  {banner.buttonText} <FaArrowRightLong />
                </span>
              </div>
              {!banner.useAsBackground && banner.image && (
                <div className="flex-shrink-0">
                  <Image
                    src={banner.image}
                    alt={banner.title}
                    width={500}
                    height={300}
                    className="h-full w-[500px] object-contain md:pt-5"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-300"
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
