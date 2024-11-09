"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

import CustomPieChart from "./components/charts/customPieChart"
import CustomBarChart from "./components/charts/customBarChart"

export default function Indicator4() {
    return (
        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full px-4">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">
                    Estado de los Requerimientos
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Estado de los requerimientos gestionados por la Mesa de Servicio de la División TIC en la comunidad universitaria
                </p>
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
