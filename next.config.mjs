/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/indicador3", // Nueva ruta de la API
        destination: "http://localhost:3002/indicador4", // Endpoint de la API
      },
      {
        source: "/api/indicador2",
        destination: "http://localhost:3000/requirements/indicador2",
      },
      {
        source: "/api/indicador1",
        destination: "http://localhost:3002/requirements/indicador1",
      },
      // {
      //     source: "/api/indicador8",
      //     destination: "http://localhost:3001/indicador8",
      // },
    ];
  },
};

export default nextConfig;
