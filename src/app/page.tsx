import { Button } from "@/components/ui/button";
import { titillium_bold } from "@/utils/fonts";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  return (
    <div className="flex flex-col gap-10 w-72 md:w-[30rem] mt-14">
      
      <h1 className={`text-2xl ${titillium_bold.className}`}>Lista de Indicadores</h1>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className={titillium_bold.className}>Nivel de ejecución del Plan Estratégico de TI</AccordionTrigger>
          <AccordionContent>
            Medir el nivel de avance en la ejecución de los proyectos y actividades del Plan Estratégico de TI – PETI
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className={titillium_bold.className}>Avance en la implementación de la política de gobierno digital</AccordionTrigger>
          <AccordionContent>
            Mide el avance en la implementación de la política de gobierno digital en la División TIC según los resultados obtenidos en FURAG, en temas relacionados con TIC
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className={titillium_bold.className}>Nivel de efectividad en la solución de casos de la Mesa de Servicio</AccordionTrigger>
          <AccordionContent>
            Mide el nivel de efectividad en la solución de los casos atendidos por la Mesa de Servicio, en función de los casos reportados vs. Casos resueltos. La Mesa de Servicio es Contacto 55
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className={titillium_bold.className}>Nivel de satisfacción en la solución de casos de la Mesa de Servicio</AccordionTrigger>
          <AccordionContent>
            Mide el nivel de satisfacción de los usuarios de la comunidad universitaria respecto a la atención brindada por la Mesa de Servicio de la División TIC
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className={titillium_bold.className}>Porcentaje de proyectos TI a tiempo y dentro del presupuesto</AccordionTrigger>
          <AccordionContent>
            Mide el porcentaje de proyectos de TI que se completan a tiempo y dentro del presupuesto asignado, ejecutados por la División TIC de la Universidad del Cauca
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Link href={"/contact"}>
        <Button className="text-2xl lg:text-lg bg-primary_light hover:border-2 hover:border-primary_light">
          Contacto
        </Button>
      </Link>
    </div>
  );
}
