const Carrousel = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row gap-1">
        <div className="basis-1/2 bg-yellow-700">IMAGEN PRINCIPAL</div>
        <div className="basis-1/2 flex flex-col gap-1 bg-fuchsia-700">
          <div className="basis-1/2 bg-green-900">Segunda imagen</div>
          <div className="basis 1/2 bg-rose-900 flex flex-col md:flex-row gap-1">
            <div className="basis-1/2 bg-cyan-900">Tercer Imagen</div>
            <div className="basis-1/2 border-indigo-800">Cuarta Imagen</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
