import { Label, Pie, PieChart } from "recharts"
import { useChartData } from "../../hooks/useChartData"
import { chartConfig } from "../../config/requestsByStateConfig.ts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { ChartDataResponse } from '../../types/chartDataType';

export default function RequestsByStateChart() {
    const { chartData }: ChartDataResponse = useChartData();

    return (
        <div className="flex items-center gap-4">
            <Card className="flex flex-col bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10">
                <CardHeader className="items-center pb-0">
                    <CardTitle>Indicador de Requerimientos por Estado</CardTitle>
                    <CardDescription className="text-center">
                        Distribución en gráfico de pastel de los requerimientos por estado
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
                                nameKey="state"
                                innerRadius={60}
                                strokeWidth={5}
                            >
                                <Label
                                    content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </Pie>
                        </PieChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <div className="flex flex-col gap-2">
                {Object.values(chartConfig).map((item, index) => (
                    <div key={index} className="pl-2 flex items-center text-sm">
                        <span className="inline-block w-3 h-3 mr-2 rounded-[3px]" style={{ backgroundColor: item.color }} />
                        {item.label} : {chartData.find((data) => data.state === item.label)?.total || 0}
                    </div>
                ))}
            </div>
        </div>
    )
}
