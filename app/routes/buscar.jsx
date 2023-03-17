import { Link, useLoaderData } from "@remix-run/react";

import AnunucioHorizontal from "~/components/anuncios/anuncio-horizontal";
import BloqueDerecha from "~/components/helpers/BloqueDerecha";

import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";

export const loader = async ({ request, params }) => {
  const categoria = {
    name: "NOMBRE CATEGORIA",
    slug: "Categoria",
  };

  const notas = [
    {
      title: "Playa la Escobilla, un paraíso de tranquilidad",
      date: "2023-03-14",
      description: "<p>La playa la Escobilla es un destino de Oaxaca que todo turista debe conocer, y más si adoras la naturaleza y la conservación de...</p>",
      imagen: "https://mexicotravelchannel.com.mx/wp-content/uploads/2022/06/Playa-la-escobilla-mtch-696x522.jpg",
      categoria,
      author: {
        name: "Axel Gonzalez",
      },
      fecha: "2000-02-04",
    },
    {
      title: "México inaugurará nuevas playas en seis estados",
      date: "2023-03-14",
      description: "<p>Tendremos más playas maravillosas, el Fondo Nacional de Fomento Turístico (Fonatur), anunció que tras un análisis, se realizará la inauguración de nuevas playas en...</p>",
      imagen: "https://mexicotravelchannel.com.mx/wp-content/uploads/2023/02/imagen-destacada-wordpress-49-2-696x392.png",
      categoria,
      author: {
        name: "Axel Gonzalez",
      },
      fecha: "2000-02-04",
    },
  ];

  return { categoria, notas };
};

const Buscar = () => {
  const dataLoader = useLoaderData();
  const [search, setSearch] = useState("");
  const [notas, setNotas] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      //console.log({ search });
      setNotas(dataLoader.notas);
      if (search === "") {
        setNotas([]);
      }
    } catch (error) {
      console.log({ error });
    }
    setLoading(false);
    //setNotas(dataLoader.notas);
  };

  return (
    <div>
      <div>
        <div>
          <AnunucioHorizontal />
        </div>

        <div className="pt-[50px]  ">
          <div className="text-primary flex flex-row divide-x divide-secondary gap-[10px] uppercase text-[8px] md:text-[12px]">
            <div>
              <Link to="/">Inicio</Link>
            </div>
            <div className="px-3">Buscar</div>
          </div>
          <div className="flex flex-col md:flex-row w-auto gap-4 mt-10">
            <div className="basis-3/4 ">
              <div>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary/50 focus:border-primary/50"
                    placeholder="Buscar"
                    required
                  />
                  <button type="submit" onClick={handleSearch} className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-primary/70 focus:ring-4 focus:outline-none focus:ring-primary/30 font-medium rounded-lg text-sm px-4 py-2 ">
                    {loading ? "Cargando..." : "Buscar"} {/* <SearchIcon /> */}
                  </button>
                </div>

                <p className="text-gray-600 text-[12px] ">Si no estás feliz con los resultados, por favor realiza otra búsqueda</p>
              </div>

              <div className="mt-10">
                {notas &&
                  (notas.length > 0 ? (
                    <div>
                      <div className="font-medium text-2xl">Total de Resultados encontrados ({notas.length})</div>
                      <div className="mt-5 flex flex-col gap-5">
                        {notas.map((nota, index) => (
                          <div key={index}>
                            <ListaResultados nota={nota} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NoResultados />
                  ))}
              </div>
            </div>

            <div className="basis-1/4 ">
              <BloqueDerecha notas={dataLoader?.notas} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListaResultados = ({ nota }) => {
  //console.log({ nota });
  return (
    <div>
      <div className="flex gap-5">
        <div className="flex-none">
          <Link to="/category/20000204/nota-slug">
            <img src={nota.imagen} alt={nota.title} className="w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48" />
          </Link>
        </div>
        <div>
          <div className="text-2xl hover:text-primary">
            <Link to="/playas/20000204/slug-nota">{nota.title}</Link>
          </div>
          <div className="mt-3">
            <Link to="/category" className="bg-black p-1 text-[12px] text-white hover:bg-primary">
              {nota.categoria.name}
            </Link>
          </div>

          <div>
            <div className="my-3 flex flex-row justify-between text-[12px]">
              <div>
                <strong>{nota.author.name}</strong> - {nota.fecha}
              </div>
              <div>
                <div className="w-4 h-5 bg-black text-white flex justify-center items-center">0</div>
              </div>
            </div>
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: nota.description }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const NoResultados = () => {
  return <div className="font-medium text-3xl">No hay ningún resultado de su búsqueda</div>;
};

export default Buscar;
