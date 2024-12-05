import axios from "axios";
import { TeamStatsArray } from "../types/teamApiType";

export class TeamService {
  static async fetchTeamData() {
    try {
      const response = await axios.get<TeamStatsArray>(
        "http://localhost:3002/indicador4/indicador4"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching team data:", error);
      throw error;
    }
  }
}
