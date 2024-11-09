import { useState, useEffect } from "react";
import { SatisfactionService } from "../services/satisfaction-service";
import { ChartDataItem } from '../types/chartDataType';

export const useChartData = () => {
    const [chartData, setChartData] = useState<ChartDataItem[]>([]);
    const [totalSatisfaction, setTotalSatisfaction] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    useEffect(() => {
        const loadSatisfactionData = async () => {
            try {
                // Obtener y formatear datos
                const formattedData = await SatisfactionService.fetchSatisfactionData();
                setChartData(formattedData);

                // Calcular métricas
                const metrics = SatisfactionService.calculateSatisfactionMetrics(formattedData);
                
                // Actualizar estados
                setMaxValue(metrics.maxValue);
                setPercentage(metrics.percentage);
                setTotalSatisfaction(metrics.totalSatisfaction);
            } catch (error) {
                console.error('Error loading satisfaction data:', error);
            }
        };

        loadSatisfactionData();
    }, []);

    return { chartData, totalSatisfaction, percentage, maxValue };
};