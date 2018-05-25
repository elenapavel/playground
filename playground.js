import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const STATIC = publicRuntimeConfig.static;
