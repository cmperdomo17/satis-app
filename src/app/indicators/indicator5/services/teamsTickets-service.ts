import axios from "axios";
import { ResponseData } from "../types/requestApiType";

export class TeamsTicketsService {
  static async fetchRequestData() {
    try {
      const response = await axios.get<ResponseData[]>("/api/indicador5");

      if (response.data && Array.isArray(response.data)) {
        return response.data;
      }

      console.warn("No teams tickets data found.");
      return [];
    } catch (error) {
      console.error("Error fetching teams tickets data:", error);
      throw error;
    }
  }
}
