/** @type {import('@remix-run/dev').AppConfig} */
//const { getDependenciesToBundle } = require("@remix-run/dev");

module.exports = {
  /* serverDependenciesToBundle: [
    ...getDependenciesToBundle(
      "react-markdown",
      "any-other-top-level-packages-you-import-and-need-to-bundle"
    )
  ], */

  ignoredRouteFiles: ["**/.*"],
  future: {
    unstable_tailwind: true,
    //v2_routeConvention: true,
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
