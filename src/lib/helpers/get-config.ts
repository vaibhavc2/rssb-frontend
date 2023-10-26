import { Env } from "@/types";

export const getConfig = (): Env => {
  return {
    GITHUB_PROFILE_API: process.env.GITHUB_PROFILE_API,
    // NODE_ENV: process.env.NODE_ENV,
    // PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    // MONGO_URI: process.env.MONGO_URI
  };
};
