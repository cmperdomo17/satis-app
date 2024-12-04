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
  urgency: {
    label: "Filtros de Urgencia",
    values: [
      [1, "Inmediato"],
      [2, "Urgente"],
      [3, " Importante"],
      [4, "Sin prisa"],
    ],
  },
  impact: {
    label: "Filtros de Impacto",
    values: [
      [1, "Bajo"],
      [2, "Moderado"],
      [3, "Alto"],
    ],
  },
  priority: {
    label: "Filtros de Prioridad",
    values: [
      [1, "Critica"],
      [2, "Alta"],
      [3, "Media"],
      [4, "Baja"],
    ],
  },
};
