import TeamCarousel from '@/app/components/TeamCerocel'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { BiDollarCircle } from 'react-icons/bi'

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

const teamMembers = [
    {
        name: 'Tom Cruise',
        title: 'Founder & Chairman',
        image: '/images/imgone.png',
        twitter: 'https://twitter.com/tomcruise',
        instagram: 'https://instagram.com/tomcruise',
        linkedin: 'https://linkedin.com/in/tomcruise',
    },
    {
        name: 'Emma Watson',
        title: 'Managing Director',
        image: '/images/imgtwo.png',
        twitter: 'https://twitter.com/LeoDiCaprio',
        instagram: 'https://instagram.com/leonardodicaprio',
        linkedin: 'https://linkedin.com/in/leonardodicaprio',
    },
    {
        name: 'Will Smith',
        title: 'Product Designer',
        image: '/images/imgthree.png',
        twitter: 'https://twitter.com/RobertDowneyJr',
        instagram: 'https://instagram.com/robertdowneyjr',
        linkedin: 'https://linkedin.com/in/robertdowneyjr',
    },
    {
        name: 'Shafique Ur Rehman',
        title: 'Frontend Developer',
        image: '/images/imgfour.jpg',
        twitter: 'https://twitter.com/ChrisHemsworth',
        instagram: 'https://instagram.com/chrishemsworth',
        linkedin: 'https://linkedin.com/in/chrishemsworth',
    },
    {
        name: 'Mark zuckerberg',
        title: 'CEO of Meta',
        image: '/images/d.webp',
        twitter: 'https://twitter.com/Scarlett_Johansson',
        instagram: 'https://instagram.com/scarlett.johansson_official',
        linkedin: 'https://linkedin.com/in/scarlett-johansson',
    },
];

const Page = () => {
    return (
        <div className={`${poppins.className}`}>
            <div className={`flex md:flex-row flex-col justify-evenly items-center md:gap-0 gap-4 md:px-0 px-4 sm:my-16 my-10`}>
                <div className='md:h-[336px] md:w-[525px] flex flex-col justify-between overflow-hidden md:gap-0 gap-4'>
                    <h1 className='text-[54px] font-semibold'>Our Story</h1>
                    <p className='text-[16px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

                    <p className='text-[16px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>

                <Image src={"/images/about-main.png"} alt='mainImage' width={705} height={609} className='sm:w-[605px] sm:h-[509px]' />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:px-20 gap-10 sm:py-16 py-10 justify-items-center">
                {/* 1 */}
                <div className='w-[270px] h-[230px] flex flex-col justify-center items-center gap-1 rounded border border-black/30 group hover:border-none hover:shadow-2xl hover:bg-[#DB4444] transform transition-transform duration-500'>

                    <div className='w-[80px] h-[80px] bg-[#C1C0C1] group-hover:bg-[#E67C7C] rounded-full flex justify-center items-center mb-2'>
                        <div className='rounded-full bg-black group-hover:bg-white/50 h-[58px] w-[58px] flex justify-center items-center'>
                            <Image src={"/images/i1.png"} alt='icon-one' width={100} height={100} className='w-[30px] h-[30px] group-hover:text-black ' />
                        </div>
                    </div>

                    <h1 className='text-[32px] font-bold group-hover:text-white'>10.5k</h1>
                    <p className='text-[16px] group-hover:text-white'>Sallers active our site</p>
                </div>

                {/* 2 */}
                <div className='w-[270px] h-[230px] flex flex-col justify-center items-center gap-1 rounded border border-black/30 group hover:border-none hover:shadow-2xl hover:bg-[#DB4444] transform transition-transform duration-500'>

                    <div className='w-[80px] h-[80px] bg-[#C1C0C1] group-hover:bg-[#E67C7C] rounded-full flex justify-center items-center mb-2'>
                        <div className='rounded-full bg-black group-hover:bg-white/50 h-[58px] w-[58px] flex justify-center items-center'>
                            <BiDollarCircle className='w-[40px] h-[40px] text-white/90' />
                        </div>
                    </div>

                    <h1 className='text-[32px] font-bold group-hover:text-white'>33k</h1>
                    <p className='text-[16px] group-hover:text-white'>Monthly Product Sale</p>
                </div>

                {/* 3 */}
                <div className='w-[270px] h-[230px] flex flex-col justify-center items-center gap-1 rounded border border-black/30 group hover:border-none hover:shadow-2xl hover:bg-[#DB4444] transform transition-transform duration-500'>

                    <div className='w-[80px] h-[80px] bg-[#C1C0C1] group-hover:bg-[#E67C7C] rounded-full flex justify-center items-center mb-2'>
                        <div className='rounded-full bg-black group-hover:bg-white/50 h-[58px] w-[58px] flex justify-center items-center'>
                            <Image src={"/images/i3.png"} alt='icon-one' width={100} height={100} className='w-[30px] h-[30px] group-hover:text-black ' />
                        </div>
                    </div>

                    <h1 className='text-[32px] font-bold group-hover:text-white'>45k</h1>
                    <p className='text-[16px] group-hover:text-white'>Customer active in our site</p>
                </div>
                {/* 4 */}
                <div className='w-[270px] h-[230px] flex flex-col justify-center items-center gap-1 rounded border border-black/30 group hover:border-none hover:shadow-2xl hover:bg-[#DB4444] transform transition-transform duration-500'>

                    <div className='w-[80px] h-[80px] bg-[#C1C0C1] group-hover:bg-[#E67C7C] rounded-full flex justify-center items-center mb-2'>
                        <div className='rounded-full bg-black group-hover:bg-white/50 h-[58px] w-[58px] flex justify-center items-center'>
                            <Image src={"/images/i4.png"} alt='icon-one' width={100} height={100} className='w-[30px] h-[30px] group-hover:text-black ' />
                        </div>
                    </div>

                    <h1 className='text-[32px] font-bold group-hover:text-white'>25k</h1>
                    <p className='text-[16px] group-hover:text-white'>Anual gross sale in our site</p>
                </div>
            </div>

            <div className='sm:py-16 py-10'>
                <TeamCarousel teamMembers={teamMembers} />
            </div>

            <div className='flex sm:flex-row flex-col items-center text-center justify-center sm:gap-20 gap-12 sm:my-20 my-10'>
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

export default Page