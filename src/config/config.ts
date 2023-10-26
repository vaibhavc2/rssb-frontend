import { getConfig, getSanitizedConfig } from "@/lib/helpers";

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

const EnvVariables = sanitizedConfig;

export default EnvVariables;
