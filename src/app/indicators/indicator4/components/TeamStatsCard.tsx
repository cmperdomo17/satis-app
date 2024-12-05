import { UsersRound, ClockArrowUp, ListChecks } from "lucide-react";

interface Props {
  team_id: number;
  tiempo_promedio: string;
  cantidad: string;
}

export function TeamStatsCard({ team_id, tiempo_promedio, cantidad }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:bg-blue-200 hover:border-blue-200 hover:shadow-2xl text-center transition-all duration-500 ease-in-out">
      <div className="flex items-center space-x-2 mb-4">
        <UsersRound className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-bold text-gray-800">
          ID del equipo: {team_id}
        </h2>
      </div>
      <div className="flex items-center space-x-2 justify-center">
        <ClockArrowUp className="w-6 h-6 text-black" />
        <p className="text-xl text-black mt-2">
          <span className="font-medium">Tiempo Promedio:</span>{" "}
          {tiempo_promedio} horas
        </p>
      </div>
      <div className="flex items-center space-x-2 justify-center">
        <ListChecks className="w-6 h-6 text-black" />
        <p className="text-xl text-black mt-1">
          <span className="font-medium">Requerimientos atendidos:</span>{" "}
          {cantidad}
        </p>
      </div>
    </div>
  );
}

export default TeamStatsCard;
