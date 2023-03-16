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

const EnVivo = () => {
  return (
    <div>
      <div>
        <AnunucioHorizontal />
      </div>

      <div className="mt-10">
        <EnVivoGlobal />
      </div>

      <div className="mt-5">
        <my-table name="vibetv"></my-table>
      </div>
    </div>
  );
};

export default EnVivo;
