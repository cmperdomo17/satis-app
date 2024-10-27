export interface ChartDataItem {
    satisfaction: string;
    total: number;
    fill: string;
};

export interface ChartDataResponse {
    chartData: ChartDataItem[];
    totalSatisfaction: number;
    percentage: number;
    maxValue: number;
};

export interface RawDataItem {
    user_satisfaction: string;
    total: string;
}