"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { PortableText } from "@portabletext/react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Archivo } from "next/font/google";
import ReturnPolicy from "@/app/components/ReturnPolicy";
import ShippingPolicy from "@/app/components/ShippingPolicy";
import ShareButton from "@/app/components/Share";
import SizeChart from "@/app/components/SizeChart";
import { useAppDispatch } from "@/app/hooks";
import { addToCart } from "@/app/store/CartSlice"; 

const archivo = Archivo({ subsets: ["latin"], weight: ["400"] });


interface ProductPageProps {
  params: {
    category: string;
    product: string;
  };
}

interface SideImage {
  asset: {
    _ref: string;
    url: string;
  };
  alt?: string;
}

interface RichTextBlock {
  _key: string;
  _type: string;
  children: Array<{ _key: string; _type: string; text: string }>;
}

interface Product {
  imageUrl: SanityImageSource;
  title: string;
  price: number;
  salePrice: number;
  sideImages: SideImage[];
  description: string;
  slug: string;
  productdetails: RichTextBlock[];
  sizes: string[];
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { category, product } = params;

  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperRef>(null);

  // Ensure useAppDispatch is called unconditionally
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/products/${category}/${product}`);
        const data = await response.json();

        if (response.ok) {
          setProductDetails(data.product);
        } else {
          setError(data.error || "Product not found");
        }
      } catch (error) {
        console.log(error);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [category, product]);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleImageSelect = (index: number) => {
    setActiveImageIndex(index);
    swiperRef.current?.swiper?.slideTo(index);
  };

  // Early return for loading or error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!productDetails) return <div>Product not found</div>;

  const { title, price, salePrice, sideImages, productdetails, sizes } = productDetails;

  const discountPercentage = salePrice
    ? Math.round(((price - salePrice) / price) * 100)
    : 0;

  const handleAddToCart = () => {
    if (productDetails) {
      const imageUrl = productDetails.imageUrl
        ? urlFor(productDetails.imageUrl).url()
        : "/default-image.png";

      const cartItem = {
        id: productDetails.slug,
        name: productDetails.title,
        price: productDetails.salePrice || productDetails.price,
        quantity: 1,
        image: [imageUrl],
      };

      dispatch(addToCart(cartItem));
    }
  };

  return (
    <div className={`${archivo.className} product-page md:p-10 p-4`}>
      <div className="flex md:flex-row flex-col gap-10">

        <div className="md:w-[52%] flex lg:gap-4 gap-2">
          {/* Side Images */}
          <div className="lg:flex hidden flex-col gap-3">
            {sideImages?.map((image, index) => {
              const sideImageUrl = image.asset._ref
                ? urlFor(image.asset._ref).url()
                : image.asset.url || "/placeholder.png";

              return (
                <Image
                  key={index}
                  src={sideImageUrl}
                  alt={image.alt || "Side image"}
                  width={80}
                  height={100}
                  className={`cursor-pointer border ${activeImageIndex === index ? "border-black" : "border-gray-300"}`}
                  onClick={() => handleImageSelect(index)}
                />
              );
            })}
          </div>

          {/* Swiper Slider */}
          <div className="">
            <Swiper
              modules={[Navigation]}
              navigation
              className="xl:w-[550px] md:w-[40vw] w-[91vw] h-[500px] lg:h-[650px] md-[500px]"
              onSlideChange={(swiper) => setActiveImageIndex(swiper.activeIndex)}
              initialSlide={activeImageIndex}
              ref={swiperRef}

            >
              {sideImages?.map((image, index) => {
                const swiperImageUrl = image.asset._ref
                  ? urlFor(image.asset._ref).url()
                  : image.asset.url || "/placeholder.png";

                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={swiperImageUrl}
                      alt={image.alt || "Main image"}
                      width={520}
                      height={650}
                      className="relative xl:w-[550px] md:w-[40vw] w-[91vw] h-[500px] lg:h-[650px] md-[500px] object-top object-cover"
                    />

                    {salePrice && (
                      <span className=" bg-[#E70000] text-white p-4 py-2 text-[14px] rounded-3xl absolute top-4 right-4">{discountPercentage}% off</span>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>


        {/* Product Details */}
        <div className="flex-1 sm:space-y-6 lg:ml-[35px]">
          <h1 className="sm:text-[36px] text-[20px] font-medium mb-2">{title}</h1>
          <div className="flex items-center gap-4">
            {/* Price Display */}
            <span className="text-[20px] font-medium">Rs. {salePrice || price}</span>
            {/* Show sale price if available */}
            {salePrice && (
              <>
                <span className="line-through text-gray-500">Rs. {price}</span>
              </>
            )}
          </div>

          {/* Size selection UI */}
          <div className="space-y-2">
            <div className="sizes mt-6">
              <h2 className="font-semibold mb-2">Available Size:</h2>
              <div className="flex  sm:gap-1">
                {sizes?.map((size, index) => (
                  <div
                    key={index}
                    onClick={() => handleSizeSelect(size)}
                    className={`h-[60px] w-[100px] flex items-center justify-center text-[16px] border cursor-pointer 
          ${selectedSize === size ? "border-black" : "border-gray-300 bg-transparent"}
          sm:text-[16px]   md:text-[18px]`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <SizeChart />

          </div>

          <div className="mt-10">
            <button onClick={handleAddToCart} className="uppercase w-full py-[14px] buttonThree text-white bg-[#111111] sm:text-[13px] text-[12px]">add to bag</button>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[18px]">PRODUCT DETAILS</AccordionTrigger>
                <AccordionContent className="text-[16px]">
                  <div className="rich-text">
                    <PortableText value={productdetails} />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Shiiping */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[18px]">SHIPPING</AccordionTrigger>
                <AccordionContent className="text-[16px]">
                  <ShippingPolicy />
                </AccordionContent>
              </AccordionItem>

              {/* Return */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[18px]">RETURNS</AccordionTrigger>
                <AccordionContent className="text-[16px]">
                  <ReturnPolicy />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>

          <div className="flex items-center gap-4 mt-5">
            <h1 className="text-[18px] font-medium">SHARE:</h1>
            <ShareButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
