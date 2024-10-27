"use client"

import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { indicadores } from "@/utils/data";
import Link from "next/link"
import { useState } from "react"

export default function IndicatorsCombobox() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const pathname = usePathname();

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    size="dropdown"
                    className="w-[200px] items-center justify-between border-primary_dark dark:border-white hover:bg-primary_dark/10 dark:hover:bg-primary_dark/20"
                >
                    {value && pathname !== "/"
                        ? indicadores.find((indicador) => indicador.nombre === value)?.nombre
                        : "Seleccionar indicador..."}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open && 'rotate-180'}`} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Buscar indicador..." />
                    <CommandList>
                        <CommandEmpty>No se encontró un indicador.</CommandEmpty>
                        <CommandGroup>
                            {indicadores.map((indicador) => (
                                <>
                                    <Link href={indicador.url || ""}>
                                        <CommandItem
                                            key={indicador.id}
                                            value={indicador.nombre}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue)
                                                setOpen(false)
                                            }}
                                        >
                                            {indicador.nombre}
                                            <Check
                                                className={cn(
                                                    "size-4 ml-auto mr-2",
                                                    value === indicador.nombre ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    </Link>
                                </>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
