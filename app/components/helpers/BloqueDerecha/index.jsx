import MasVistoCard from "~/components/notes/MasVistoCard";
import AnunucioCuadrado from "~/components/anuncios/anuncio-cuadrado";
import TextUnlined from "~/components/helpers/TextUnlined";

const BloqueDerecha = ({ notas = [] }) => {
  return (
    <div>
      <div>
        <AnunucioCuadrado />
      </div>
      <div className="my-[20px] flex flex-col">
        <div>
          <TextUnlined text="Lo más visto" />
        </div>
        <div className="">
          <div className="flex flex-col gap-5">
            {notas.map((nota, index) => (
              <div key={index}>
                <MasVistoCard nota={nota} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <AnunucioCuadrado />
      </div>

      <div className="my-[20px] flex flex-col ">
        <div>
          <TextUnlined text="Pueblos Mágicos" />
        </div>
        <div className="">
          <div className="flex flex-col gap-5">
            {notas.map((nota, index) => (
              <div key={index}>
                <MasVistoCard nota={nota} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <AnunucioCuadrado />
      </div>
    </div>
  );
};

export default BloqueDerecha;
