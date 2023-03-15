import { Link } from "@remix-run/react";

const CardBig = ({ nota }) => {
  return (
    <div className="flex flex-row gap-4 mt-5 bg-white lg:shadow-md">
      <div className="flex-none">
        <Link to="/categoria/20000402/nota-con-su-respectivo-slug" className="flex-shrink-0">
          <img className="w-28 h-20 lg:w-80 lg:h-48" src={nota.imagen} alt="Mexico Travel Channel" />
        </Link>
      </div>
      <div>
        <Link to="/categoria" className="hidden lg:block hover:text-primary">
          {nota.categoria.name}
        </Link>
        <Link to="/categoria/20000402/nota-con-su-respectivo-slug" className="font-medium hover:text-primary">
          {nota.title}
        </Link>
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
