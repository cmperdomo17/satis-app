"use client";

import CustomBarChart from "./components/charts/customBarChart";
import CustomPieChart from "./components/charts/customPieChart";
import CustomCard from "./components/ui/customCard";
import { chartConfig } from "./config/timesDataConfig";
import { useTimesData } from "./hooks/useTimesData";

import FiltersSection from "./components/sections/filtersSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Indicador1() {
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const { timesData } = useTimesData(filters);

  if (!timesData || !timesData.globalMetrics) {
    return <div>Cargando...</div>;
  }

  const updateFilters = (key: string, value: string, isChecked: boolean) => {
    setFilters((prevFilters) => {
      console.log(prevFilters);
      const updatedFilters = { ...prevFilters };

      if (isChecked) {
        if (updatedFilters[key]) {
          updatedFilters[key] = [...updatedFilters[key], value];
        } else {
          updatedFilters[key] = [value];
        }
      } else {
        if (updatedFilters[key]) {
          updatedFilters[key] = updatedFilters[key].filter(
            (item) => item !== value
          );
          if (updatedFilters[key].length === 0) {
            delete updatedFilters[key];
          }
        }
      }

      return updatedFilters;
    });
  };

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full px-4">
      {/*Average time, median time and type section*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-4">
        {/* Average time section */}
        <CustomCard
          key={"averageTimeCard"}
          title="Tiempo Promedio de Resolución"
          data={`${timesData.globalMetrics.averageResolutionTime.toFixed(
            2
          )} horas`}
        />

        {/* Most frequent resolution type section*/}
        <CustomCard
          key={"mostFrequentTypeCard"}
          title="Tipo de Resolución más Frecuente"
          data={
            chartConfig[timesData.globalMetrics.mostFrequentResolutionType]
              .label
          }
        />

        {/* Median time section */}
        <CustomCard
          key={"medianTimeCard"}
          title="Tiempo Medio de Resolución"
          data={`${timesData.globalMetrics.medianResolutionTime.toFixed(
            2
          )} horas`}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Distribución por Barras</h3>
          <CustomBarChart
            data={timesData.globalMetrics.resolutionTypeFrequency}
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Distribución Circular</h3>
          <CustomPieChart
            data={timesData.globalMetrics.resolutionTypeFrequency}
          />
        </div>
      </div>

      {/* Filters section */}

      <FiltersSection
        data={timesData}
        updateFilters={updateFilters}
      ></FiltersSection>

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
