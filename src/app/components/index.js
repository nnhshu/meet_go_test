"use client";
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { Navbar, NavbarContent, Link } from '@nextui-org/react';
import { FiMapPin, FiUser, FiLink, FiTv } from "react-icons/fi";
import { usePathname } from 'next/navigation';

const MyNavbar = () => {
    const currentRoute = usePathname();
    
  return (
    <div className='navbar-wrap fixed bottom-0 left-0 right-0'>
      <div className='navbar-container grid gap-4 grid-cols-5 w-full'>
        <div className={`navbar-item ${currentRoute === '/bot' ? 'active' : ''}`}>
          <Link href="/bot" className='flex flex-col items-center justify-center gap-2 text-white text-sm'>
            <FiMapPin size={24} />
            Map
          </Link>
        </div>
        <div className={`navbar-item ${currentRoute === '/bot/stats' ? 'active' : ''}`}>
          <Link href="/bot/stats" className='flex flex-col items-center justify-center gap-2 text-white text-sm'>
            <FiTv size={24} />
            Stats
          </Link>
        </div>
        <div className='navbar-item navbar-item-center'>
          <Link href="#" className='flex flex-col items-center justify-center gap-2 text-white text-sm'>
            <Image
              src="/img/icons/icon_home.svg"
              width={24}
              height={24}
              alt="MeetGo"
            />
          </Link>
        </div>
        <div className={`navbar-item ${currentRoute === '/bot/invite' ? 'active' : ''}`}>
          <Link href="/bot/invite" className='flex flex-col items-center justify-center gap-2 text-white text-sm'>
            <FiLink size={24} />
            Invite
          </Link>
        </div>
        <div className={`navbar-item ${currentRoute === '/bot/profile' ? 'active' : ''}`}>
          <Link href="/bot/profile" className='flex flex-col items-center justify-center gap-2 text-white text-sm'>
            <FiUser size={24} />
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;