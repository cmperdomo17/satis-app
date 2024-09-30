import { useState } from "react";
import { ChevronDown } from 'lucide-react';
import { indicadores } from "@/utils/data";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function IndicatorsDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndicador, setSelectedIndicador] = useState("Todos los Indicadores");

    const handleIndicadorSelect = (indicador: string) => {
        setSelectedIndicador(indicador);
        setIsOpen(false);
    };

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className="flex items-center gap-2 border-2 border-primary_dark dark:border-white rounded-xl font-normal py-1 px-2 outline-none">
                <span className="text-xs md:text-base">{selectedIndicador}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen && 'rotate-180'}`} />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>Indicadores</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {indicadores.map((indicador, indice) => (
                    <DropdownMenuItem 
                        key={indicador.id}
                        className="hover:bg-gray-500/30 dark:hover:bg-primary_dark/30 cursor-pointer"
                        onSelect={() => handleIndicadorSelect(indicador.nombre)}
                    >
                        {indicador.nombre === "Todos los indicadores" ? (
                        indicador.nombre
                        ) : (
                        `${indice}. ${indicador.nombre}`
                        )}
                    </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    );
}