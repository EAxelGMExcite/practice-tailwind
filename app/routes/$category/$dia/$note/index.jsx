import { Link, useCatch, useLoaderData, useLocation } from "@remix-run/react";
import { Visibility as VisibilityIcon, Facebook as FacebookIcon, Twitter as TwitterIcon, Pinterest as PinterestIcon, WhatsApp as WhatsAppIncon } from "@mui/icons-material";
import AnunucioHorizontal from "~/components/anuncios/anuncio-horizontal";
import { getFullDateFromString } from "~/components/helpers";
import BloqueDerecha from "~/components/helpers/BloqueDerecha";
import AnunucioCuadrado from "~/components/anuncios/anuncio-cuadrado";
import TextUnlined from "~/components/helpers/TextUnlined";
import ArticulosRelacionadosCard from "~/components/notes/ArticulosRelacionadosCard";
import { useEffect, useState } from "react";
import Error from "~/components/error";

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

  const nota = {
    title: "Playa la Escobilla, un paraíso de tranquilidad",
    subtitle: "Realiza ecoturismo en Playa la Escobilla.",
    image_destacada: "https://mexicotravelchannel.com.mx/wp-content/uploads/2022/06/Playa-la-escobilla-mtch-696x522.jpg",
    author: {
      name: "Axel González",
    },
    date: "2000-02-04",
    categoria,
  };

  const anuncios = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return { categoria, notas, nota, anuncios };
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

const Note = () => {
  const location = useLocation();
  const dataLoader = useLoaderData();
  const [shareSocialMedia, setShareSocialMedia] = useState([]);

  useEffect(() => {
    const domain = window.location;
    const shares = [
      { name: "Facebook", icon: <FacebookIcon />, color: "#516eab", url: `https://www.facebook.com/sharer.php?u=${domain.href}` },
      { name: "Twitter", icon: <TwitterIcon />, color: "#29c5f6", url: `https://twitter.com/intent/tweet?text=${dataLoader?.nota?.title}&url=${domain.href}` },
      { name: "Pinterest", icon: <PinterestIcon />, color: "#ca212a", url: `https://pinterest.com/pin/create/button/?url=${domain.href}&media=${dataLoader?.nota?.image_destacada}` },
      { name: "WhatsApp", icon: <WhatsAppIncon />, color: "#7bbf6a", url: `https://api.whatsapp.com/send?text=${dataLoader?.nota?.title}%20%20${domain.href}` },
    ];
    setShareSocialMedia([...shares]);

    // eslint-disable-next-line
  }, [location]);

  return (
    <div>
      <div>
        <AnunucioHorizontal />
      </div>

      <div className="pt-[50px]  ">
        <div className="text-primary flex flex-row divide-x divide-secondary gap-[10px] uppercase text-[8px] md:text-[12px]">
          <div>
            <Link to="/">Inicio</Link>
          </div>
          <div className="pl-3">
            <Link to="/categoria">{dataLoader?.categoria?.name}</Link>
          </div>
          <div className="pl-3">
            <div>{dataLoader?.nota?.title}</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-auto gap-4">
          <div className="basis-3/4 ">
            <div className="font-light text-[30px] md:text-[40px]">
              <div>{dataLoader?.nota?.title}</div>
            </div>
            <div className="mt-5 text-gray-500 italic md:text-[20px]">
              <div>{dataLoader?.nota?.subtitle}</div>
            </div>
            <div className="flex flex-row justify-between mt-5 text-[13px]">
              <div>
                Por: <strong>{dataLoader?.nota?.author.name}</strong> - {dataLoader?.nota?.date}
              </div>
              <div>
                <VisibilityIcon fontSize="small" />
                3729
              </div>
            </div>

            <div className="flex flex-col justify-left mt-5">
              <div>
                <img src={dataLoader?.nota?.image_destacada} alt={dataLoader?.nota?.title} className="w-x-auto" />
              </div>
              <div className="italic text-[12px]">Foto: Instagram/@travelito_mx</div>
            </div>

            <div className="py-10">
              <AnunucioHorizontal />
            </div>

            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ipsum veniam deleniti earum neque libero praesentium aperiam a magni labore nihil repellendus excepturi voluptatibus, consequuntur incidunt aliquid, autem doloremque recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe alias nostrum et voluptates unde est natus, quisquam incidunt officia numquam placeat officiis at nihil nemo quod, eveniet amet mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reprehenderit, neque pariatur eveniet impedit temporibus perspiciatis
              labore adipisci ex earum optio iste quo ad, obcaecati perferendis sequi consequuntur! Perspiciatis, in! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe deserunt ipsam excepturi at commodi voluptatem officia necessitatibus incidunt voluptatum ratione amet, aspernatur non consectetur expedita corrupti. Maiores quisquam animi nulla. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nostrum aliquid recusandae, officia voluptas sunt hic et expedita doloremque incidunt repudiandae adipisci quia temporibus itaque! Vitae cupiditate culpa ipsum
              repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, cumque? Quisquam atque culpa voluptatibus voluptatum at? Optio cum atque provident autem suscipit minus, consequatur quos, deleniti eligendi reprehenderit vitae dolorem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore enim, deleniti eum harum saepe veniam accusamus quaerat sequi quasi ad sed, incidunt esse perferendis quis. Nesciunt amet inventore esse commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugit qui earum laborum recusandae perferendis voluptates,
              itaque placeat expedita praesentium debitis voluptate deserunt dolorem enim facilis soluta quas repellat impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iste delectus cumque a cum nobis, inventore dolore aliquid impedit itaque tempora nulla qui eaque est adipisci? Eligendi veritatis nam voluptas.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-10">
              {dataLoader?.anuncios.map((anuncio, index) => (
                <div key={index} className="">
                  <AnunucioCuadrado />
                </div>
              ))}
            </div>

            <hr className="my-10" />
            <div>
              <div>
                <TextUnlined text="Compartir" />
              </div>
              <div className="flex gap-2 mt-5">
                {shareSocialMedia.map((share, index) => (
                  <div key={index}>
                    <a href={share.url} target="_blank" rel="noopener nofollow noreferrer">
                      {/* PARA USAR CLASES TAILWIND, POR EJEMPLO COLORES O OTROS ESTILOS AGREGARÑOS EN EL tailwind.config.js en safelist */}
                      <div className={`w-12 h-12 flex justify-center items-center text-white rounded bg-[${share.color}] hover:bg-stone-800`} /* style={{ backgroundColor: share.color }} */>
                        <div>{share.icon}</div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-10" />

            <div>
              <div>
                <TextUnlined text="Artículos Relacionados" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
                {dataLoader?.notas.map((nota, index) => (
                  <div key={index}>
                    <ArticulosRelacionadosCard nota={nota} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <div>
                <TextUnlined text="Más del autor" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
                {dataLoader?.notas.map((nota, index) => (
                  <div key={index}>
                    <ArticulosRelacionadosCard nota={nota} />
                  </div>
                ))}
              </div>
            </div>

            {/* <hr className="my-5" />

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
        </div> */}
          </div>

          <div className="basis-1/4">
            <BloqueDerecha notas={dataLoader.notas} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
