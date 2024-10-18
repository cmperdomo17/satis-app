"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import axios from "axios"

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
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

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
}

export default function Indicator4() {
    const [chartData, setChartData] = useState([])
    const [totalSatisfaction, setTotalSatisfaction] = useState(0) 

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

                const total = formattedData.reduce((acc: number, curr: { satisfaction: string; total: number; fill: string }) => {
                    if (curr.satisfaction === "Muy satisfecho" || curr.satisfaction === "Satisfecho" || curr.satisfaction === "Poco satisfecho") {
                        return acc + curr.total
                    }
                    return acc
                }, 0)

                setTotalSatisfaction(total)
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="flex flex-col gap-8 justify-center items-center">
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
                        Tendencia al alza del 5.2% este mes <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Satisfacción total: {totalSatisfaction} respuestas
                    </div> 
                </CardFooter>
            </Card>
            <Link href={"/indicators"}>
                <Button variant="custom">
                    Regresar
                </Button>
            </Link>
        </div>
    )
}
