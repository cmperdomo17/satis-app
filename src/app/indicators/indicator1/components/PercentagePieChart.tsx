"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

interface chartData {
  percentage: number;
  name: string;
  fill: string;
}

interface PercentagePieChartProps {
  data: chartData;
  title: string;
  description?: string;
}

const chartConfig = {
  percentage: {
    label: "Completado",
    color: "hsl(120, 100%, 50%)",
  },
  remaining: {
    label: "Restante",
    color: "hsl(0,0%,0%)",
  },
} satisfies ChartConfig;

export default function PercentagePieChart(props: PercentagePieChartProps) {
  const complete: chartData = props.data;
  const remaining: chartData = {
    percentage: 100 - complete.percentage,
    name: "restante",
    fill: "#808080",
  };

  const data: chartData[] = [complete, remaining];
  const title = props.title;
  const description = props.description;

  return (
    <Card className="flex flex-col bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square ">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="percentage"
              nameKey="name"
              innerRadius={75}
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
                          className="fill-foreground text-3xl dark:fill-white font-bold"
                        >
                          {data[0].percentage}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground dark:fill-white"
                        >
                          Completado
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm items-center">
        <div className="flex justify-center gap-2 font-medium leading-none min-w-[250px] max-w-[250px] break-words text-center">
          {description}
        </div>
      </CardFooter>
    </Card>
  );
}
