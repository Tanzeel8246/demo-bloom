import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static export -> upload the generated `out/` folder contents
  // to the bloom.codehubb.com subdomain docroot. No Node server needed.
  // Deploys at the ROOT of the subdomain: no basePath.
  output: "export",
  // Emit /services/index.html style files so every route works on plain hosts.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
