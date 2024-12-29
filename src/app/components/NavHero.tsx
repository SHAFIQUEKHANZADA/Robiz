import { Inter } from 'next/font/google'
import SearchInput from './SearchInput'
import MobileMenuBar from './Navlink'
import CartPopup from './CartPopup'
import CustomDropdown from './Dropdown'
import { Search } from './Search'
import { FiUser } from 'react-icons/fi'

const inter = Inter({ subsets: ['latin'] })
const dropdownData = [
    {
        label: "SHOP",
        items: [
            { href: "/technology-and-innovation", text: "Technology and Innovation" },
            { href: "/sports", text: "Sports" },
            { href: "/business", text: "Business" },
            { href: "/health-and-fitness", text: "Health & Fitness" },
            { href: "/news-and-currentaffairs", text: "News and Current Affairs" },
            { href: "/food-and-drink", text: "Food and Drink" },
        ],
    },
    {
        label: "CORE COLLECTION",
        items: [
            { href: "/web-development", text: "Web Development" },
            { href: "/mobile-apps", text: "Mobile Apps" },
            { href: "/digital-marketing", text: "Digital Marketing" },
            { href: "/seo-services", text: "SEO Services" },
            { href: "/ui-ux-design", text: "UI/UX Design" },
        ],
    },
    {
        label: "ABOUT ROBIZ",
        items: [
            { href: "/tutorials", text: "PRESS" },
            { href: "/case-studies", text: "LOOKBOOK" },
            { href: "/whitepapers", text: "ABOUT US" },
            { href: "/community", text: "CONTACT US" },
        ],
    },
];

const NavHero = () => {
    return (
        <div className="md:h-[130px] h-[60px] md:pt-4 justify-end flex flex-col md:gap-3 bg-transparent group hover:bg-[#F7F7F7] duration-150 text-white">
            <div className="flex md:items-end items-center md:h-[38px] h-full justify-between md:px-10 px-4 group-hover:text-black">
                <MobileMenuBar />
                <Search />

                <div className="flex flex-col justify-center items-center gap-4 ml-5">
                    <h1
                        className={`${inter.className} text-[40px] md:pl-0 pl-[52px] uppercase font-bold group-hover:text-black`}
                    >
                        Robiz
                    </h1>
                    <div className="md:flex hidden items-center gap-5">
                        {dropdownData.map((dropdown, index) => (
                            <CustomDropdown
                                key={index}
                                label={dropdown.label}
                                items={dropdown.items}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <SearchInput />
                        <CartPopup />
                        <FiUser className="text-2xl group-hover:text-black" />
                    </div>
                </div>
            </div>
            <div className="md:mt-2 border-b border-white group-hover:border-black w-[95%] mx-auto" />
        </div>
    );
};

export default NavHero;
