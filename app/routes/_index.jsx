import AnunucioHorizontal from "~/components/anuncios/anuncio-horizontal";
import Error from "~/components/error";
import EnVivoGlobal from "~/components/en-vivo";

export const ErrorBoundary = ({ error }) => {
  console.log({ error });
  return (
    <div>
      <Error code={500} message={error.message} message_details={error.stack} />
    </div>
  );
};

const Inicio = () => {
  return (
    <div>
      <div>
        <AnunucioHorizontal />
      </div>

      <div className="mt-10">IMAGENES</div>

      <div className="mt-10">
        <EnVivoGlobal />
      </div>
    </div>
  );
};

export default Inicio;
