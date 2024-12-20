"use client";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { products } from "./ProductArray";
import { AiOutlineHeart } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const FlashSale = () => {
  const handleAddToCart = (product: typeof products[0]) => {
    console.log("Add to Cart:", product);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);

  useEffect(() => {
    const updateVisibleItems = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setVisibleItems(4);
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

  const itemsToDisplay = products.slice(
    currentIndex,
    currentIndex + visibleItems
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + visibleItems) % products.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - visibleItems + products.length) % products.length
    );
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<BsStarFill key={i} className="text-yellow-500" />);
      } else {
        stars.push(<BsStarFill key={i} className="text-gray-300" />);
      }
    }
    return <div className="flex gap-1">{stars}</div>;
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderDiscount = (salePrice: number, originalPrice: number) => {
    if (salePrice < originalPrice) {
      const discountPercentage = Math.round(
        ((originalPrice - salePrice) / originalPrice) * 100
      );
      return (
        <div className="bg-[#DB4444] text-[#FAFAFA] py-[5px] px-[15px] rounded text-[12px]">
          -{discountPercentage}%
        </div>
      );
    }
    return null;
  };


  return (
    <div className={`${poppins.className} md:px-[65px] px-5`}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-md" />
          <h1 className="text-[16px] font-semibold text-[#DB4444] hover:underline">
            Today’s
          </h1>
        </div>
        <div className="flex items-center justify-center text-center md:text-start md:justify-between">
          <div className="flex md:flex-row flex-col md:items-end md:gap-[87px]">
            <h1 className="text-[36px] font-semibold">Flash Sales</h1>
            <div className="flex items-end">
              <div>
                <h1 className="text-[12px]">Days</h1>
                <p className="text-[32px] font-bold">
                  {String(timeLeft.days).padStart(2, "0")}
                </p>
              </div>
              <span className="text-[#DB4444] font-bold text-[30px] px-3 mb-1">:</span>
              <div>
                <h1 className="text-[12px]">Hours</h1>
                <p className="text-[32px] font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </p>
              </div>
              <span className="text-[#DB4444] font-bold text-[30px] px-3 mb-1">:</span>
              <div>
                <h1 className="text-[12px]">Minutes</h1>
                <p className="text-[32px] font-bold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </p>
              </div>
              <span className="text-[#DB4444] font-bold text-[30px] px-3 mb-1">:</span>
              <div>
                <h1 className="text-[12px]">Seconds</h1>
                <p className="text-[32px] font-bold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
      {/* Products Section */}
      <div className="relative my-8 hover:cursor-pointer px-0">
        {/* Carousel */}
        <div className="flex">
          {itemsToDisplay.map((product) => (
             <Link href={`/product/${product.slug}`} className="w-full overflow-hidden" key={product.id}>
            <div
              key={product.id}
              className="w-[270px] group relative"
              style={{
                width: `${100 / visibleItems}%`,
              }}
            >
              <div className="relative bg-white md:w-[270px] w-[80vw] mx-auto sm:h-[350px] h-[400px] flex flex-col justify-between overflow-hidden">
              <div className="relative w-full sm:h-[250px] h-[300px] overflow-hidden rounded">
                <Image
                  src={product.image}
                  alt={product.category}
                  width={270}
                  height={250}
                  className="w-full sm:h-full h-[300px] object-cover rounded group-hover:scale-110 duration-500"
                />
                  <div className="absolute text-[16px] font-medium bottom-0 left-0 w-full h-12 bg-[#000000] text-[#FAFAFA] text-center   group-hover:translate-y-0 transition opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <AddToCartButton onClick={() => handleAddToCart(product)} />
                  </div>
                </div>

                {/* Product Details */}
                <div className=" bg-white flex flex-col justify-center gap-2">
                  <h2 className="text-lg font-semibold text-black truncate">
                    {product.slug.replace(/-/g, " ")}
                  </h2>
                  <div className="flex items-center gap-3">
                    <p className="text-[#DB4444] text-[16px] font-medium">
                      ${product.salePrice}
                    </p>
                    <p className="  text-gray-500 text-[16px] font-medium line-through">
                      ${product.originalPrice}
                    </p>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="mb-[3px]">{renderStars(product.rating)}</div>
                    <div className="text-[14px] font-semibold text-gray-500">({product.ratedBy})</div>
                  </div>
                </div>

                <div className="absolute right-3 top-12 transform -translate-y-1/2 flex flex-col gap-2">
                  <div className="bg-white   sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] rounded-full flex items-center justify-center ">
                    <AiOutlineHeart className="text-[20px] sm:text-[24px]" />
                  </div>
                  <div className="bg-white  sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] rounded-full flex items-center justify-center ">
                    <IoEyeOutline className="text-[20px] sm:text-[24px]" />
                  </div>
                </div>

                <div className="absolute left-3 top-3">
                  {renderDiscount(product.salePrice, product.originalPrice)}
                </div>

                <div className="md:hidden block">
                  <button
                    onClick={prevSlide}
                    className="absolute left-1 top-32 transform -translate-y-1/2 bg-[#F5F5F5]  w-10 h-10 rounded-full flex items-center justify-center "
                  >
                    &#60;
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-1 top-32 transform -translate-y-1/2 bg-[#F5F5F5]  w-10 h-10 rounded-full flex items-center justify-center "
                  >
                    &#62;
                  </button>
                </div>

              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-10">
            <button className="text-[16px] font-medium text-white bg-[#DB4444] rounded px-[48px] py-[16px] hover:scale-100">View All Products</button>
      </div>

      <div className="bg-[#000000] opacity-[30%] sm:h-[1px] h-[8px] rounded-2xl sm:w-full w-[30%] mx-auto sm:mt-12 mt-6 mb-10 sm:mb-20" />
    </div>

  );
};

export default FlashSale;
