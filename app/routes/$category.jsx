import { Link, useLoaderData } from "@remix-run/react";

export const loader = async ({ request, params }) => {
  const { category } = params;

  const categoria = {
    name: "NOMBRE CATEGORIA",
    slug: category,
  };

  const notas = [
    {
      title: "Playa la Escobilla, un paraíso de tranquilidad",
      date: "2023-03-14",
      description:
        "<p>La playa la Escobilla es un destino de Oaxaca que todo turista debe conocer, y más si adoras la naturaleza y la conservación de...</p>",
      imagen:
        "https://mexicotravelchannel.com.mx/wp-content/uploads/2022/06/Playa-la-escobilla-mtch-696x522.jpg",
      categoria,
    },
    {
      title: "México inaugurará nuevas playas en seis estados",
      date: "2023-03-14",
      description:
        "<p>Tendremos más playas maravillosas, el Fondo Nacional de Fomento Turístico (Fonatur), anunció que tras un análisis, se realizará la inauguración de nuevas playas en...</p>",
      imagen:
        "https://mexicotravelchannel.com.mx/wp-content/uploads/2023/02/imagen-destacada-wordpress-49-2-696x392.png",
      categoria,
    },
  ];
  //console.log({ request, params });

  return { categoria, notas };
};

const Category = () => {
  const dataLoader = useLoaderData();
  return (
    <div>
      <div className="wx-auto flex justify-center py-[20px] bg-gray-400">
        <div>ANUNCIO</div>
      </div>

      <div className="pt-[50px]  ">
        <div className="text-primary flex flex-row divide-x divide-secondary gap-[10px] uppercase ">
          <div>
            <Link to="/">Inicio</Link>
          </div>
          <div className="px-3">{dataLoader?.categoria?.name}</div>
        </div>
        <div className="flex flex-col md:flex-row w-auto gap-4">
          <div className="basis-3/4 bg-primary">NOTAS</div>
          <div className="basis-1/4">
            <div className="flex justify-center">
              <div className="w-[250px] flex justify-center  py-[100px] bg-gray-400 ">
                <div>ANUNCIO</div>
              </div>
            </div>
            <div className="my-[20px] flex flex-col divide-y-4 divide-primary">
              <div className="w-1/2 bg-primary text-white px-2">
                Lo más visto
              </div>
              <div className="">
                <div className="flex flex-col gap-5">
                  {dataLoader.notas.map((nota, index) => (
                    <div key={index} className="flex flex-row gap-4 mt-5">
                      <div className="flex-none">
                        <div className="flex-shrink-0">
                          <img
                            className="w-28 h-20"
                            src={nota.imagen}
                            alt="Mexico Travel Channel"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{nota.title}</div>
                        <div>{nota.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[250px] flex justify-center  py-[100px] bg-gray-400 ">
                <div>ANUNCIO</div>
              </div>
            </div>
            <div className="my-[20px] flex flex-col divide-y-4 divide-primary">
              <div className="w-1/2 bg-primary text-white px-2">
                Pueblos Magicos
              </div>
              <div className="">
                <div className="flex flex-col gap-5">
                  {dataLoader.notas.map((nota, index) => (
                    <div key={index} className="flex flex-row gap-4 mt-5">
                      <div className="flex-none">
                        <div className="flex-shrink-0">
                          <img
                            className="w-28 h-20"
                            src={nota.imagen}
                            alt="Mexico Travel Channel"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{nota.title}</div>
                        <div>{nota.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[250px] flex justify-center  py-[100px] bg-gray-400 ">
                <div>ANUNCIO</div>
              </div>
            </div>
          </div>
        </div>
        {/* hola munod :D
        {JSON.stringify(dataLoader)} */}
      </div>
    </div>
  );
};

export default Category;
