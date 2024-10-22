export type ChartDataItem = {
    satisfaction: string;
    total: number;
    fill: string;
};

export type ChartDataResponse = {
    chartData: ChartDataItem[];
    totalSatisfaction: number;
    percentage: number;
    maxValue: number;
};