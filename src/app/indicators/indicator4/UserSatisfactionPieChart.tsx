"use client"

import { Pie, PieChart } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
} from "@/components/ui/chart"
import { useState, useEffect } from "react"
import axios from "axios"

const chartConfig = {
    "1": {
        label: "Muy satisfecho",
        color: "hsl(var(--chart-1))",
    },
    "2": {
        label: "Satisfecho",
        color: "hsl(var(--chart-2))",
    },
    "3": {
        label: "Poco satisfecho",
        color: "hsl(var(--chart-3))",
    },
    "4": {
        label: "Insatisfecho",
        color: "hsl(var(--chart-4))",
    },
} satisfies ChartConfig

export function UserSatisfactionPieChart() {
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/indicador4")
                const formattedData = response.data.map((item: { user_satisfaction: keyof typeof chartConfig; total: string }) => ({
                    satisfaction: chartConfig[item.user_satisfaction].label,
                    total: parseInt(item.total),
                    fill: chartConfig[item.user_satisfaction].color
                }))
                setChartData(formattedData)
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <Card className="flex flex-col bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10">
            <CardHeader className="items-center pb-0">
                <CardTitle>Indicador de Satisfacción de Usuarios</CardTitle>
                <CardDescription>Distribución de niveles de satisfacción</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[300px]"
                >
                    <PieChart>
                        <Pie data={chartData} dataKey="total" nameKey="satisfaction" />
                        <ChartLegend
                            content={<ChartLegendContent nameKey="satisfaction" />}
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}