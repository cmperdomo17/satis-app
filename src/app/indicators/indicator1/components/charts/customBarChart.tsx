import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  Cell,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { chartConfig } from "../../config/timesDataConfig";
import { ResolutionTypeKey } from "../../types/requestApiType";

interface CustomBarChartProps {
  data: Record<ResolutionTypeKey, number | undefined> | undefined;
}

export default function CustomBarChart({ data }: CustomBarChartProps) {
  if (!data) return null;
  const sortedData = Object.entries(data)
    .filter(([, value]) => value !== undefined)
    .sort(([, valueA], [, valueB]) => (valueB || 0) - (valueA || 0))
    .map(([key, value]) => ({ type: key as ResolutionTypeKey, total: value }));

  return (
    <div className="flex items-center gap-4">
      <Card className="flex flex-col bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10 w-full">
        <CardHeader className="items-center pb-0">
          <CardTitle>Frecuencias de Tipos de Resolución</CardTitle>
          <CardDescription>
            Distribución en gráfico de barras de las frecuencias para cada tipo
            de resolución
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sortedData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <XAxis type="number" tickCount={5} domain={[0, "dataMax"]} />
                <YAxis
                  type="category"
                  dataKey="type"
                  tickFormatter={(value) =>
                    chartConfig[value as ResolutionTypeKey]?.label || value
                  }
                  tick={{
                    fill: "currentColor",
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="total" radius={[0, 4, 4, 0]} barSize={20}>
                  {sortedData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={chartConfig[entry.type]?.color || "#000"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
