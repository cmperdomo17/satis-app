import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Indicators() {
    return (
        <div className="flex flex-col gap-10 w-72 md:w-[30rem] h-1/2 md:h-[60%] z-0">

            <h1 className='text-lg md:text-2xl font-black'>Lista de los 4 Indicadores</h1>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Nivel de ejecución del Plan Estratégico de TI</AccordionTrigger>
                    <AccordionContent>
                        Medir el nivel de avance en la ejecución de los proyectos y actividades del Plan Estratégico de TI – PETI
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Nivel de satisfacción en la solución de casos atendidos por la Mesa de Servicio</AccordionTrigger>
                    <AccordionContent>
                        Mide el nivel de satisfacción de los usuarios de la comunidad universitaria respecto a la atención brindada por la Mesa de Servicio de la División TIC
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Porcentaje de implementación de requerimientos aprobados</AccordionTrigger>
                    <AccordionContent>
                        Mide el avance en la implementación de los requerimientos aprobados para los sistemas de información con respecto a las necesidades de los usuarios de la Universidad del Cauca.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Disponibilidad de los Sistemas de Información</AccordionTrigger>
                    <AccordionContent>
                        Mide la disponibilidad de los sistemas de información que están en operación, soportados por la División TIC, que
                        son utilizados por los usuarios de la Universidad del Cauca
                    </AccordionContent>
                </AccordionItem>
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
