import { getConfig, getSanitizedConfig } from "@/lib/helpers";

const config = getConfig();

export const sanitizedConfig = getSanitizedConfig(config);
