"use client"

import { ArrowUpIcon, CalendarIcon, ListChecksIcon, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import CustomPieChart from "./components/charts/customPieChart"
import CustomBarChart from "./components/charts/customBarChart"
import { useChartData } from "./hooks/useChartData"
import { ChartDataResponse } from './types/chartDataType'
import { dataTransformers } from "./utils/data-transformers"

export default function Indicator4() {
    const { maxValue, totalSatisfaction, percentage }: ChartDataResponse = useChartData();
    const formatPercentage = dataTransformers.formatPercentage(percentage);

    return (
        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full px-4">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">
                    Nivel de satisfacción de usuarios
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Nivel de satisfacción de los usuarios de la comunidad universitaria respecto 
                    a la atención brindada por la Mesa de Servicio de la División TIC
                </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between space-y-1">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Respuestas</p>
                                <p className="text-2xl font-bold">{totalSatisfaction}</p>
                            </div>
                            <div className="p-2 bg-primary/10 rounded-full">
                                <Users className="h-6 w-6 text-primary dark:text-primary_extralight" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between space-y-1">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Periodo Actual</p>
                                <p className="text-2xl font-bold">2024-1</p>
                            </div>
                            <div className="p-2 bg-primary/10 rounded-full">
                                <CalendarIcon className="h-6 w-6 text-primary dark:text-primary_extralight" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between space-y-1">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Meta Alcanzada</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-2xl font-bold">{formatPercentage}</p>
                                    <ArrowUpIcon className="h-4 w-4 text-green-500" />
                                </div>
                            </div>
                            <div className="p-2 bg-primary/10 rounded-full">
                                <TrendingUp className="h-6 w-6 text-primary dark:text-primary_extralight" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Distribución por Barras</h3>
                    <CustomBarChart />
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Distribución Circular</h3>
                    <CustomPieChart />
                </div>
            </div>

            {/* Key Findings */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ListChecksIcon className="h-5 w-5" />
                        Hallazgos Clave
                    </CardTitle>
                    <CardDescription>
                        Análisis del periodo actual
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-2">
                            <div className="rounded-full p-1 bg-green-500/10">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                            </div>
                            <span>
                                El <span className="font-medium">{formatPercentage}</span> de los usuarios reportan estar satisfechos o muy satisfechos con el servicio.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="rounded-full p-1 bg-blue-500/10">
                                <div className="h-2 w-2 rounded-full bg-blue-500" />
                            </div>
                            <span>
                                La mayoría de los usuarios (<span className="font-medium">
                                    {maxValue}
                                    </span>) reportan estar muy satisfechos con la atención recibida.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="rounded-full p-1 bg-amber-500/10">
                                <div className="h-2 w-2 rounded-full bg-amber-500" />
                            </div>
                            <span>
                                No se registraron usuarios insatisfechos o poco satisfechos en el periodo actual.
                            </span>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            {/* Back Button */}
            <div className="flex justify-center pb-8">
                <Link href={"/indicators"}>
                    <Button variant="custom" className="min-w-[200px]">
                        Regresar
                    </Button>
                </Link>
            </div>
        </div>
    )
}