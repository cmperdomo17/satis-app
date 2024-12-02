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
import { generateChartConfig } from "../../config/teamsTicketsConfig";
import { ResponseData } from "../../types/requestApiType";

interface CustomPieChartProps {
  data: ResponseData[] | undefined;
}

type ChartData = {
  type: string;
  total: number;
}[];

export default function CustomPieChart({ data }: CustomPieChartProps) {
  if (!data) {
    return <div>Cargando...</div>;
  }
  const chartConfig = generateChartConfig(data);

  const transformedData = data.sort(function (a, b) {
    if (a.cantidad > b.cantidad) {
      return -1;
    }
    if (a.cantidad < b.cantidad) {
      return 1;
    }

    return 0;
  });

  const chartData: ChartData = transformedData.map((item) => ({
    type: `team_${item.team_id}`,
    total: item.cantidad,
  }));

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <Card className="flex flex-col bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10 w-full sm:w-[250px] md:w-[350px] lg:w-[450px]">
        <CardHeader className="items-center pb-0">
          <CardTitle>Tickets Cerrados por cada Equipo</CardTitle>
          <CardDescription className="text-center break-words">
            Distribución en gráfico de pastel de los tickets cerrados por cada
            equipo del area de TI.
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
                data={chartData}
                dataKey="total"
                nameKey="type"
                innerRadius={60}
                strokeWidth={5}
              >
                {chartData.map((entry, index) => (
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
        <h1 className="w-60">
          Orden de equipos por cantidad de tickets cerrados:{" "}
        </h1>
        {chartData.map((entry, index) => (
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
