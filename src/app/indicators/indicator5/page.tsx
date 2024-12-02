"use client";

import { Button } from "@/components/ui/button";
import CustomPieChart from "./components/charts/customPieChart";
import { useTeamsTicketsData } from "./hooks/useTeamsTickesData";
import Link from "next/link";

export default function Indicador5() {
  const { teamsTicketsData } = useTeamsTicketsData();

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 pt-4 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Productividad de los Equipos del Área de TI
        </h1>
        <p className="text-muted-foreground max-w-full sm:max-w-2xl mx-auto">
          Cantidad de tickets de soporte cerrados por cada del equipo del Área
          de TI.
        </p>
      </div>

      <CustomPieChart data={teamsTicketsData} />

      {/* Back Button */}
      <div className="flex justify-center pb-8">
        <Link href={"/indicators"}>
          <Button variant="custom" className="min-w-[200px]">
            Regresar
          </Button>
        </Link>
      </div>
    </div>
  );
}
