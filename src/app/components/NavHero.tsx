import { Inter } from 'next/font/google'
// import { Poppins } from 'next/font/google'
import SearchInput from './SearchInput'
import MobileMenuBar from './Navlink'
import CartPopup from './CartPopup'
import CustomDropdown from './Dropdown'
import { Search } from './Search'

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

const NavHero = () => {
    return (
        <div className='md:h-[130px] h-[60px] md:pt-4 justify-end flex flex-col md:gap-3 bg-transparent hover:bg-[#F7F7F7] hover:text-[#000000] text-white'>
            <div className='flex md:items-end items-center md:h-[38px] h-full justify-between md:px-10 px-4'>
                <MobileMenuBar />
                <Search/>
              
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className={`${inter.className} text-[40px] md:pl-0 pl-[52px] font-bold`}>Robiz</h1>
                    <div className="md:flex hidden items-center gap-6">
                        {dropdownData.map((dropdown, index) => (
                            <CustomDropdown key={index} label={dropdown.label} items={dropdown.items} />
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-6'>

                    <div className='flex items-center sm:gap-4 gap-3'>
                        <SearchInput />
                        {/* <FaRegHeart className='sm:w-6 sm:h-6 w-5 h-5' /> */}
                        <CartPopup />
                    </div>
                </div>
            </div>
            <div className=" h-[1px]   md:mt-2  border-b-2 border-white w-[95%] mx-auto" /> 
        </div>
    )
}

export default NavHero