export const chartConfig = {
  assistance: { label: "Asistencia", color: "#4CAF50" },
  ["bug fixed"]: { label: "Error corregido", color: "#FF6347" },
  ["hardware repair"]: { label: "Reparación de hardware", color: "#808080" },
  ["system update"]: { label: "Actualización del sistema", color: "#4682B4" },
  other: { label: "Otro", color: "#9E9E9E" },
  ["software patch"]: { label: "Parche de software", color: "#FFD700" },
  training: { label: "Capacitación", color: "#8A2BE2" },
};

export const filtersConfig = {
  resolutionTypes: {
    label: "Tipos de Resolución",
    values: Object.entries(chartConfig).map(([key, value]) => ({
      type: key,
      ...value,
    })),
  },
  urgencyLevels: {
    label: "Niveles de Urgencia",
    values: [1, 2, 3, 4],
  },
  impactLevels: {
    label: "Niveles de Impacto",
    values: [1, 2, 3],
  },
  priorityLevels: {
    label: "Niveles de Prioridad",
    values: [1, 2, 3, 4],
  },
};
