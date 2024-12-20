import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

const ContactPage = () => {
    return (
        <div className={`${poppins.className} md:h-screen h-full flex relative`}>
            {/* Breadcrumb */}
            <div className="absolute top-10 sm:left-16 left-6">
                <Link href="/" className="text-gray-500 font-medium hover:underline">
                    Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-black">Contact</span>
            </div>

            {/* Main Content */}
            <div className="flex md:flex-row flex-col items-center w-full justify-between mb-10 md:mb-0 md:px-[70px] px-5 md:mt-10 mt-28 md:gap-0 gap-10">
                <div className="md:w-[340px] h-[457px] rounded py-12 shadow-[0px_2px_10px_rgba(0,0,0,0.10)] p-6 flex flex-col justify-between">
                    <div className="h-[122px] flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#DB4444] rounded-full h-10 w-10 flex justify-center items-center">

                                <Image
                                    src="/images/phone.png"
                                    alt="phone"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5"
                                />
                            </div>
                            <h1 className="text-[16px] font-medium">Call To Us</h1>

                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="text-[14px]">We are available 24/7, 7 days a week.</h1>
                            <h1 className="text-[14px]">Phone: +8801611112222</h1>
                        </div>
                    </div>
                    <div className="bg-black opacity-[30%] h-[1px] w-full" />
                    <div className="h-[180px] flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#DB4444] rounded-full h-10 w-10 flex justify-center items-center">

                                <Image
                                    src="/images/msg.png"
                                    alt="phone"
                                    width={20}
                                    height={20}
                                    className=" h-4"
                                />
                            </div>
                            <h1 className="text-[16px] font-medium">Write To US</h1>

                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="text-[14px]">Fill out our form and we will contact you within 24 hours.</h1>
                            <h1 className="text-[14px]">Emails: customer@exclusive.com</h1>
                            <h1 className="text-[14px]">Emails: support@exclusive.com</h1>
                        </div>
                    </div>
                </div>

                <div className="md:w-[800px] md:h-[457px] flex justify-center items-center rounded py-12 md:px-0 px-4 shadow-[0px_2px_10px_rgba(0,0,0,0.10)]">
                    <div className="md:w-[737px] w-full md:h-[377px] h-full flex flex-col justify-between md:gap-0 gap-6">
                        <div className="flex flex-wrap justify-between md:gap-0 gap-6">
                            <input type="text" placeholder="Your Name *" className="md:w-[235px] w-full h-[50px] rounded bg-[#F5F5F5] px-4" />
                            <input type="email" placeholder="Your Email *" className="md:w-[235px] w-full h-[50px] rounded bg-[#F5F5F5] px-4" />
                            <input type="number" placeholder="Your Phone *" className="md:w-[235px] w-full h-[50px] rounded bg-[#F5F5F5] px-4" />
                        </div>

                        <textarea
                            className="w-full md:h-[207px] h-[150px] rounded bg-[#F5F5F5] p-4"
                            placeholder="Your Message"
                        ></textarea>

                        <div className="flex md:justify-end ">
                            <button className="text-[16px] font-medium text-white bg-[#DB4444] rounded px-[48px] md:w-fit w-full py-[16px]">Send Massage</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
