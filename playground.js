import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const URL = publicRuntimeConfig.publicURL;
export const STATIC = publicRuntimeConfig.static;
