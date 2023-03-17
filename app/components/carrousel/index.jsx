import { Link } from "@remix-run/react";

const Carrousel = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row gap-1">
        <div className="basis-1/2">
          <div className="h-96 md:h-[30rem] flex flex-col justify-end zoom" style={{ backgroundImage: "url('https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-89-534x462.png')", backgroundSize: "cover" }}>
            <Link to="/category/20000204/slug-note" className="text-[27px] font-bold bg-primary/75 px-3">
              Super Plan en Desfile Artesanal en CDMX con mojigangas y todo
            </Link>
            <div className="bg-[#000000bb] px-2 text-[12px] py-1 w-fit">Axel Gonzalez - 04/02/2000</div>
          </div>
        </div>
        {/* Aqui muuestro el demas componente para PC */}
        <div className="hidden basis-1/2 md:flex flex-col gap-1">
          <div className="basis-1/2 h-[15rem] zoom" style={{ backgroundImage: "url('https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-89-534x462.png')", backgroundSize: "cover" }}>
            <div className="h-[15rem] flex flex-col justify-end">
              <Link to="/category/20000204/slug-note" className="text-[20px] font-bold bg-primary/75 px-3">
                Super Plan en Desfile Artesanal en CDMX con mojigangas y todo
              </Link>
            </div>
          </div>
          <div className="basis 1/2 flex flex-col md:flex-row gap-1">
            <div className="basis-1/2 flex flex-col justify-end zoom" style={{ backgroundImage: "url('https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-89-534x462.png')", backgroundSize: "cover" }}>
              <div className="h-[15rem] flex flex-col justify-end">
                <Link to="/category/20000204/slug-note" className="text-[15px] font-bold bg-primary/75 px-3">
                  Super Plan en Desfile Artesanal en CDMX con mojigangas y todo
                </Link>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col justify-end zoom" style={{ backgroundImage: "url('https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-89-534x462.png')", backgroundSize: "cover" }}>
              <div className="h-[15rem] flex flex-col justify-end">
                <Link to="/category/20000204/slug-note" className="text-[15px] font-bold bg-primary/75 px-3">
                  Super Plan en Desfile Artesanal en CDMX con mojigangas y todo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aqui muestro el para mobil */}

      <div className="md:hidden my-1">
        <div className="slider">
          <div className="flex flex-col justify-end" style={{ height: "200px", backgroundImage: "url('https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-89-534x462.png')", backgroundSize: "cover" }}>
            <Link to="/category/20000204/slug-note" className="text-[15px] font-bold bg-primary/75 px-3">
              Super Plan en Desfile Artesanal en CDMX con mojigangas y todo
            </Link>
          </div>
          <div className="flex flex-col justify-end" style={{ height: "200px", backgroundImage: "url('https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-89-534x462.png')", backgroundSize: "cover" }}>
            <Link to="/category/20000204/slug-note" className="text-[15px] font-bold bg-primary/75 px-3">
              Super Plan en Desfile Artesanal en CDMX con mojigangas y todo
            </Link>
          </div>
          <div className="flex flex-col justify-end" style={{ height: "200px", backgroundImage: "url('https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-89-534x462.png')", backgroundSize: "cover" }}>
            <Link to="/category/20000204/slug-note" className="text-[15px] font-bold bg-primary/75 px-3">
              Super Plan en Desfile Artesanal en CDMX con mojigangas y todo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
