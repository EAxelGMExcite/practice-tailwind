import { Link } from "@remix-run/react";

const ArticulosRelacionadosCard = ({ nota }) => {
  return (
    <div>
      <div className="flex-none">
        <Link to="/categoria/20000402/nota-con-su-respectivo-slug" className="flex-shrink-0">
          <img className="w-full h-40" src={nota.imagen} alt="Mexico Travel Channel" />
        </Link>
      </div>
      <div>
        <Link to="/categoria/20000402/nota-con-su-respectivo-slug" className="font-medium hover:text-primary">
          {nota.title}
        </Link>
      </div>
    </div>
  );
};

export default ArticulosRelacionadosCard;
