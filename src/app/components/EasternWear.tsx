"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Archivo } from "next/font/google";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HoverdCard from "./CardHoverd";
import { urlFor } from "@/sanity/lib/image"; 

const archivo = Archivo({ subsets: ["latin"], weight: ["400"] });

interface Product {
    title: string;
    price: number;
    salePrice: number;
    sideImages: {
        asset: {
            _ref: string;
        };
        alt: string;
    }[];
    slug: {
        current: string;
    };
}

const EasternWear = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex] = useState<number>(0);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/products/easternwear`);
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        AOS.init({
            once: true,
            offset: 20,
        });
    }, []);

    const getImageUrl = (imageRef: string | undefined) => {
        return imageRef ? urlFor(imageRef).url() : "/placeholder.png";
    };

    return (
        <div className={`${archivo.className} sm:py-5`}>
            <div data-aos="fade-up" data-aos-duration="600" className="md:px-10 px-4  text-left flex flex-col justify-center my-5">
                <h2 className="sm:text-[30px] text-[20px] font-medium mb-2 text-[#111111]">
                    EASTERN WEAR
                </h2>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <button className="underline underline-offset-8">
                            Shop All
                        </button>
                    </div>
                    <div className="sm:flex hidden items-center gap-2">
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className={`text-[50px] ${activeIndex === 0 ? "text-gray-400" : "text-[#111111]"} `}
                            disabled={activeIndex === 0}
                        >
                            <IoIosArrowRoundBack />
                        </button>

                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className={`text-[50px] ${activeIndex === products.length - 1 ? "text-gray-400" : "text-[#111111]"}`}
                            disabled={activeIndex === products.length - 1}
                        >
                            <IoIosArrowRoundForward />
                        </button>
                    </div>
                </div>
            </div>

            {loading && <p>Loading...</p>}

            {!loading && products.length > 0 && (
                <div data-aos="fade-up" data-aos-duration="600" className="sm:pl-5">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={3}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        className="carousel__wrapper"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.slug.current}>
                                <HoverdCard
                                    imageUrl={getImageUrl(product.sideImages?.[0]?.asset._ref)}
                                    sideImages={product.sideImages}
                                    title={product.title}
                                    price={product.price}
                                    salePrice={product.salePrice}
                                    category={""}
                                    slug={product.slug.current}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
};

export default EasternWear;
