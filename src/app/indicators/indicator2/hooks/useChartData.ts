import { useState, useEffect } from "react";
import { RequestsService } from "../services/requests-service";
import { ChartDataItem } from '../types/chartDataType';

export const useChartData = () => {
    const [chartData, setChartData] = useState<ChartDataItem[]>([]);

    useEffect(() => {
        const loadRequestsData = async () => {
            try {
                // Obtener y formatear datos
                const formattedData = await RequestsService.fetchRequestsData();
                setChartData(formattedData);

            } catch (error) {
                console.error('Error loading requests data:', error);
            }
        };

        loadRequestsData();
    }, []);

    return { chartData };
};
