// services/satisfaction-service.ts
import axios from "axios";
import { chartConfig, satisfactionWeights } from "../config/satisfactionConfig";
import { ChartDataItem, RawDataItem } from '../types/chartDataType';

export class SatisfactionService {
    // Obtener y formatear datos
    static async fetchSatisfactionData() {
        try {
            const response = await axios.get("/api/indicador3");
            return this.formatChartData(response.data);
        } catch (error) {
            console.error('Error fetching satisfaction data:', error);
            throw error;
        }
    }

    // Formatear datos para el gráfico
    private static formatChartData(rawData: RawDataItem[]) {
        return rawData.map((item) => ({
            satisfaction: chartConfig[item.user_satisfaction as keyof typeof chartConfig].label,
            total: parseInt(item.total),
            fill: chartConfig[item.user_satisfaction as keyof typeof chartConfig].color
        }));
    }

    // Calcular métricas de satisfacción
    static calculateSatisfactionMetrics(formattedData: ChartDataItem[]) {
        const result = this.calculateWeightedTotals(formattedData);
        const maxValue = this.calculateMaxValue(formattedData);
        const satisfactionPercentage = this.calculateSatisfactionPercentage(result);

        return {
            maxValue,
            percentage: satisfactionPercentage,
            totalSatisfaction: result.totalResponses
        };
    }

    // Calcular totales ponderados
    private static calculateWeightedTotals(data: ChartDataItem[]) {
        return data.reduce(
            (acc: { weightedTotal: number; totalResponses: number }, curr: ChartDataItem) => {
                const weight = satisfactionWeights[curr.satisfaction as keyof typeof satisfactionWeights] || 0;
                acc.weightedTotal += curr.total * weight;
                acc.totalResponses += curr.total;
                return acc;
            },
            { weightedTotal: 0, totalResponses: 0 }
        );
    }

    // Calcular valor máximo
    private static calculateMaxValue(data: ChartDataItem[]) {
        return Math.max(...data.map(item => item.total));
    }

    // Calcular porcentaje de satisfacción
    private static calculateSatisfactionPercentage(result: { weightedTotal: number; totalResponses: number }) {
        const maxPossibleScore = result.totalResponses * 1.0;
        return (result.weightedTotal / maxPossibleScore) * 100;
    }
}