import React from 'react';
import Image from 'next/image';
import putko from '../../../public/putko.png';
import Link from 'next/link';


import { RxDashboard } from "react-icons/rx";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineShowChart } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { MdEuro } from "react-icons/md";
import { MdOutlinePercent } from "react-icons/md";
import { WiTime10 } from "react-icons/wi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiHotelLine } from "react-icons/ri";
import { GoSync } from "react-icons/go";
import { MdOutlineSubscriptions } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { BiPlus } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { FaHourglassHalf } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Header from "../components/Header/Header";
import Card from "./component/Card";

const ProfilePage = () => {
    return (
        <div className="flex bg-[#EEF1F5]">
            {/* Sidebar */}
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#292A34]">
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <Link href="/" className="flex items-center ps-2.5 mb-5 py-5">
                        <Image src={putko} className="h-6 w-20 me-3 sm:h-7" alt="Putko Logo" />
                    </Link>
                    <ul className="space-y-2 font-medium text-white">
                        {[
                            { icon: <RxDashboard />, text: 'Overview', href: '#' },
                            { icon: <RiMenu2Fill />, text: 'Reservation requests', href: '#' },
                            { icon: <MdOutlineEmail />, text: 'News', href: '#' },
                            { icon: <LuCalendarDays />, text: 'Occupancy calendar', href: '#' },
                            { icon: <MdOutlineShowChart />, text: 'Statistics', href: '#' },
                            { icon: <FaRegStar />, text: 'Rating', href: '#' },
                            { icon: <MdEuro />, text: 'Prices', href: '#' },
                            { icon: <MdOutlinePercent />, text: 'Promotions and discounts', href: '#' },
                            { icon: <WiTime10 />, text: 'Last minute', href: '#' },
                            { icon: <RiHotelLine />, text: 'Accommodation', href: '#' },
                            { icon: <GoSync />, text: 'Calendar synchronization', href: '#' },
                            { icon: <MdOutlineSubscriptions />, text: 'Subscription', href: '#' },
                        ].map(({ icon, text, href }) => (
                            <li key={text}>
                                <Link href={href} className='flex items-center gap-5 p-2 rounded-lg hover:bg-[#41424e]'>
                                    {icon}
                                    <span className="font-medium text-sm">{text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-4 sm:ml-64">
                {/* Mobile menu button */}
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>

                {/* Header */}
                <Header />

                {/* Date and Image */}
                <div className='flex justify-between mx-5 bg-[#EEF1F5] py-5'>
                    <div className='flex flex-row gap-5 items-center'>
                        <h1 className='text-[#292A34] text-8xl'>6</h1>
                        <span className='text-[#292A34] text-2xl'>September</span>
                    </div>
                    <div>
                        <Image src={putko} className='w-20 rounded-full' alt="Profile Image" />
                    </div>
                </div>

                {/* Subscription Info */}
                <div className='flex justify-between bg-[#FFFDCC] py-5 mx-5 mb-5'>
                    <div className='flex flex-row gap-5 items-center'>
                        <FaHourglassHalf size={45} />
                        <div className='flex flex-col'>
                            <h1 className='text-[#292A34] font-semibold text-base'>Subscription ends Aug 27, 2025</h1>
                            <p>355 days left until expiration</p>
                        </div>
                    </div>
                    <button className='bg-[#292A34] py-3 px-6 rounded-md text-white'>Extend Subscription</button>
                </div>

                {/* Cards Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-[#EEF1F5]'>
                    {[
                        { title: "Reservation requests", Icon: RiMenu2Fill },
                        { title: "News", Icon: MdOutlineEmail },
                        { title: "Occupancy calendar", Icon: LuCalendarDays },
                        { title: "Statistics", Icon: MdOutlineShowChart },
                        { title: "Rating", Icon: FaRegStar },
                        { title: "Prices", Icon: MdEuro },
                        { title: "Promotions and discounts", Icon: MdOutlinePercent },
                        { title: "Last minute", Icon: WiTime10 },
                        { title: "Accommodation", Icon: RiHotelLine },
                        { title: "Synchronization", Icon: GoSync },
                        { title: "Subscription", Icon: MdOutlineSubscriptions },
                        { title: "Additional services", Icon: HiOutlineDotsHorizontal },
                        { title: "Invoices", Icon: LiaFileInvoiceSolid },
                        { title: "Billing data", Icon: HiMenuAlt2 },
                    ].map(({ title, Icon }, index) => (
                        <Card 
                            key={index}
                            title={title}
                            Icon={Icon}
                            iconSize="4xl"
                            customClasses="bg-gray-100"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
