"use client";
import { Poppins } from "next/font/google";
import { BsStarFill } from "react-icons/bs";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import { bestSelling, products } from "@/app/components/ProductArray";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const ProPage = () => {
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
    <div className={`${poppins.className} md:px-[65px] px-5 flex flex-col justify-between my-12`}>
      {/* Wishlist Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-[20px]">Wishlist (4)</h1>
        <button className="md:text-[16px] text-[12px] font-medium border border-gray-500 hover:border-white duration-150 text-black hover:text-white bg-transparent hover:bg-[#DB4444] rounded md:px-[48px] px-[20px] md:py-[16px] py-[10px]">
          Move All To Bag
        </button>
      </div>

      <div className="my-8 relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-4">
        {bestSelling.map((product) => (
          <Link href={`/product/${product.slug}`} className="w-full overflow-hidden" key={product.id}>
            <div className="relative group bg-white rounded overflow-hidden md:h-[322px] h-[300px] md:w-[270px] flex flex-col justify-between">
              <div className="relative w-full sm:h-[250px] h-[200px] overflow-hidden rounded">
                <Image
                  src={product.image}
                  alt={product.category}
                  width={270}
                  height={250}
                  className="w-full h-full object-cover rounded group-hover:scale-110 duration-500"
                />
                <div className="absolute text-[16px] gap-2 font-medium bottom-0 left-0 w-full h-12 bg-[#000000] text-[#FAFAFA] text-center    flex items-center justify-center">
                <span className="text-[25px]"><MdOutlineShoppingCart /></span>Add to Cart
                </div>
              </div>

              <div className="bg-white flex flex-col gap-2">
                <h2 className="text-[16px] font-semibold text-black truncate">{product.slug.replace(/-/g, " ")}</h2>
                <div className="flex items-center gap-3">
                  <p className="text-[#DB4444] text-[16px] font-medium">${product.salePrice}</p>
                  <p className="text-gray-500 text-[16px] font-medium line-through">${product.originalPrice}</p>
                </div>
               
              </div>

              <div className="absolute sm:right-3 right-2 top-7 transform -translate-y-1/2 flex flex-col gap-2">
                <div className="bg-white sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <RiDeleteBin6Line className="sm:text-[24px] text-[20px]" />
                </div>
               
              </div>
            </div>

            <div className="absolute left-3 top-3">
                  {renderDiscount(product.salePrice, product.originalPrice)}
                </div>

          </Link>
        ))}
      </div>

      {/* Just For You Section */}
      <div className="flex justify-between items-center mt-12">
      <div className="flex items-center gap-4 mb-5">
        <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-md" />
        <h1 className="text-[20px]">
        Just For You
        </h1>
      </div>

        <button className="md:text-[16px] text-[12px] font-medium border border-gray-500 hover:border-white duration-150 text-black hover:text-white bg-transparent hover:bg-[#DB4444] rounded md:px-[48px] px-[20px] md:py-[16px] py-[10px]">
          See All
        </button>
      </div>

      <div className="my-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-4 relative">
        {products.slice(0, 4).map((product) => (
          <Link href={`/product/${product.slug}`} className="w-full overflow-hidden" key={product.id}>
            <div className="relative group bg-white rounded overflow-hidden md:h-[350px] h-[300px] md:w-[270px] flex flex-col justify-between">
              <div className="relative w-full sm:h-[250px] h-[200px] overflow-hidden rounded">
                <Image
                  src={product.image}
                  alt={product.category}
                  width={270}
                  height={250}
                  className="w-full h-full object-cover rounded group-hover:scale-110 duration-500"
                />
                <div className="absolute text-[16px] font-medium bottom-0 left-0 w-full h-12 bg-[#000000] text-[#FAFAFA] text-center  group-hover:translate-y-0 transition opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  Add to Cart
                </div>
              </div>

              <div className="bg-white flex flex-col gap-2">
                <h2 className="text-[16px] font-semibold text-black truncate">{product.slug.replace(/-/g, " ")}</h2>
                <div className="flex items-center gap-3">
                  <p className="text-[#DB4444] text-[16px] font-medium">${product.salePrice}</p>
                  <p className="text-gray-500 text-[16px] font-medium line-through">${product.originalPrice}</p>
                </div>
                <div className="flex items-end gap-2">
                  <div className="mb-[3px]">{renderStars(product.rating)}</div>
                  <div className="text-[14px] font-semibold text-gray-500">({product.ratedBy})</div>
                </div>
              </div>



              <div className="absolute sm:right-3 right-2 top-7 transform -translate-y-1/2 flex flex-col gap-2">
                <div className="bg-white sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <IoEyeOutline className="sm:text-[24px] text-[20px]" />
                </div>
            
            </div>
            </div>

            <div className="absolute left-3 top-3">
                  {renderDiscount(product.salePrice, product.originalPrice)}
                </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProPage;
