"use client";

import CustomBarChart from "./components/charts/customBarChart";
import CustomPieChart from "./components/charts/customPieChart";
import CustomCard from "./components/ui/customCard";
import { chartConfig } from "./config/timesDataConfig";
import { useTimesData } from "./hooks/useTimesData";

import FiltersSection from "./components/sections/filtersSection";

export default function () {
  const { timesData } = useTimesData();

  if (!timesData || !timesData.details) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full px-4">
      {/*Average time, median time and type section*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-4">
        {/* Average time section */}
        <CustomCard
          title="Tiempo Promedio de Resolución"
          data={`${timesData.averageResolutionTime.toFixed(2)} horas`}
        />

        {/* Most frequent resolution type section*/}
        <CustomCard
          title="Tipo de Resolución más Frecuente"
          data={chartConfig[timesData.mostFrequentResolutionType].label}
        />

        {/* Median time section */}
        <CustomCard
          title="Tiempo Medio de Resolución"
          data={`${timesData.medianResolutionTime.toFixed(2)} horas`}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Distribución por Barras</h3>
          <CustomBarChart data={timesData.resolutionTypeFrequency} />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Distribución Circular</h3>
          <CustomPieChart data={timesData.resolutionTypeFrequency} />
        </div>
      </div>

      {/* Filters section */}
      <FiltersSection></FiltersSection>
    </div>
  );
}
