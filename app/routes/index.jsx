import AnunucioHorizontal from "~/components/anuncios/anuncio-horizontal";
import Error from "~/components/error";
import EnVivoGlobal from "~/components/en-vivo";
import TextUnlined from "~/components/helpers/TextUnlined";
import AnunucioCuadrado from "~/components/anuncios/anuncio-cuadrado";
import NormalCard from "~/components/notes/NormalCard";
import UltimaNota from "~/components/notes/UltimasNotas";
import CardMini from "~/components/notes/UltimasNotas/CardMini";
import { Button } from "@mui/material";
import Carrousel from "~/components/carrousel";
import { fetch } from "@remix-run/node";

export const ErrorBoundary = ({ error }) => {
  console.log({ error });
  return (
    <div>
      <Error code={500} message={error.message} message_details={error.stack} />
    </div>
  );
};

const anuncios = [1, 2, 3, 4, 5, 6];

const notas = [
  {
    title: "México pierde miles de turistas brasileños por pedirles visa",
    description: "<p>Entre septiembre de 2022 y enero de este año, México ha registrado una disminución en el número de turistas brasileños, que ha alcanzado la...</p>",
    fecha: "2000-02-04",
    author: {
      name: "Axel González",
    },
    image_url: "https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-42-324x160.png",
    category: {
      name: "catgory",
    },
  },
  {
    title: "México pierde miles de turistas brasileños por pedirles visa",
    description: "<p>Entre septiembre de 2022 y enero de este año, México ha registrado una disminución en el número de turistas brasileños, que ha alcanzado la...</p>",
    fecha: "2000-02-04",
    author: {
      name: "Axel González",
    },
    image_url: "https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-42-324x160.png",
    category: {
      name: "catgory",
    },
  },
  {
    title: "México pierde miles de turistas brasileños por pedirles visa",
    description: "<p>Entre septiembre de 2022 y enero de este año, México ha registrado una disminución en el número de turistas brasileños, que ha alcanzado la...</p>",
    fecha: "2000-02-04",
    author: {
      name: "Axel González",
    },
    image_url: "https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-42-324x160.png",
    category: {
      name: "catgory",
    },
  },
  {
    title: "México pierde miles de turistas brasileños por pedirles visa",
    description: "<p>Entre septiembre de 2022 y enero de este año, México ha registrado una disminución en el número de turistas brasileños, que ha alcanzado la...</p>",
    fecha: "2000-02-04",
    author: {
      name: "Axel González",
    },
    image_url: "https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-42-324x160.png",
    category: {
      name: "catgory",
    },
  },
  {
    title: "México pierde miles de turistas brasileños por pedirles visa",
    description: "<p>Entre septiembre de 2022 y enero de este año, México ha registrado una disminución en el número de turistas brasileños, que ha alcanzado la...</p>",
    fecha: "2000-02-04",
    author: {
      name: "Axel González",
    },
    image_url: "https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-42-324x160.png",
    category: {
      name: "catgory",
    },
  },
  {
    title: "México pierde miles de turistas brasileños por pedirles visa",
    description: "<p>Entre septiembre de 2022 y enero de este año, México ha registrado una disminución en el número de turistas brasileños, que ha alcanzado la...</p>",
    fecha: "2000-02-04",
    author: {
      name: "Axel González",
    },
    image_url: "https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-42-324x160.png",
    category: {
      name: "catgory",
    },
  },
  {
    title: "México pierde miles de turistas brasileños por pedirles visa",
    description: "<p>Entre septiembre de 2022 y enero de este año, México ha registrado una disminución en el número de turistas brasileños, que ha alcanzado la...</p>",
    fecha: "2000-02-04",
    author: {
      name: "Axel González",
    },
    image_url: "https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-42-324x160.png",
    category: {
      name: "catgory",
    },
  },
  {
    title: "México pierde miles de turistas brasileños por pedirles visa",
    description: "<p>Entre septiembre de 2022 y enero de este año, México ha registrado una disminución en el número de turistas brasileños, que ha alcanzado la...</p>",
    fecha: "2000-02-04",
    author: {
      name: "Axel González",
    },
    image_url: "https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-42-324x160.png",
    category: {
      name: "catgory",
    },
  },
];

const Inicio = () => {
  return (
    <div>
      <div>
        <AnunucioHorizontal />
      </div>

      <div className="mt-10">
        <Carrousel />
      </div>

      <div className="mt-10">
        <EnVivoGlobal />
      </div>
      <div className="mt-5 py-5 px-3">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="basis-3/4">
            <div>
              <TextUnlined text="Últimas noticias" />
            </div>
            <div className="mt-5">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="basis-1/2">
                  <UltimaNota nota={notas[0]} />
                </div>
                <div className="basis-1/2">
                  <div className="flex flex-col gap-5">
                    {notas.slice(0, 6).map((nota, index) => (
                      <div key={index}>
                        <CardMini nota={nota} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div>
                  <Button>Cargar Más</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="">
              <AnunucioCuadrado />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-[#f2f2f2] py-5 px-3">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="basis-3/4">
            <div>
              <TextUnlined text="Lo más visto" />
            </div>
            <div className="mt-5">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="basis-1/2">
                  <UltimaNota nota={notas[0]} />
                </div>
                <div className="basis-1/2">
                  <div className="flex flex-col gap-5">
                    {notas.slice(0, 6).map((nota, index) => (
                      <div key={index}>
                        <CardMini nota={nota} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="">
              <AnunucioCuadrado />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#333333] py-5 px-3 text-white">
        <div>
          <TextUnlined text="Historias en video" />
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {notas.slice(0, 3).map((nota, index) => (
            <div key={index}>
              <NormalCard nota={nota} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 py-5 px-3">
        <div>
          <TextUnlined text="Mundo" />
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {notas.slice(0, 3).map((nota, index) => (
            <div key={index}>
              <NormalCard nota={nota} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 ">
        <div className="uppercase font-bold">
          Te Recomendamos
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {anuncios.map((anuncio, index) => (
              <div key={index} className="">
                <AnunucioCuadrado />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
