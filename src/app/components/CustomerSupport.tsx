import { Poppins } from 'next/font/google';
import Image from 'next/image'
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const CustomerSupport = () => {
    return (
        <div className={`${poppins.className}`}>
            <div className='flex sm:flex-row flex-col items-center text-center justify-center sm:gap-20 gap-12 my-20 md:my-32'>
                {/* 1 */}
                <div className='w-[250px] h-[161px] flex flex-col justify-between items-center'>
                    <div className='w-[80px] h-[80px] bg-[#C1C0C1] group-hover:bg-[#E67C7C] rounded-full flex justify-center items-center mb-2'>
                        <div className='rounded-full bg-black group-hover:bg-white/50 h-[58px] w-[58px] flex justify-center items-center'>
                            <Image src={"/images/delivery.png"} alt='icon-one' width={100} height={100} className='w-[40px] h-[40px] group-hover:text-black ' />
                        </div>
                    </div>

                    <h1 className='text-[20px] font-semibold'>FREE AND FAST DELIVERY</h1>
                    <p className='text-[14px]'>Free delivery for all orders over $140</p>
                </div>
                {/* 2 */}
                <div className='w-[250px] h-[161px] flex flex-col justify-between items-center'>
                    <div className='w-[80px] h-[80px] bg-[#C1C0C1] group-hover:bg-[#E67C7C] rounded-full flex justify-center items-center mb-2'>
                        <div className='rounded-full bg-black group-hover:bg-white/50 h-[58px] w-[58px] flex justify-center items-center'>
                            <Image src={"/images/customer.png"} alt='icon-one' width={100} height={100} className='w-[40px] h-[40px] group-hover:text-black ' />
                        </div>
                    </div>

                    <h1 className='text-[20px] font-semibold'>24/7 CUSTOMER SERVICE</h1>
                    <p className='text-[14px]'>Friendly 24/7 customer support</p>
                </div>
                {/* 3 */}
                <div className='w-[250px] h-[161px] flex flex-col justify-between items-center'>
                    <div className='w-[80px] h-[80px] bg-[#C1C0C1] group-hover:bg-[#E67C7C] rounded-full flex justify-center items-center mb-2'>
                        <div className='rounded-full bg-black group-hover:bg-white/50 h-[58px] w-[58px] flex justify-center items-center'>
                            <Image src={"/images/secure.png"} alt='icon-one' width={100} height={100} className='w-[40px] h-[40px] group-hover:text-black ' />
                        </div>
                    </div>

                    <h1 className='text-[20px] font-semibold'>MONEY BACK GUARANTEE</h1>
                    <p className='text-[14px]'>We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerSupport