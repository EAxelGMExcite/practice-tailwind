import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import tailwindcss from "../app/styles/tailwind.css";
import globalscss from "../app/styles/globals.css";
import Layout from "./components/layout";

import Error from "./components/error";

export const links = () => [
  { rel: "stylesheet", href: tailwindcss },
  { rel: "stylesheet", href: globalscss },
];

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Error
            code={caught.status}
            message={"No encontramos la página que estas buscando 😭"}
            message_details={caught.data}
          />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  console.log({ error });
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Error
            code={500}
            message={error.message}
            message_details={error.stack}
          />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

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
      </body>
    </html>
  );
}
