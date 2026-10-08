import { definePrismaConfig } from "prisma/config";

export default definePrismaConfig({
  skills: {
    agents: ["claude", "cursor", "agents", "devin"],
  },
  orm: {
    directory: 'prisma',
    family: {
      driver: 'postgres'
    },
    target: {
      client: {
        provider: 'prisma-client-js'
      }
    }
  }
});
