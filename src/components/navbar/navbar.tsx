"use client"

import Image from "next/image"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { titillium_bold } from "@/utils/fonts"
import { useState } from "react"
import { indicadores } from "@/utils/data";
import { Checkbox } from "@/components/ui/checkbox"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="flex justify-between px-14 py-6 items-center gap-7 lg:gap-20 top-0 fixed w-full text-sm lg:text-base font-semibold"> 
            <Image
                src="/satis_logo.png"
                alt="Satis"
                width="230"
                height="230"
            />
            
            <div className="flex gap-12 items-end" >
                <DropdownMenu onOpenChange={setIsOpen}>
                    <DropdownMenuTrigger className="flex items-center gap-2 border-2 border-white rounded-xl font-normal py-1 px-2 outline-none">
                        Todos los Indicadores
                        {isOpen ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ChevronDown className="w-5 h-5" />
                        )}
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="text-white">
                        <DropdownMenuLabel>Indicadores</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {indicadores.map((indicador) => (
                            <div key={indicador.id}>
                                <DropdownMenuItem className="hover:underline cursor-pointer">
                                    {indicador.nombre}
                                </DropdownMenuItem>
                            </div>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <Sheet>
                    <SheetTrigger className="hover:scale-110 transform transition-transform cursor-pointer">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                    </SheetTrigger>
                    <SheetContent className="text-primary_dark bg-white">
                        <SheetHeader>
                        <SheetTitle className={`${titillium_bold.className} text-3xl`}>
                            SATIS
                        </SheetTitle>
                        <SheetDescription className="text-lg">
                            Sistema de Atención y Soporte
                        </SheetDescription>
                        <div className="flex gap-4 items-center">
                            <Checkbox className=" text-white" />
                            <label className={`text-neutral-950`}>
                                Opción 1
                            </label>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Checkbox className=" text-white" />
                            <label className={`text-neutral-950`}>
                                Opción 2
                            </label>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Checkbox className=" text-white" />
                            <label className={`text-neutral-950`}>
                                Opción 3
                            </label>
                        </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

                <Avatar className="hover:scale-110 transform transition-transform cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

        </nav>
    )
}