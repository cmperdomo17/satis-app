"use client"

import UserAvatar from './userAvatar';
import IndicatorsCombobox from './indicatorsCombobox';
import SideMenu from './sideMenu';
import { ModeToggle } from '../ui/darkmode/modeToggle';
import Logo from '../logo/logo';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed flex-shrink-0 top-0 z-50 flex w-full flex-col items-center justify-center gap-2 py-1 text-sm font-semibold md:flex-row md:justify-between md:px-8 lg:gap-16 lg:text-base backdrop-blur-lg bg-transparent">
            <Link href={"/"} className="cursor-pointer">
                <Logo />
            </Link>
            <div className="flex items-center gap-3 md:gap-5">
                <IndicatorsCombobox />
                <SideMenu />
                <UserAvatar />
                <ModeToggle />
            </div>
        </nav>
    );
}