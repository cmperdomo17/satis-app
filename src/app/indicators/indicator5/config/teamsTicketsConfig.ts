import { ResponseData } from "../types/requestApiType";

export type ChartConfig = {
  [key: string]: { label: string; color: string };
};

export const generateChartConfig = (data: ResponseData[]) => {
  const colors = [
    "#4CAF50",
    "#FF6347",
    "#FF8C00",
    "#4682B4",
    "#00BFAE",
    "#FFD700",
    "#8A2BE2",
  ];

  const chartConfig: ChartConfig = {};

  data.forEach((item, index) => {
    chartConfig[`team_${item.team_id}`] = {
      label: `Equipo ${item.team_id}`,
      color: colors[index % colors.length],
    };
  });

  return chartConfig;
};
