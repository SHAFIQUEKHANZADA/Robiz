import { Inter } from 'next/font/google'
// import { Poppins } from 'next/font/google'
import { FaRegHeart } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import SearchInput from './SearchInput'
import MobileMenuBar from './Navlink'
import CartPopup from './CartPopup'
import CustomDropdown from './Dropdown'

const inter = Inter({ subsets: ['latin'] })
// const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })
const dropdownData = [
    {
        label: "Category",
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
        label: "Services",
        items: [
            { href: "/web-development", text: "Web Development" },
            { href: "/mobile-apps", text: "Mobile Apps" },
            { href: "/digital-marketing", text: "Digital Marketing" },
            { href: "/seo-services", text: "SEO Services" },
            { href: "/ui-ux-design", text: "UI/UX Design" },
        ],
    },
    {
        label: "Resources",
        items: [
            { href: "/blogs", text: "Blogs" },
            { href: "/tutorials", text: "Tutorials" },
            { href: "/case-studies", text: "Case Studies" },
            { href: "/whitepapers", text: "Whitepapers" },
            { href: "/community", text: "Community" },
        ],
    },
];

const Nav = () => {
    return (
        <div className='h-[70px] justify-end flex flex-col gap-3 bg-transparent'>
            <div className='text-[#000000] flex items-center md:h-[38px] h-full justify-between w-[90%] mx-auto'>
                <MobileMenuBar />
                <div className="relative md:block hidden">
                    <input
                        type="email"
                        placeholder="What are you looking for?"
                        className="bg-[#F5F5F5] rounded py-3 pr-10 pl-4 h-[38px] w-full"
                    />
                    <FiSearch
                        className="h-6 w-6 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    />
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className={`${inter.className} text-[24px] md:pl-0 pl-[52px] font-bold`}>Robiz</h1>
                    <div className="flex items-center gap-6">
                        {dropdownData.map((dropdown, index) => (
                            <CustomDropdown key={index} label={dropdown.label} items={dropdown.items} />
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-6'>

                    <div className='flex items-center sm:gap-4 gap-3'>
                        <SearchInput />
                        <FaRegHeart className='sm:w-6 sm:h-6 w-5 h-5' />
                        {/* <RiShoppingCart2Line className='sm:w-6 sm:h-6 w-5 h-5' /> */}
                        <CartPopup />
                    </div>
                </div>
            </div>
            <div className="bg-[#000000] opacity-[30%] h-[1px] w-full md:block hidden" />
        </div>
    )
}

export default Nav