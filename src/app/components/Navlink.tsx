"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { SlMenu } from "react-icons/sl";
import { IoIosArrowForward, IoIosArrowRoundBack } from "react-icons/io";

const MobileMenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);


    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveSubMenu(null);
    };

    const [menuAnimation, setMenuAnimation] = useState("");

    const toggleMenu = () => {
        if (isMenuOpen) {
            setMenuAnimation("flip-out");
            setTimeout(() => {
                setIsMenuOpen(false);
                setMenuAnimation("");
            }, 500);
        } else {
            setIsMenuOpen(true);
            setMenuAnimation("flip-in");
        }
    };



    return (
        <div className="md:hidden">
            {/* Menu Button / Close Button */}
            <div onClick={toggleMenu} className={`cursor-pointer ${menuAnimation}`}>
                {isMenuOpen ? (
                    <AiOutlineClose onClick={closeMenu} className="h-[22px] w-[22px]" />
                ) : (
                    <SlMenu className="h-[22px] w-[22px]" />
                )}
            </div>

            {/* Main Menu Drawer */}
            {isMenuOpen && !activeSubMenu && (
                <div className="fixed inset-0 z-50 text-black">
                    <div

                        className="relative w-full h-[90%] mt-20 bg-[#F7F7F7] p-4 flex flex-col items-start overflow-y-auto"
                        style={{
                            transform: "translateX(0%)",
                            transition: "transform 0.3s ease-in-out",
                        }}
                    >
                        <div data-aos="fade-up" data-aos-duration="600" onClick={() => setActiveSubMenu("SHOP")} className="flex items-center justify-between w-full">
                            <Link
                                href="#"
                                className="text-lg font-medium py-2"

                            >
                                SHOP
                            </Link>
                            <IoIosArrowForward className="text-[32px] font-extralight" />
                        </div>

                        <div data-aos="fade-up" data-aos-duration="600" className="w-full h-[0.1px] bg-black my-2"></div>
                        <div data-aos="fade-up" data-aos-duration="600" onClick={() => setActiveSubMenu("CORE_COLLECTION")} className="flex items-center justify-between w-full">
                            <Link
                                href="#"
                                className="text-lg font-medium py-2"

                            >
                                CORE COLLECTION
                            </Link>
                            <IoIosArrowForward className="text-[32px] font-extralight" />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="600" className="w-full h-[0.1px] bg-black my-2"></div>
                        <div data-aos="fade-up" data-aos-duration="600" onClick={() => setActiveSubMenu("ABOUT_ROBIZ")} className="flex items-center justify-between w-full">
                            <Link
                                href="#"
                                className="text-lg font-medium py-2"

                            >
                                ABOUT ROBIZ
                            </Link>
                            <IoIosArrowForward className="text-[32px] font-extralight" />
                        </div>
                    </div>
                </div>
            )}

            {/* Submenus */}
            {activeSubMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 text-black">
                    <div
                        className="relative h-[90%] mt-20 w-full bg-[#F7F7F7] p-4 flex flex-col items-start overflow-y-auto"
                        style={{
                            transform: "translateX(0%)",
                            transition: "transform 0.3s ease-in-out",
                        }}
                    >
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => setActiveSubMenu(null)}
                        >
                            <IoIosArrowRoundBack className="text-[40px]" />
                        </div>
                        {activeSubMenu === "SHOP" && (
                            <>
                                <Link href="#" className="text-lg font-medium py-2">
                                    MEN
                                </Link>
                                <Link href="#" className="text-lg font-medium py-2">
                                    WOMEN
                                </Link>
                                <Link href="#" className="text-lg font-medium py-2">
                                    SHIRT
                                </Link>
                                <Link href="#" className="text-lg font-medium py-2">
                                    PANTS
                                </Link>
                                <Link href="#" className="text-lg font-medium py-2">
                                    ALL
                                </Link>
                            </>
                        )}
                        {activeSubMenu === "CORE_COLLECTION" && (
                            <>
                                <Link href="#" className="text-lg font-medium py-2">
                                    NEW ARRIVALS
                                </Link>
                                <Link href="#" className="text-lg font-medium py-2">
                                    BESTSELLERS
                                </Link>
                                <Link href="#" className="text-lg font-medium py-2">
                                    LIMITED EDITIONS
                                </Link>
                            </>
                        )}
                        {activeSubMenu === "ABOUT_ROBIZ" && (
                            <>
                                <Link href="#" className="text-lg font-medium py-2">
                                    OUR STORY
                                </Link>
                                <Link href="#" className="text-lg font-medium py-2">
                                    SUSTAINABILITY
                                </Link>
                                <Link href="#" className="text-lg font-medium py-2">
                                    CONTACT US
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenuBar;
