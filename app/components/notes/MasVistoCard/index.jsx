import { Link } from "@remix-run/react";

const MasVistoCard = ({ nota }) => {
  return (
    <div className="flex flex-row gap-4 mt-5">
      <div className="flex-none">
        <Link to="/categoria/20000402/nota-con-su-respectivo-slug" className="flex-shrink-0">
          <img className="w-28 h-20" src={nota.imagen} alt="Mexico Travel Channel" />
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

export default MasVistoCard;
