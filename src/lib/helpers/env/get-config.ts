import { Env } from "@/types";

export const getConfig = (): Env => {
  return {
    APPWRITE_URL: process.env.APPWRITE_URL,
    APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
    APPWRITE_DATABASE_ID: process.env.APPWRITE_DATABASE_ID,
    APPWRITE_COLLECTION_ID: process.env.APPWRITE_COLLECTION_ID,
    APPWRITE_BUCKET_ID: process.env.APPWRITE_BUCKET_ID,
    GITHUB_PROFILE_API: process.env.GITHUB_PROFILE_API,
    // PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
  };
};
