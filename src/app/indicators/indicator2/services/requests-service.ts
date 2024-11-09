// services/requests-service.ts
import axios from "axios";
import { chartConfig } from "../config/requestsByStateConfig.ts";
import { ChartDataItem } from '../types/chartDataType';
import { ApiResponse } from "../types/requestApiType.js";

export class RequestsService {
    static async fetchRequestsData() {
        try {
            const response = await axios.get<ApiResponse>("/api/indicador2");
            return this.formatChartData(response.data);
        } catch (error) {
            console.error('Error fetching requests data:', error);
            throw error;
        }
    }

    private static formatChartData(data: ApiResponse): ChartDataItem[] {
        // Convertir el objeto a un array de objetos con el formato requerido
        return Object.entries(data)
            .filter(([key]) => key !== 'total') // Excluir el total general
            .map(([request_state, total]) => ({
                state: chartConfig[request_state as keyof typeof chartConfig]?.label || request_state,
                total: Number(total),
                fill: chartConfig[request_state as keyof typeof chartConfig]?.color || '#000000'
            }));
    }

    static calculateRequestsMetrics(formattedData: ChartDataItem[]) {
        const totalResponses = this.calculateTotalResponses(formattedData);
        const maxValue = this.calculateMaxValue(formattedData);
        const percentageResolved = this.calculateResolvedPercentage(formattedData);

        return {
            maxValue,
            percentageResolved,
            totalRequests: totalResponses
        };
    }

    private static calculateTotalResponses(data: ChartDataItem[]) {
        return data.reduce((acc, curr) => acc + curr.total, 0);
    }

    private static calculateMaxValue(data: ChartDataItem[]) {
        return Math.max(...data.map(item => item.total));
    }

    private static calculateResolvedPercentage(data: ChartDataItem[]) {
        const resolvedItem = data.find(item => item.state === "Resolved");
        const totalResponses = this.calculateTotalResponses(data);
        return resolvedItem ? (resolvedItem.total / totalResponses) * 100 : 0;
    }
}