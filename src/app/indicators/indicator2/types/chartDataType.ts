export interface ChartDataItem {
    state: string;
    total: number;
    fill: string;
};

export interface ChartDataResponse {
    chartData: ChartDataItem[];
};

export interface RawDataItem {
    request_state: string;
}