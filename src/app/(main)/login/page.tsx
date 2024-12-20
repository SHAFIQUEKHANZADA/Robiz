import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })
const Page = () => {
    return (
        <div className={`${poppins.className} flex md:flex-row flex-col sm:gap-0 gap-10 justify-evenly items-center my-10`}>
            <Image src={"/images/sign.png"} alt='' width={805} height={781} className='sm:w-[705px] sm:h-[681px]' />

            <div className='sm:w-[371px] h-[326px] flex flex-col justify-between'>
               <div className='flex flex-col gap-3'>
               <h1 className='font-medium text-[36px]'>Log in to Exclusive</h1>
               <p className='text-[16px]'>Enter your details below</p>
               </div>
                <div className='flex flex-col gap-8'>
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

                    <div className='flex justify-between items-center'>
                    <button className='bg-[#DB4444] text-[16px] font-medium text-white rounded py-[16px] px-[48px]'>Log In</button>
                    
                    <p className='text-[#DB4444] text-[16px]'>Forget Password?</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Page