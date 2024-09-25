"use client"

import UserAvatar from './userAvatar';
import IndicatorsDropdown from './indicatorsDropdown';
import SideMenu from './sideMenu';
import { ModeToggle } from '../ui/darkmode/modeToggle';
import Logo from '../logo/logo';

export default function Navbar() {
    
    return (
        <nav className="flex flex-col gap-4 justify-center md:flex-row md:justify-between px-14 py-6 items-center lg:gap-20 top-0 fixed w-full text-sm lg:text-base font-semibold"> 
            <Logo />
            <div className="flex gap-8 items-end" >
                <IndicatorsDropdown />
                <SideMenu />
                <UserAvatar />
                <ModeToggle />
            </div>
        </nav>
    )
}