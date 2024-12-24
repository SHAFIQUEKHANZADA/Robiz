import { NextResponse } from "next/server";
import sanityClient from "../../../../lib/sanityClient";
import { groq } from "next-sanity";

interface Product {
  title: string;
  price: number;
  salePrice: number;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  slug: string;
}

const query = groq`
  *[_type == "men"]{
    title,
    price,
    salePrice,
    mainImage,
    slug
  }
`;

export async function GET() {
  try {
    const products: Product[] = await sanityClient.fetch(query);
    console.log(products);
    products.forEach((product) => {
      if (product.mainImage) {
        console.log('Image URL:', product.mainImage.asset._ref);  
      } else {
        console.log('No image found for product:', product.title);
      }
    });

    return NextResponse.json({ products });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Failed to fetch Men category products." },
      { status: 500 }
    );
  }
}
