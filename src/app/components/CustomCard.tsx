import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";  
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
interface CustomCardProps {
  imageUrl: SanityImageSource;
  title: string;
  price?: number | string;
  salePrice?: number | string;
  onClick?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  imageUrl,
  title,
  price,
  salePrice,
  onClick,
}) => {
 
  const imageSrc = imageUrl ? urlFor(imageUrl).url() : "/placeholder.png"; 

  return (
    <div className="border lg:h-[530px] lg:w-[330px] sm:h-[400px] sm:w-[260px] w-[42vw] hover:border-black mb-4 mx-2" onClick={onClick}>
      <Image
        src={imageSrc}   
        alt={title}
        width={500}
        height={500}
        className="w-full lg:h-[430px] sm:h-[300px] object-cover object-top mb-3"
      />
   <div className="text-center">
   <h3 className="sm:text-lg text-[14px] font-semibold">{title}</h3>
      {salePrice ? (
        <>
          <p className="text-gray-700">Sale: ${salePrice}</p>
          <p className="text-sm text-red-500 line-through">Original: ${price}</p>
        </>
      ) : (
        <p className="text-gray-700">Price: ${price}</p>
      )}
   </div>
    </div>
  );
};

export default CustomCard;
