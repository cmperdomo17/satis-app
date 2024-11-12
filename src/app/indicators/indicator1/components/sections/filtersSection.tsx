import { SlidersHorizontal } from "lucide-react";
import { filtersConfig } from "../../config/timesDataConfig";
import { Checkbox } from "@/components/ui/checkbox";

export default function FiltersSection() {
  return (
    <div className="py-4 space-y-6  w-full">
      {/* Header */}
      <div className="flex justify-center items-center font-semibold gap-2">
        <SlidersHorizontal />
        <h1 className="text-2xl font-semibold">Filtros</h1>
      </div>
      {/* Filters columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(filtersConfig).map(([filterKey, filterConfig]) => (
          <div
            key={filterKey}
            className="space-y-4 bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10 rounded-2xl py-4 w-auto"
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
                  />
                  <label
                    htmlFor={`${filterKey}-${index}`}
                    className="ml-2 pl-2"
                  >
                    {typeof value === "object" ? value.label : `Nivel ${value}`}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
