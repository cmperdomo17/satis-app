import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar, Cell } from "recharts";
import { useChartData } from "../../hooks/useChartData";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChartDataResponse } from '../../types/chartDataType';

export default function CustomBarChart() {
    const { chartData }: ChartDataResponse = useChartData();

    const sortedData = [...chartData].sort((a, b) => b.total - a.total);

    return (
        <div className="flex items-center gap-4">
            <Card className="flex flex-col bg-white dark:bg-primary_dark shadow-xl shadow-primary/50 dark:shadow-white/10 w-full">
                <CardHeader className="items-center pb-0">
                    <CardTitle>Requerimientos por Estado</CardTitle>
                    <CardDescription>Distribución en gráfico de barras de los estados de requerimientos</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                    <div className="h-[500px] w-full"> {/* Altura fija para mejor visualización */}
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={sortedData}
                                layout="vertical"
                                margin={{ top: 20, right: 30, left: 20, bottom: 20 }} // Aumentar margen izquierdo
                            >
                                <XAxis 
                                    type="number" 
                                    tickCount={5}
                                    domain={[0, 'dataMax']}
                                />
                                <YAxis
                                    type="category"
                                    dataKey="state"
                                    tick={{ 
                                        fill: 'currentColor', 
                                        fontSize: 12 
                                    }}
                                />

                                <Bar 
                                    dataKey="total" 
                                    radius={[0, 4, 4, 0]}
                                    barSize={20} // Tamaño fijo para las barras
                                >
                                    {sortedData.map((entry, index) => (
                                        <Cell 
                                            key={`cell-${index}`} 
                                            fill={entry.fill}
                                        />
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