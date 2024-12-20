"use client";
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react'

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const Banner = () => {
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
                const days = Math.floor(difference / (1000 * 60 * 60 * 12));
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
    return (
        <div className={`${poppins.className}`}>
            <div className='md:h-[500px] h-full flex md:flex-row  gap-7 md:gap-0 flex-col justify-evenly md:px-0 px-5 md:py-0 py-10  bg-black md:w-[90%] mx-auto my-16'>
                <div className='flex flex-col md:py-16 gap-5 md:gap-0 justify-between'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-[16px] font-semibold text-[#00FF66]'>Categories</p>
                        <h1 className='md:text-[48px] text-[30px] font-semibold text-[#FAFAFA]'>Enhance Your <br /> Music Experience</h1>
                    </div>
                    <div className="flex md:gap-5 gap-3">
                        <div className='bg-white md:w-[62px] md:h-[62px] w-[44px] h-[44px] rounded-full flex flex-col justify-center items-center'>
                            <p className="md:text-[16px] text-[13px] font-semibold">
                                {String(timeLeft.days).padStart(2, "0")}
                            </p>
                            <h1 className="md:text-[11px] text-[8px]">Days</h1>
                        </div>

                        <div className='bg-white  md:w-[62px] md:h-[62px] w-[44px] h-[44px] rounded-full flex flex-col justify-center items-center'>
                            <p className="md:text-[16px] text-[13px] font-semibold">
                                {String(timeLeft.hours).padStart(2, "0")}
                            </p>
                            <h1 className="md:text-[11px] text-[8px]">Hours</h1>
                        </div>

                        <div className='bg-white  md:w-[62px] md:h-[62px] w-[44px] h-[44px] rounded-full flex flex-col justify-center items-center'>
                            <p className="md:text-[16px] text-[13px] font-semibold">
                                {String(timeLeft.minutes).padStart(2, "0")}
                            </p>
                            <h1 className="md:text-[11px] text-[8px]">Minutes</h1>
                        </div>

                        <div className='bg-white  md:w-[62px] md:h-[62px] w-[44px] h-[44px] rounded-full flex flex-col justify-center items-center'>
                            <p className="md:text-[16px] text-[13px] font-semibold">
                                {String(timeLeft.seconds).padStart(2, "0")}
                            </p>
                            <h1 className="md:text-[11px] text-[8px]">Seconds</h1>
                        </div>
                    </div>

                    <button className='bg-[#00FF66] hover:bg-[#00FF50] hover:scale-105 duration-200 text-white rounded text-[16px] font-medium md:px-[48px] px-[38px] md:py-[16px] py-[12px] w-fit'>Buy Now!</button>
                </div>

                <div className="relative">
                    <Image
                        src="/images/radio.png"
                        alt="radio"
                        width={600}
                        height={420}
                        className="relative z-10 md:w-[600px] md:mt-20 hover:scale-110 duration-500"
                    />

                    <Image
                        src="/images/elip.png"
                        alt="elip"
                        width={500}
                        height={500}
                        className="absolute inset-0 z-0 h-[500px] top-[-2px] w-[600px] md:block hidden"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner