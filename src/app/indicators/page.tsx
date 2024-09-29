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

            <h1 className='text-lg md:text-2xl font-black'>Lista de Indicadores</h1>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Nivel de ejecución del Plan Estratégico de TI</AccordionTrigger>
                    <AccordionContent>
                        Medir el nivel de avance en la ejecución de los proyectos y actividades del Plan Estratégico de TI – PETI
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Avance en la implementación de la política de gobierno digital</AccordionTrigger>
                    <AccordionContent>
                        Mide el avance en la implementación de la política de gobierno digital en la División TIC según los resultados obtenidos en FURAG, en temas relacionados con TIC
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Nivel de efectividad en la solución de casos de la Mesa de Servicio</AccordionTrigger>
                    <AccordionContent>
                        Mide el nivel de efectividad en la solución de los casos atendidos por la Mesa de Servicio, en función de los casos reportados vs. Casos resueltos. La Mesa de Servicio es Contacto 55
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Nivel de satisfacción en la solución de casos de la Mesa de Servicio</AccordionTrigger>
                    <AccordionContent>
                        Mide el nivel de satisfacción de los usuarios de la comunidad universitaria respecto a la atención brindada por la Mesa de Servicio de la División TIC
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>Porcentaje de proyectos TI a tiempo y dentro del presupuesto</AccordionTrigger>
                    <AccordionContent>
                        Mide el porcentaje de proyectos de TI que se completan a tiempo y dentro del presupuesto asignado, ejecutados por la División TIC de la Universidad del Cauca
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="flex gap-4">
                <Link href={"/contact"}>
                    <Button variant="custom">
                        Contacto
                    </Button>
                </Link>

                <Link href={"/indicator1"}>
                    <Button variant="custom">
                        Indicador 1
                    </Button>
                </Link>

                <Link href={"/indicator2"}>
                    <Button variant="custom">
                        Indicador 2
                    </Button>
                </Link>
            </div>

        </div>
    );
}
