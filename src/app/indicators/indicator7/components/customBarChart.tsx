import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  Cell,
} from "recharts";
import { RequestsServicesService } from "../services/requestServices-service";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartDataItem } from "../types/chartDataTypes.js";
import { Service } from "../types/requestApiType.js";

interface Props {
  service: Service;
}

export function CustomBarChart({ service }: Props) {
  const chartData: ChartDataItem[] = RequestsServicesService.formatChartData(
    service.counts
  );

  const sortedData = [...chartData].sort((a, b) => b.total - a.total);

  return (
    <div className="flex items-center gap-4">
      <Card className="flex flex-col bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10 w-full">
        <CardHeader className="items-center pb-0">
          <CardTitle>Indicador de servicios por estado de las solicitudes</CardTitle>
          <CardDescription>
            Distribución en gráfico de barras de los estados de las solicitudes de requerimientos
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <div className="h-[500px] w-full">
            {" "}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sortedData}
                layout="vertical"
                margin={{ top: 20, right: 30, left:30, bottom: 20 }}
              >
                <XAxis type="number" tickCount={5} domain={[0, "dataMax"]} />
                <YAxis
                  type="category"
                  dataKey="state"
                  tick={{
                    fill: "currentColor",
                    fontSize: 12,
                  }}
                />

                <Bar dataKey="total" radius={[0, 4, 4, 0]} barSize={20}>
                  {sortedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
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
