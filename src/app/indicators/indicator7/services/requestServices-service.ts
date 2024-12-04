import axios from "axios";
import { Services, Counts } from "../types/requestApiType";
import { ChartDataItem } from "../types/chartDataTypes";
import { chartConfig } from "../config/servicesConfig.ts";

export class RequestsServicesService {
  static async fetchApiData() {
    try {
      const response = await axios.get<Services>(
        "http://localhost:3002/requirements/indicador7"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching requests data:", error);
      throw error;
    }
  }

  static formatChartData(data: Counts): ChartDataItem[] {
    const defaultStates: Counts = {
      approved: 0,
      assigned: 0,
      closed: 0,
      dispatched: 0,
      escalated_tto: 0,
      escalated_ttr: 0,
      new: 0,
      pending: 0,
      redispatched: 0,
      rejected: 0,
      resolved: 0,
      waiting_for_approval: 0,
    }
    
    return Object.entries({...defaultStates, ...data}).map(([request_state, total]) => ({
      state:
        chartConfig[request_state as keyof typeof chartConfig]?.label ||
        request_state,
      total: Number(total),
      fill:
        chartConfig[request_state as keyof typeof chartConfig]?.color ||
        "#000000",
    }));
  }

}
