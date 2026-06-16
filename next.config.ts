import type { NextConfig } from "next";
import packageJson from "./package.json";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false, /* Dev tool option */
  reactCompiler: true,
  env: {
    APP_VERSION: packageJson.version,
  },
};

export default nextConfig;
