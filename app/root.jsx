import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import tailwindcss from "../app/styles/tailwind.css";
import globalscss from "../app/styles/globals.css";
import Layout from "./components/layout";
import Error from "./components/error";

export const links = () => [
  { rel: "stylesheet", href: tailwindcss },
  { rel: "stylesheet", href: globalscss },
  /* { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" }, */
];

export const meta = () => ({
  charset: "utf-8",
  title: "México Travel Channel",
  viewport: "width=device-width,initial-scale=1",
});

export const ErrorBoundary = ({ error }) => {
  console.log({ error });
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Error code={500} message={error.message} message_details={error.stack} />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
      </body>
    </html>
  );
}
