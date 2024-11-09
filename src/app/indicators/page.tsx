import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { indicadores } from "@/utils/data";

export default function Indicators() {
    const totalIndicators = indicadores.length;

    return (
        <div className="flex flex-col gap-10 w-72 md:w-[45rem] h-1/2 md:h-[60%] z-0">

            <h1 className='text-lg md:text-2xl font-black'>Lista de los {totalIndicators} indicadores</h1>

            <Accordion type="single" collapsible className="w-full">
                {indicadores.map((indicator) => (
                    <AccordionItem key={indicator.id} value={`item-${indicator.id}`}>
                        <AccordionTrigger>{indicator.descripcion}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 items-center md:items-start">  
                            <p>{indicator.objetivo}</p>
                            <Link href={indicator.url}>
                                <Button variant="custom">Ver más</Button>
                            </Link>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            <div className="flex gap-4">
                <Link href={"/"}>
                    <Button variant="custom">
                        Regresar
                    </Button>
                </Link>
            </div>
        </div>
    );
}
