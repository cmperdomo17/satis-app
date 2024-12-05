import { TeamService } from "./services/team-service";
import { TeamStatsCard } from "./components/TeamStatsCard";

export default async function Indicator4() {
  const teamStats = await TeamService.fetchTeamData();

  return (
    <div>
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">
          Estadísticas de los equipos de trabajo
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-xl">
        Estadísticas de los equipos con el fin de identificar oportunidades de mejora evaluando el tiempo medio y la cantidad de requerimientos atendidos por cada equipo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        {teamStats.map((stats) => (
          <TeamStatsCard
            key={stats.team_id}
            team_id={stats.team_id}
            tiempo_promedio={stats.tiempo_promedio}
            cantidad={stats.cantidad}
          />
        ))}
      </div>
    </div>
  );
}
