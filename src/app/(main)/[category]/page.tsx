"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Archivo } from "next/font/google";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";  
import Link from "next/link";

const archivo = Archivo({ subsets: ["latin"], weight: ["400"] });

interface Product {
  title: string;
  price: number;
  salePrice: number;
  sideImages: {
    asset: {
      _ref: string;
      url?: string;
    };
    alt: string;
  }[]; 
  slug: {
    current: string;
  };
}

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [columns, setColumns] = useState<number>(4);  
  const [cardSize, setCardSize] = useState<"xl" | "lg" | "md">("lg"); // Explicit type here

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 20,
    });

    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products/${params.category}`);
        const data = await response.json();
        if (response.ok) {
          setProducts(data.products);
        } else {
          setError(data.error || "Failed to fetch products");
        }
      } catch (err) {
        console.log(err)
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params.category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Handle grid column changes and card size changes
  const handleColumnChange = (numColumns: number, size: "xl" | "lg" | "md") => {  // Explicit type for `size`
    setColumns(numColumns);
    setCardSize(size);
  };

  const cardSizeClasses = {
    xl: "w-full h-[310px] sm:h-[650px] text-[14px]",
    lg: "w-full h-[310px] sm:h-[450px] text-[16px]",
    md: "w-full h-[310px] sm:h-[520px] text-[18px]",
  };

  return (
    <div>
      <p
        data-aos="fade-up"
        data-aos-duration="600"
        className={`${archivo.className} uppercase text-center text-[28px] font-semibold`}
      >
        {params.category}
      </p>

      {/* Filter dots */}
      <div className="justify-center mt-4 hidden sm:flex">
        <button
          onClick={() => handleColumnChange(3, "md")}
          className={`w-3 h-3 mx-[2px] ${columns === 3 ? "bg-black" : "bg-transparent border border-black"}`}
        ></button>
        <button
          onClick={() => handleColumnChange(4, "lg")}
          className={`w-3 h-3 mx-[2px] ${columns === 4 ? "bg-black" : "bg-transparent border border-black"}`}
        ></button>
        <button
          onClick={() => handleColumnChange(5, "xl")}
          className={`w-3 h-3 mx-[2px] ${columns === 5 ? "bg-black" : "bg-transparent border border-black"}`}
        ></button>
      </div>

      {/* Grid display */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-${columns} lg:grid-cols-${columns} xl:grid-cols-${columns} mt-8 sm:gap-5 gap-3 gap-y-6 mx-[10px] sm:mx-6`}
      >
        {products.map((product) => (
          <Link key={product.slug.current}  href={`/${params.category}/${product.slug.current}`}>
          <div
            key={product.slug.current}
            className={`border flex flex-col justify-between pb-3 hover:border-black ${cardSizeClasses[cardSize]}`}
          >
             <Image
              src={urlFor(product.sideImages[0]?.asset).url() || "/placeholder.png"}
              alt={product.sideImages[0]?.alt || "Product Image"}
              width={500}
              height={500}
              className="w-full h-[85%] object-cover object-top"
            />
            <div className="text-center mt-2">
              <h3 className="line-clamp-1">{product.title}</h3>
              {product.salePrice ? (
                <div className="flex justify-center items-center gap-3 text-[16px] sm:mt-2">
                  <p className="text-gray-900 font-semibold">Rs.{product.salePrice}</p>
                  <p className="text-sm text-red-500 line-through">Rs.{product.price}</p>
                </div>
              ) : (
                <p className="text-gray-900 font-semibold">Rs.{product.price}</p>
              )}
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
