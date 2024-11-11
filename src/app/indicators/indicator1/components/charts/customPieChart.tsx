import { Cell, Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig } from "../../config/timesDataConfig";
import { ResolutionTypeKey } from "../../types/requestApiType";

interface CustomPieChartProps {
  data: Record<ResolutionTypeKey, number | undefined>;
}

export default function CustomPieChart({ data }: CustomPieChartProps) {
  const sortedData = Object.entries(data)
    .filter(([_, value]) => value !== undefined)
    .sort(([, valueA], [, valueB]) => (valueB || 0) - (valueA || 0))
    .map(([key, value]) => ({ type: key as ResolutionTypeKey, total: value }));

  console.log(sortedData);
  return (
    <div className="flex items-center gap-4">
      <Card className="flex flex-col bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10">
        <CardHeader className="items-center pb-0">
          <CardTitle>Frecuencias de Tipos de Resolución</CardTitle>
          <CardDescription className="text-center">
            Distribución en gráfico de pastel de las frecuencias para cada tipo
            de resolución
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={sortedData}
                dataKey="total"
                nameKey="type"
                innerRadius={60}
                strokeWidth={5}
              >
                {sortedData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      chartConfig[entry.type as keyof typeof chartConfig]
                        ?.color || "#000"
                    }
                  />
                ))}
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        ></text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-2">
        {sortedData.map((entry, index) => (
          <div key={index} className="pl-2 flex items-center text-sm">
            <span
              className="inline-block w-3 h-3 mr-2 rounded-[3px]"
              style={{
                backgroundColor: chartConfig[entry.type]?.color || "#000",
              }}
            />
            {chartConfig[entry.type]?.label || "Desconocido"}:{" "}
            {entry.total || 0}
          </div>
        ))}
      </div>
    </div>
  );
}
