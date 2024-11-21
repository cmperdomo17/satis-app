import { SlidersHorizontal } from "lucide-react";
import { chartConfig, filtersConfig } from "../../config/timesDataConfig";
import { Checkbox } from "@/components/ui/checkbox";
import { ResponseData } from "../../types/requestApiType";
import CustomCard from "../ui/customCard";
import CustomBarChart from "../charts/customBarChart";
import CustomPieChart from "../charts/customPieChart";

interface FiltersSectionProps {
  data: ResponseData;
  updateFilters: (key: string, value: string, isChecked: boolean) => void;
}

export default function FiltersSection({
  data,
  updateFilters,
}: FiltersSectionProps) {
  return (
    <div className="py-4 space-y-6  w-full">
      {/* Header */}
      <div className="flex justify-center items-center font-semibold gap-2">
        <SlidersHorizontal />
        <h1 className="text-2xl font-semibold">Filtros</h1>
      </div>
      {/* Filters columns */}
      <div className="flex flex-wrap justify-center gap-4">
        {Object.entries(filtersConfig).map(([filterKey, filterConfig]) => (
          <div
            key={filterKey}
            className="space-y-4 bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10 rounded-2xl py-6 px-6 "
          >
            <h3
              key={`title-${filterKey}`}
              className="font-semibold text-lg text-center"
            >
              {filterConfig.label}
            </h3>
            <div key={`container-${filterKey}`} className="space-y-1">
              {filterConfig.values.map((value, index) => (
                <div key={index} className="flex items-center pl-6 w-auto">
                  <Checkbox
                    id={`${filterKey}-${index}`}
                    className="rounded data-[state=checked]:bg-black text-white dark:data-[state=checked]:bg-white dark:text-black border-black dark:border-white"
                    onCheckedChange={(isChecked) => {
                      if (typeof isChecked === "boolean") {
                        console.log("Actualiza");
                        updateFilters(filterKey, value.toString(), isChecked);
                      }
                    }}
                  />
                  <label
                    htmlFor={`${filterKey}-${index}`}
                    className="ml-2 pl-2"
                  >
                    {`Nivel ${value}`}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/*Average time, median time and type section*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-4">
        {/* Average time section */}
        <CustomCard
          key={"averageTimeCard"}
          title="Tiempo Promedio de Resolución"
          data={
            `${data.filteredMetrics?.averageResolutionTime.toFixed(2)} horas` ||
            ""
          }
        />

        {/* Most frequent resolution type section*/}
        <CustomCard
          key={"mostFrequentTypeCard"}
          title="Tipo de Resolución más Frecuente"
          data={
            data.filteredMetrics
              ? chartConfig[data.filteredMetrics.mostFrequentResolutionType]
                  .label
              : ""
          }
        />

        {/* Median time section */}
        <CustomCard
          key={"medianTimeCard"}
          title="Tiempo Medio de Resolución"
          data={`${data.filteredMetrics?.medianResolutionTime.toFixed(
            2
          )} horas`}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Distribución por Barras</h3>
          <CustomBarChart
            data={data.filteredMetrics?.resolutionTypeFrequency}
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Distribución Circular</h3>
          <CustomPieChart data={data.filteredMetrics?.resolutionTypeFrequency} />
        </div>
      </div>
    </div>
  );
}

// function removeFilter(key);
