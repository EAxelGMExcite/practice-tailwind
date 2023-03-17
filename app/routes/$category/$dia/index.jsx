import { Link, useCatch, useLoaderData } from "@remix-run/react";
import CardBig from "~/components/notes/CarBig";
import { Button } from "@mui/material";
import EnVivoOtherSites from "~/components/en-vivo/EnVivoOtherSites";
import AnunucioHorizontal from "~/components/anuncios/anuncio-horizontal";
import { getFullDateFromString } from "~/components/helpers";
import BloqueDerecha from "~/components/helpers/BloqueDerecha";
import Error from "../../../components/error";

export const loader = async ({ request, params }) => {
  const { category, dia } = params;

  let day_complete_pretty = getFullDateFromString({ string_date: dia });

  if (!day_complete_pretty) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  //console.log({ category, dia, day_complete_pretty });

  const categoria = {
    name: "NOMBRE CATEGORIA",
    slug: category,
  };

  const notas = [
    {
      title: "Playa la Escobilla, un paraíso de tranquilidad",
      date: "2023-03-14",
      description: "<p>La playa la Escobilla es un destino de Oaxaca que todo turista debe conocer, y más si adoras la naturaleza y la conservación de...</p>",
      imagen: "https://mexicotravelchannel.com.mx/wp-content/uploads/2022/06/Playa-la-escobilla-mtch-696x522.jpg",
      categoria,
    },
    {
      title: "México inaugurará nuevas playas en seis estados",
      date: "2023-03-14",
      description: "<p>Tendremos más playas maravillosas, el Fondo Nacional de Fomento Turístico (Fonatur), anunció que tras un análisis, se realizará la inauguración de nuevas playas en...</p>",
      imagen: "https://mexicotravelchannel.com.mx/wp-content/uploads/2023/02/imagen-destacada-wordpress-49-2-696x392.png",
      categoria,
    },
  ];
  //console.log({ request, params });

  return { categoria, notas };
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

const Dia = () => {
  const dataLoader = useLoaderData();
  return (
    <div>
      <div>
        <AnunucioHorizontal />
      </div>

      <div className="pt-[50px]  ">
        <div className="text-primary flex flex-row divide-x divide-secondary gap-[10px] uppercase text-[8px] md:text-[12px] ">
          <div>
            <Link to="/">Inicio</Link>
          </div>
          <div className="px-3">{dataLoader?.categoria?.name}</div>
        </div>
        <div className="flex flex-col md:flex-row w-auto gap-4">
          <div className="basis-3/4 ">
            <hr className="my-5" />

            <div className="uppercase text-2xl font-bold">{dataLoader?.categoria?.name}</div>
            <div>
              {dataLoader.notas.map((nota, index) => (
                <div key={index} className="divide-x">
                  <CardBig nota={nota} />
                </div>
              ))}
              <div className="flex justify-center mt-10">
                <div>
                  <Button>Cargar Más</Button>
                </div>
              </div>
            </div>

            <div>
              <AnunucioHorizontal />
            </div>

            <div className="mt-10">
              <EnVivoOtherSites />
            </div>
          </div>

          <div className="basis-1/4">
            <BloqueDerecha notas={dataLoader.notas} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dia;
