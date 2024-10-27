"use client"

import * as React from "react"
import { Sun as LucideSunIcon, Moon as LucideMoonIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { resolvedTheme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className="border-none shadow-none rounded-full p-0 mx-0 hover:bg-gray-500/10 dark:hover:bg-primary_dark/20"
            onClick={toggleTheme}
        >
            <LucideSunIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <LucideMoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    )
}