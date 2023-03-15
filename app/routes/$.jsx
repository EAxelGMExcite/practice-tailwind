//import { json, redirect } from "@remix-run/node";
import { useCatch } from "@remix-run/react";
import Error from "../components/error";

export const loader = async ({ request }) => {
  //return json(null, { status: 404 });
  throw new Response("Not Found", {
    status: 404,
  });
};

export const meta = ({ data, params, location, parentsData }) => {
  return {
    title: "Oops...",
    description: "Página no encontrada :(",
  };
};

export const CatchBoundary = () => {
  const caught = useCatch();
  return (
    <div>
      <Error code={caught.status} message={"No encontramos la página que estas buscando 😭"} message_details={caught.data} />
    </div>
  );
};

export const ErrorBoundary = ({ error }) => {
  console.log({ error });
  return (
    <div>
      <Error code={500} message={error.message} message_details={error.stack} />
    </div>
  );
};

const All = () => {
  return (
    <div>
      <Error code={404} message={"No encontramos la página que estas buscando 😭"} message_details={"/ :c"} />
    </div>
  );
};

export default All;
