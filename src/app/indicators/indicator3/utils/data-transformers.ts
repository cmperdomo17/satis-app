export const dataTransformers = {
    // Calcular el valor máximo de un conjunto de datos
    calculateMaxValue: (data: { total: number }[]) => {
        return Math.max(...data.map(item => item.total)); 
    },

    // Redondear un número al siguiente múltiplo de 100
    roundToNextMultipleOf100: (value: number) => {
        return Math.ceil(value / 100) * 100;
    },

    // Formatear porcentajes
    formatPercentage: (value: number) => {
        return `${value.toFixed(2)}%`;
    }
};