import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar, Cell } from "recharts"
import { useChartData } from "../../hooks/useChartData"
import { chartConfig } from "../../config/satisfactionConfig"
import { Star } from "lucide-react"

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
import { dataTransformers } from '../../utils/data-transformers';

export default function CustomBarChart() {
    const { chartData, totalSatisfaction, percentage }: ChartDataResponse = useChartData();

    const maxValue = dataTransformers.calculateMaxValue(chartData)
    const roundedMax = dataTransformers.roundToNextMultipleOf100(maxValue)
    const formatPercentage = dataTransformers.formatPercentage(percentage)

    return (
        <div className="flex items-center gap-4">
            <Card className="flex flex-col bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10 w-full">
                <CardHeader className="items-center pb-0">
                    <CardTitle>Indicador de Satisfacción de Usuarios</CardTitle>
                    <CardDescription>Distribución de niveles de satisfacción</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                        config={chartConfig}
                        className="h-[250px] w-full"
                    >
                        <ResponsiveContainer>
                            <BarChart
                                data={chartData}
                                layout="vertical"
                                margin={{
                                    top: 20,
                                    right: 20,
                                    left: 20, 
                                    bottom: 20,
                                }}
                            >
                                <XAxis 
                                    type="number" 
                                    domain={[0, roundedMax]}
                                    tickCount={5}
                                />
                                <YAxis 
                                    type="category" 
                                    dataKey="satisfaction" 
                                    tick={{ 
                                        fill: 'currentColor',
                                        fontSize: 12
                                    }}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar 
                                    dataKey="total"
                                    radius={[0, 4, 4, 0]}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell 
                                            key={`cell-${index}`} 
                                            fill={entry.fill} 
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 font-medium leading-none">
                        <Star size={12} fill="currentColor" />
                        <span>
                            {formatPercentage}% de satisfacción
                        </span>
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Satisfacción total: {totalSatisfaction} respuestas
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}