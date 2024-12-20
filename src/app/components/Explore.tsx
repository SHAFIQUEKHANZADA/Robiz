"use client"
import { Poppins } from 'next/font/google';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { products } from './ProductArray';
import { BsStarFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoEyeOutline } from 'react-icons/io5';
import Link from 'next/link';  // Import Link from Next.js

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(8);
  const [visibleItems, setVisibleItems] = useState(8);

  useEffect(() => {
    const updateVisibleItems = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setVisibleItems(8); 
      } else if (screenWidth >= 768) {
        setVisibleItems(4); 
      } else {
        setVisibleItems(2);  
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);

  const itemsToDisplay = products.slice(currentIndex, currentIndex + visibleItems);

  const nextSlide = () => {
    const newIndex = (currentIndex + visibleItems) % products.length;
    setCurrentIndex(newIndex >= 8 ? newIndex : 8);  
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - visibleItems + products.length) % products.length;
    setCurrentIndex(newIndex >= 8 ? newIndex : 8);  
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

  return (
    <div className={`${poppins.className} md:px-[65px] px-5`}>
      <div className="flex items-center gap-4 mb-5">
        <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-md" />
        <h1 className="text-[16px] font-semibold text-[#DB4444] hover:underline">
          Our Products
        </h1>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="md:text-[36px] text-[22px] font-semibold">Explore Our Products</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="bg-[#F5F5F5] sm:w-[46px] sm:h-[46px] w-[40px] h-[40px] rounded-full flex items-center justify-center"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#F5F5F5] sm:w-[46px] sm:h-[46px] w-[40px] h-[40px] rounded-full flex items-center justify-center"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 my-8">
        {itemsToDisplay.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white w-full h-[322px] flex flex-col justify-between overflow-hidden"
          >
            
            <Link href={`/product/${product.slug}`} className="w-full">
              <div className="relative w-full sm:h-[250px] h-[220px] overflow-hidden rounded">
                <Image
                  src={product.image}
                  alt={product.category}
                  width={270}
                  height={250}
                  className="w-full h-full object-cover rounded group-hover:scale-110 duration-500"
                />
                <div className="absolute text-[16px] font-medium bottom-0 left-0 w-full h-12 bg-[#000000] text-[#FAFAFA] text-center group-hover:translate-y-0 transition opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  Add to Cart
                </div>
              </div>

              <div className="bg-white flex flex-col justify-center gap-2">
                <h2 className="text-[16px] font-medium text-black truncate">
                  {product.slug.replace(/-/g, " ")}
                </h2>
                <div className="flex sm:flex-row flex-col gap-2">
                  <p className="text-[#DB4444] pb-1 text-[16px] font-medium">
                    ${product.originalPrice}
                  </p>
                  <div className="flex gap-2">
                    <div className="ml-[2px]">{renderStars(product.rating)}</div>
                    <div className="text-[14px] font-semibold text-gray-500">
                      ({product.ratedBy})
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {product.newArrival && (
              <div className="absolute top-[10px] left-2 bg-[#00FF66] text-white text-xs px-[12px] py-[4px] rounded">
                New
              </div>
            )}

            <div className="absolute right-3 top-12 transform -translate-y-1/2 flex flex-col gap-2">
              <div className="bg-white sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <AiOutlineHeart className="text-[20px] sm:text-[24px]" />
              </div>
              <div className="bg-white sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <IoEyeOutline className="text-[20px] sm:text-[24px]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center sm:py-10 py-5">
        <button className="text-[16px] font-medium text-white bg-[#DB4444] rounded px-[48px] py-[16px]">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Explore;
