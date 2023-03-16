import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import tailwindcss from "../app/styles/tailwind.css";
import globalscss from "../app/styles/globals.css";
import Layout from "./components/layout";

export const links = () => [
  { rel: "stylesheet", href: tailwindcss },
  { rel: "stylesheet", href: globalscss },
];

export const meta = () => ({
  charset: "utf-8",
  title: "México Travel Channel",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script type="module" crossOrigin="true" src="/assets/index-7288338e.js"></script>
      </body>
    </html>
  );
}
