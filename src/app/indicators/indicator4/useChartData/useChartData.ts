import axios from "axios";
import { useState, useEffect } from "react";
import { chartConfig, satisfactionWeights } from "../config/satisfactionConfig";
import { ChartDataItem } from '../types/chartDataType';

export const useChartData = () => {
    const [chartData, setChartData] = useState([]);
    const [totalSatisfaction, setTotalSatisfaction] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {

            try {
                // Fetching de datos y formateo de los mismos para el gráfico
                const response = await axios.get("/api/indicador4");
                const formattedData = response.data.map((item: { user_satisfaction: keyof typeof chartConfig; total: string }) => ({
                    satisfaction: chartConfig[item.user_satisfaction].label,
                    total: parseInt(item.total),
                    fill: chartConfig[item.user_satisfaction].color
                }));

                setChartData(formattedData);

                // reduce() reduce el arreglo a un solo objeto con dos propiedades: weightedTotal y totalResponses
                // acc es el acumulador, curr es el valor actual
                const result = formattedData.reduce( 
                    (acc: { weightedTotal: number; totalResponses: number }, curr: ChartDataItem) => {
                        const weight = satisfactionWeights[curr.satisfaction as keyof typeof satisfactionWeights] || 0;
                        acc.weightedTotal += curr.total * weight; // Se multiplica el total de respuestas por el peso correspondiente
                        acc.totalResponses += curr.total; // Se suman todas las respuestas
                        return acc; // Se devuelve el objeto acumulador
                    },
                    { weightedTotal: 0, totalResponses: 0 } // Se inicializa el objeto acumulador con los valores iniciales en 0
                );

                // Devolver el nivel máximo de satisfacción
                const maxValue = Math.max(...formattedData.map((item: ChartDataItem) => item.total)); // Se obtiene el valor máximo de todas las respuestas
                
                setMaxValue(maxValue); // Actualiza el estado con el valor máximo de respuestas

                // Calculo del porcentaje de satisfacción
                const maxPossibleScore = result.totalResponses * 1.0; // El valor máximo posible es 1.0 (Muy satisfecho)
                const satisfactionPercentage = (result.weightedTotal / maxPossibleScore) * 100; //  Se divide el total ponderado entre el total posible y se multiplica por 100 para obtener el porcentaje
                setPercentage(satisfactionPercentage); // Actualiza el estado con el porcentaje de satisfacción
                setTotalSatisfaction(result.totalResponses); // Actualiza el estado con el total de respuestas

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return { chartData, totalSatisfaction, percentage, maxValue }; // Devuelve los datos del gráfico, el total de respuestas, el porcentaje de satisfacción y el valor máximo de respuestas
};