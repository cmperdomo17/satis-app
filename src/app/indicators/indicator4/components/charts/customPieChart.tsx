import { Label, Pie, PieChart } from "recharts"
import { Star } from "lucide-react"
import { useChartData } from "../../hooks/useChartData"
import { chartConfig } from "../../config/satisfactionConfig"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { ChartDataResponse } from '../../types/chartDataType';

export default function CustomPieChart() {
    const { chartData, totalSatisfaction, percentage }: ChartDataResponse = useChartData();

    return (
        <div className="flex items-center gap-4">
            <Card className="flex flex-col bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10">
                <CardHeader className="items-center pb-0">
                    <CardTitle>Indicador de Satisfacción de Usuarios</CardTitle>
                    <CardDescription>Distribución de niveles de satisfacción</CardDescription>
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
                                nameKey="satisfaction"
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
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground dark:fill-white text-3xl font-bold"
                                                    >
                                                        {totalSatisfaction.toLocaleString()}
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 24}
                                                        className="fill-muted-foreground dark:fill-white"
                                                    >
                                                        Respuestas
                                                    </tspan>
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </Pie>
                        </PieChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 font-medium leading-none">
                        <Star size={12} fill="currentColor" />
                        <span>
                            {percentage.toFixed(2)}% de satisfacción
                        </span>
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Satisfacción total: {totalSatisfaction} respuestas
                    </div>
                </CardFooter>
            </Card>
            <div className="flex flex-col gap-2">
                {Object.values(chartConfig).map((item, index) => (
                    <div key={index} className="pl-2 flex items-center text-sm">
                        <span className="inline-block w-3 h-3 mr-2 rounded-[3px]" style={{ backgroundColor: item.color }} />
                        {item.label} : {chartData.find((data) => data.satisfaction === item.label)?.total || 0}
                    </div>
                ))}
            </div>
        </div>
    )
}