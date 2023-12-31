export interface StewResourceMap<
  StewBuildId extends string = string,
  StewResourcesDirectoryPath extends `/stew_${StewBuildId}` = `/stew_${StewBuildId}`,
  StewAssetsDirectoryPath extends "/assets" = "/assets"
> {
  // core
  indexHtml: "/index.html";
  appScript: `/app.${StewBuildId}.js`;
  appCss: `/app.${StewBuildId}.css`;
  stewResourcesDirectoryPath: StewResourcesDirectoryPath;
  configPath: `${StewResourcesDirectoryPath}/stew.config.json`;
  modulesDirectoryPath: `${StewResourcesDirectoryPath}/modules`;
  datasetsDirectoryPath: `${StewResourcesDirectoryPath}/datasets`;
  stylesDirectoryPath: `${StewResourcesDirectoryPath}/styles`;
  viewsDirectoryPath: `${StewResourcesDirectoryPath}/views`;
  // secondary
  faviconIco: "/favicon.ico";
  faviconSvg: "/favicon.svg";
  manifestJson: "/manifest.json";
  robotsTxt: "/robots.txt";
  stewAssetsDirectoryPath: StewAssetsDirectoryPath;
  normalFontWoff: `${StewAssetsDirectoryPath}/RedHatMonoVF.woff2`;
  italicFontWoff: `${StewAssetsDirectoryPath}/RedHatMonoVF-Italic.woff2`;
  smallIconPng: `${StewAssetsDirectoryPath}/icon-192x192.png`;
  mediumIconPng: `${StewAssetsDirectoryPath}/icon-384x384.png`;
  largeIconPng: `${StewAssetsDirectoryPath}/icon-512x512.png`;
  extraLargeIconPng: `${StewAssetsDirectoryPath}/icon-2048x2048.png`;
}

export interface GetStewResourceMapApi<StewBuildId extends string> {
  stewBuildId: StewBuildId;
}

export function getStewResourceMap<StewBuildId extends string>(
  api: GetStewResourceMapApi<StewBuildId>
): StewResourceMap<StewBuildId> {
  const { stewBuildId } = api;
  const stewResourcesDirectoryPath: `/stew_${StewBuildId}` = `/stew_${stewBuildId}`;
  const stewAssetsDirectoryPath = "/assets";
  return {
    stewResourcesDirectoryPath,
    stewAssetsDirectoryPath,
    indexHtml: "/index.html",
    faviconIco: "/favicon.ico",
    faviconSvg: "/favicon.svg",
    manifestJson: "/manifest.json",
    robotsTxt: "/robots.txt",
    normalFontWoff: "/assets/RedHatMonoVF.woff2",
    italicFontWoff: "/assets/RedHatMonoVF-Italic.woff2",
    smallIconPng: "/assets/icon-192x192.png",
    mediumIconPng: "/assets/icon-384x384.png",
    largeIconPng: "/assets/icon-512x512.png",
    extraLargeIconPng: "/assets/icon-2048x2048.png",
    appScript: `/app.${stewBuildId}.js`,
    appCss: `/app.${stewBuildId}.css`,
    configPath: `${stewResourcesDirectoryPath}/stew.config.json`,
    modulesDirectoryPath: `${stewResourcesDirectoryPath}/modules`,
    datasetsDirectoryPath: `${stewResourcesDirectoryPath}/datasets`,
    stylesDirectoryPath: `${stewResourcesDirectoryPath}/styles`,
    viewsDirectoryPath: `${stewResourcesDirectoryPath}/views`,
  };
}
