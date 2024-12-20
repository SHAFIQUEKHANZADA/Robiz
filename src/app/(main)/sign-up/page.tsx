import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })
const Page = () => {
    return (
        <div className={`${poppins.className} flex md:flex-row flex-col sm:gap-0 gap-10 justify-evenly items-center my-10`}>
            <Image src={"/images/sign.png"} alt='' width={805} height={781} className='sm:w-[705px] sm:h-[681px]' />

            <div className='sm:w-[371px] h-[530px] flex flex-col justify-between'>
               <div className='flex flex-col gap-3'>
               <h1 className='font-medium text-[36px]'>Create an account</h1>
               <p className='text-[16px]'>Enter your details below</p>
               </div>

                <div className='flex flex-col gap-5'>
                    <input
                        type="text"
                        placeholder="Name"
                        className="border-b border-gray-300 h-8 py-5 w-full focus:outline-none focus:border-blue-500 placeholder-gray-500"
                    />
                    <input
                        type="text"
                        placeholder="Email or Phone Number"
                        className="border-b border-gray-300  h-8 py-5 w-full focus:outline-none focus:border-blue-500 placeholder-gray-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border-b border-gray-300  h-8 py-5 w-full focus:outline-none focus:border-blue-500 placeholder-gray-500"
                    />

                    <div className='flex flex-col gap-4'>
                    <button className='bg-[#DB4444] text-[16px] font-medium text-white rounded w-full py-[16px]'>Create Account</button>
                    <button className='flex items-center gap-2 text-[16px] py-[16px] border rounded w-full justify-center'><span><Image src={"/images/icon-Google.png"} alt='google' width={100} height={100} className='w-6 h-6' /></span> Sign up with Google</button>
                    </div>
                </div>
                
                <p className='text-center text-[16px] opacity-[70%]'>Already have account? <span className='underline'><Link href={"/login"}>Log in</Link></span></p>
            </div>
        </div>
    )
}

export default Page