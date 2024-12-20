import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React from 'react'

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const Featured = () => {
    return (
        <div className={`${poppins.className} relative flex flex-col justify-between my-12`}>
            <div className="flex items-center gap-4 mb-5 md:px-[65px] px-5">
                <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-md" />
                <h1 className="text-[16px] font-semibold text-[#DB4444] hover:underline">
                    Featured
                </h1>
            </div>
            <div className="flex justify-between items-center md:px-[65px] px-5">
                <h1 className="md:text-[36px] text-[28px] font-semibold">New Arrival</h1>
            </div>
            <div className='grid md:grid-cols-4 md:h-[600px]  md:gap-4  md:px-[65px] mt-12'>
                <div className="bg-black col-span-2 row-span-2 md:rounded flex h-[500px] md:h-full items-end justify-center relative group overflow-hidden">
                    <Image
                        src="/images/f1.png"
                        alt="Main Image"
                        width={511}
                        height={511}
                        quality={100}
                        priority
                        className="group-hover:scale-110  transition-transform duration-500 ease-in-out object-cover"
                    />

                    <div className='text-white absolute md:bottom-7 md:left-7 left-3 bottom-5 h-[122px] w-[242px] flex flex-col justify-between'>
                        <h1 className='text-[24px] font-semibold'>PlayStation 5</h1>
                        <p className='text-[14px]'>Black and White version of the PS5 coming out on sale.</p>

                        <button className='underline underline-offset-8 text-[16px font-medium] text-left'>Shop Now</button>
                    </div>
                </div>
                <div className='bg-[#0C0C0C] col-span-2 md:rounded relative h-[284px] flex justify-end'>
                    <Image
                        src="/images/f2.png"
                        alt="Main Image"
                        width={432}
                        height={200}
                        quality={100}
                        priority
                        className="object-cover md:rounded"
                    />

                    <div className='text-white absolute md:bottom-7 md:left-7 left-3 bottom-5 h-[122px] w-[255px] flex flex-col justify-between'>
                        <h1 className='text-[24px] font-semibold'>Women’s Collections</h1>
                        <p className='text-[14px]'>Featured woman collections that give you another vibe.</p>

                        <button className='underline underline-offset-8 text-[16px font-medium] text-left'>Shop Now</button>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] md:rounded relative h-[300px] flex justify-center items-center group'>
                    <Image
                        src="/images/f3.png"
                        alt="Main Image"
                        width={210}
                        height={220}
                        quality={100}
                        priority
                        className="group-hover:scale-110 md:h-[220px] md:w-[210] h-[170px] w-[150px] transition-transform duration-500 ease-in-out object-cover"
                    />

               
                    <div className='text-white absolute md:bottom-7 md:left-7 left-3 bottom-5 h-[85px] md:w-[191px] flex flex-col justify-between'>
                        <h1 className='text-[24px] font-semibold'>Speakers</h1>
                        <p className='text-[12px]'>Amazon wireless speakers</p>

                        <button className='underline underline-offset-8 text-[16px font-medium] text-left'>Shop Now</button>
                    </div>
                </div>
                <div className='bg-[#2B2B2B] md:rounded relative h-[300px] flex justify-center items-center group'>
                    <Image
                        src="/images/f4.png"
                        alt="Main Image"
                        width={201}
                        height={203}
                        quality={100}
                        priority
                        className="group-hover:scale-110 md:h-[203px] md:w-[201px] h-[153px] w-[151px] transition-transform duration-500 ease-in-out object-cover"
                    />

                    <div className='text-white absolute md:bottom-7 md:left-7 left-3 bottom-5 h-[85px] md:w-[191px] flex flex-col justify-between'>
                        <h1 className='text-[24px] font-semibold'>Perfume</h1>
                        <p className='text-[12px]'>GUCCI INTENSE OUD EDP</p>

                        <button className='underline underline-offset-8 text-[16px font-medium] text-left'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured