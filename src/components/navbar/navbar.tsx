"use client"

import UserAvatar from './userAvatar';
import IndicatorsDropdown from './indicatorsDropdown';
import SideMenu from './sideMenu';
import { ModeToggle } from '../ui/darkmode/modeToggle';
import Logo from '../logo/logo';
import Link from 'next/link';

export default function Navbar() {
    
    return (
        <nav className="flex flex-col gap-6 md:gap-4 justify-center md:flex-row md:justify-between px-6 md:px-14 py-6 items-center lg:gap-20 top-0 fixed w-full text-sm lg:text-base font-semibold z-10"> 
            <Link href={"/"} className='cursor-pointer'>
                <Logo />
            </Link>
            <div className="flex items-center gap-3 md:gap-8 md:items-end" >
                <IndicatorsDropdown />
                <SideMenu />
                <UserAvatar />
                <ModeToggle />
            </div>
        </nav>
    )
}