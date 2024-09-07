import React from 'react';
import Image from 'next/image';
import putko from '../../../public/putko.png'
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
import { RiHotelLine } from "react-icons/ri";
import { GoSync } from "react-icons/go";
import { MdOutlineSubscriptions } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { BiPlus } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import Header from "../components/Header/Header"

const ProfilePage = () => {
  return (
    
    <div>
      
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
        </button>

        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#292A34]">
            <Link href="/" class="flex items-center ps-2.5 mb-5 py-5">
                <Image src={putko} className="h-6 w-20 me-3 sm:h-7" alt="Putko Logo" />
            </Link>
            <ul class="space-y-2 font-medium">
                
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <RxDashboard className="text-white" />
                        <span className="font-medium text-sm">Overview</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <RiMenu2Fill className="text-white" />
                        <span className="font-medium text-sm">Reservation requests</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <MdOutlineEmail className="text-white" />
                        <span className="font-medium text-sm">News</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <LuCalendarDays className="text-white" />
                        <span className="font-medium text-sm">Occupancy calendar</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <MdOutlineShowChart className="text-white" />
                        <span className="font-medium text-sm">Statistics</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <FaRegStar className="text-white" />
                        <span className="font-medium text-sm">Rating</span>
                    </Link>
                </li>
                <div class="py-3 flex items-center text-sm text-[#666666] after:flex-1 after:border-t after:border-[#666666] after:ms-2">
                    SETTINGS
                </div>
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <MdEuro className="text-[#0085FF]" />
                        <span className="font-medium text-sm">Prices</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <MdOutlinePercent className="text-[#0085FF]" />
                        <span className="font-medium text-sm">Promotions and discounts</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <WiTime10 className="text-[#0085FF]" />
                        <span className="font-medium text-sm">Last minute</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <RiHotelLine className="text-[#0085FF]" />
                        <span className="font-medium text-sm">Accommodation</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <GoSync className="text-[#0085FF]" />
                        <span className="font-medium text-sm">calendar synchronization</span>
                    </Link>
                </li>
                <div class="py-3 flex items-center text-sm text-[#666666] after:flex-1 after:border-t after:border-[#666666] after:ms-2">
                    SUBSCIPTIONS AND INVOICES
                </div>
                <li>
                    <Link href="#" className='flex items-center gap-5 p-2 text-white rounded-lg  hover:bg-[#41424e] dark:hover:bg-gray-700 group'>
                        <MdOutlineSubscriptions className="text-[#999999]" />
                        <span className="font-medium text-sm">Subscription</span>
                    </Link>
                </li>
            </ul>
        </div>
        </aside>

        
        <div class="p-4 sm:ml-64">
        {/* <div class="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700">
            <div class="grid grid-cols-3 gap-4 mb-4">
            <div className='flex justify-between'>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <h1 className='text-[#292A34] font-bold text-2xl'>Overview</h1>
                    <p className='text-[#292A34B2] text-xs font-medium'>no warning</p>
                </div>
            </div>
            <div className='flex flex-row'>
                <CiSearch />
                <div className='flex flex-row'>
                    <BiPlus/>
                    <h1 className='text-[#292A34]'>Add Accommodation</h1>
                    <div className='flex flex-row'>
                <div className='flex flex-row'>
                    <BsPersonCircle />
                    <h1 className='text-[#292A34]'>Martin</h1>
                </div>
            </div>
                </div>
            </div>
            
        </div>
                
                
            </div>
            <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                </p>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
            </div>
        </div> */}
        <Header />
        <div className='flex justify-between'>
            <div>
                <h1 className='text-[#292A34] text-8xl'>6 <span>September</span></h1>
            </div>
            <div>
            <Image src={putko} className='w-10 rounded-full' />
            </div>
            
        </div>
        </div>

    </div>
  );
};

export default ProfilePage;
