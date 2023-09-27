import {
  bundleAppModule,
  bundleInitialHtmlModule,
  getBundledAssetsLocationMap,
} from "stew-library/internal";
import { Esbuild } from "../stew-library/deps/esbuild/mod.ts";

await writeClientBundleAssets();
Esbuild.close();

async function writeClientBundleAssets() {
  const [[initialHtmlScript, splashPageCss], [appScript, appCss]] =
    await Promise.all([
      bundleInitialHtmlModule({
        moduleEntryPath: "./stew-command/client/html/InitialStewHtml.tsx",
      }),
      bundleAppModule({
        moduleEntryPath: "./stew-command/client/app/main.tsx",
      }),
    ]);
  const bundledAssetClientPathMap = getBundledAssetsLocationMap({
    baseLocation: "./stew-command",
  });
  Deno.writeTextFileSync(
    bundledAssetClientPathMap.initialHtmlScript,
    initialHtmlScript
  );
  Deno.writeTextFileSync(
    bundledAssetClientPathMap.splashPageCss,
    splashPageCss
  );
  Deno.writeTextFileSync(bundledAssetClientPathMap.appScript, appScript);
  Deno.writeTextFileSync(bundledAssetClientPathMap.appCss, appCss);
}