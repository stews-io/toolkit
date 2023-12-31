import {
  build as runBuild,
  transform as runTransform,
  stop as close,
  Plugin as EsbuildPlugin,
  TsconfigRaw,
} from "https://deno.land/x/esbuild@v0.19.2/mod.js";

const Esbuild = { runBuild, runTransform, close };

export { Esbuild };
export type { EsbuildPlugin, TsconfigRaw };
