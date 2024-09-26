"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { chartData } from "@/utils/data"
import { ChartConfig,
        ChartContainer, 
        ChartTooltip, 
        ChartTooltipContent,
        ChartLegend, 
        ChartLegendContent
} from "@/components/ui/chart"
import { useTheme } from "next-themes"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
    text_white: {
        color: "#fff",
    },
    text_black: {
        color: "#000",
    },
} satisfies ChartConfig


export default function Indicator1 () {
    const {theme} = useTheme()
    return (
        <div className="size-[350px] md:size-[550px] flex justify-center items-center">
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                        stroke={theme === "dark" ? 
                            chartConfig.text_white.color
                            : chartConfig.text_black.color
                        }
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}