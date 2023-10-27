import { getConfig, getSanitizedConfig } from "@/lib/helpers/env";

const config = getConfig();

export const sanitizedConfig = getSanitizedConfig(config);
