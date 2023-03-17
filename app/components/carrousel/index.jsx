const Carrousel = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row gap-1">
        <div className="basis-1/2">
          <div className="h-[30rem] flex flex-col justify-end" style={{ backgroundImage: "url('https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-89-534x462.png')", backgroundSize: "cover" }}>
            <div className="text-[27px] font-bold bg-primary/75 px-3">Super Plan en Desfile Artesanal en CDMX con mojigangas y todo</div>
            <div className="bg-[#000000bb] px-2 text-[12px] py-1 w-fit">Axel Gonzalez - 04/02/2000</div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col gap-1">
          <div className="basis-1/2 h-[15rem] flex flex-col justify-end" style={{ backgroundImage: "url('https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-89-534x462.png')", backgroundSize: "cover" }}>
            <div className="text-[20px] font-bold bg-primary/75 px-3">Super Plan en Desfile Artesanal en CDMX con mojigangas y todo</div>
          </div>
          <div className="basis 1/2 h-[15rem] flex flex-col md:flex-row gap-1">
            <div className="basis-1/2 flex flex-col justify-end" style={{ backgroundImage: "url('https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-89-534x462.png')", backgroundSize: "cover" }}>
              <div className="text-[15px] font-bold bg-primary/75 px-3">Super Plan en Desfile Artesanal en CDMX con mojigangas y todo</div>
            </div>
            <div className="basis-1/2 flex flex-col justify-end" style={{ backgroundImage: "url('https://mexicotravelchannel.com.mx/wp-content/uploads/2023/03/imagen-destacada-wordpress-89-534x462.png')", backgroundSize: "cover" }}>
              <div className="text-[15px] font-bold bg-primary/75 px-3">Super Plan en Desfile Artesanal en CDMX con mojigangas y todo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
