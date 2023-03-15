const CardBig = ({ nota }) => {
  return (
    <div className="flex flex-row gap-4 mt-5 bg-white lg:shadow-md">
      <div className="flex-none">
        <div className="flex-shrink-0">
          <img
            className="w-28 h-20 lg:w-80 lg:h-48"
            src={nota.imagen}
            alt="Mexico Travel Channel"
          />
        </div>
      </div>
      <div>
        <div className="hidden lg:block">{nota.categoria.name}</div>
        <div className="font-medium">{nota.title}</div>
        <div>{nota.date}</div>
        <div className="mt-5 hidden lg:block">
          <div
            dangerouslySetInnerHTML={{
              __html: nota.description,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardBig;
