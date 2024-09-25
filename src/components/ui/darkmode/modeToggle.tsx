"use client"

import * as React from "react"
import { Sun as LucideSunIcon, Moon as LucideMoonIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-none shadow-primary_dark dark:shadow-white rounded-full p-0 mx-0 hover:bg-gray-500/20 dark:hover:bg-primary_dark/30">
                    <LucideSunIcon className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <LucideMoonIcon className="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className=" hover:bg-gray-500/20 dark:hover:bg-primary_dark/30"
                onClick={() => setTheme("light")}>
                    Claro
                </DropdownMenuItem>
                <DropdownMenuItem className=" hover:bg-gray-500/20 dark:hover:bg-primary_dark/30"
                onClick={() => setTheme("dark")}>
                    Oscuro
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
