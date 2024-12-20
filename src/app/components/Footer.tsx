import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { FaApple } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })
const Footer = () => {
    return (
        <div className='md:h-[440px] bg-[#000000] flex flex-col md:items-center justify-end gap-[80px] py-2 md:pt-0 pt-10 md:px-0 px-3'>
            <div className={`${poppins.className} flex flex-col md:flex-row gap-10 lg:gap-[87px] text-[#FAFAFA]`}>
                <div className='w-[217px] sm:h-[188px] gap-2 flex flex-col justify-between'>
                    <h1 className={`${inter.className} text-[24px] font-bold`}>Robiz</h1>
                    <p className={`text-[20px]`}>Subscribe</p>
                    <p className={`font-normal text-[16px]`}>Get 10% off your first order</p>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border-[1.5px] bg-transparent rounded py-3 pr-10 pl-4 w-full"
                        />
                        <Image
                            src="/images/sendicon.png"
                            alt="send"
                            width={100}
                            height={100}
                            className="h-6 w-6 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                        />
                    </div>


                </div>
                <div className={`sm:h-[180px] gap-2 w-[175px] flex flex-col justify-between`}>
                    <h1 className="font-medium text-[20px] mb-1">Support</h1>
                    <p className='text-[16px] font-normal'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className='text-[16px] font-normal'>exclusive@gmail.com</p>
                    <p className='text-[16px] font-normal'>+88015-88888-9999</p>
                </div>
                <div className={`w-[123px] sm:h-[236px] gap-2 flex flex-col justify-between`}>
                    <h1 className='font-medium text-[20px] mb-1'>Account</h1>
                    <p className='font-normal text-[16px]'>My Account</p>
                    <p className='font-normal text-[16px]'>Login / Register</p>
                    <p className='font-normal text-[16px]'>Cart</p>
                    <p className='font-normal text-[16px]'>Wishlist</p>
                    <p className='font-normal text-[16px]'>Shop</p>
                </div>
                <div className='sm:h-[196px] gap-2 w-[109px] flex flex-col justify-between'>
                    <h1 className='font-medium text-[20px] mb-1'>Quick Link</h1>
                    <p className='font-normal text-[16px]'>Privacy Policy</p>
                    <p className='font-normal text-[16px]'>Terms Of Use</p>
                    <p className='font-normal text-[16px]'>FAQ</p>
                    <p className='font-normal text-[16px]'>Contact</p>
                </div>
                <div className='sm:h-[210px] gap-4 w-[198px] flex flex-col justify-between'>
                    <h1 className='text-[20px] font-medium'>Download App</h1>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[12px] opacity-[70%]'>Save $3 with App New User Only</p>
                        <div className='flex gap-2'>
                            <div>
                                <Image src={"/images/code.png"} alt='QR code' width={100} height={100} className='h-[76px] w-[76px]' />
                            </div>
                            <div className="flex flex-col justify-between">
                                <div className="flex gap-1 bg-[#000000] items-center justify-center border-[0.6px] rounded h-[32px] w-[110px]">
                                    <div className="flex items-center">
                                        <Image src={"/images/play.png"} alt="playstore" width={24} height={24} />
                                    </div>
                                    <div>
                                        <h1 className="text-white/80 text-[8px] font-light">GET IT ON</h1>
                                        <p className="text-white/80 text-[10px] font-semibold">GOOGLE PLAY</p>
                                    </div>
                                </div>

                                <div className="flex gap-1 bg-[#000000] items-center justify-center border-[0.6px] rounded h-[32px] w-[110px]">
                                    <div className="flex items-center">
                                        <FaApple className="text-white text-[24px]" />
                                    </div>
                                    <div>
                                        <p className="text-white text-[8px] font-light">Download on the</p>
                                        <h1 className="text-white text-[10px] font-semibold leading-none">App Store</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[24px] items-center'>
                        <Image src={"/images/facebook.png"} alt='facebook' width={100} height={100} className='h-6 w-6' />
                        <Image src={"/images/twitter.png"} alt='Twitter' width={100} height={100} className='h-6 w-6' />
                        <GrInstagram className='h-6 w-6 text-[#D5D5D5]/90' />
                        <Image src={"/images/linkedin.png"} alt='linkedin' width={100} height={100} className='h-6 w-6' />
                    </div>
                </div>
            </div>

            <div className='w-[100%] opacity-[40%] text-[#FFFFFF] flex flex-col gap-3'>
                <div className="bg-[#FFFFFF] opacity-[40%] h-[1px] w-full" />
                <p className="text-center font-normal text-[16px]">
                    © Copyright Rimel 2022. All right reserved
                </p>
            </div>
        </div>
    )
}

export default Footer