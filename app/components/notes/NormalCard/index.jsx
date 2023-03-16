import { Link } from "@remix-run/react";

const NormalCard = ({ nota }) => {
  return (
    <div>
      <div className="">
        <div className="flex justify-center">
          <Link to="/playas/20000204/slug-nota">
            <img src={nota.image_url} alt={nota.title} className={"w-full h-44"} />
          </Link>
        </div>
        <div className="py-5">
          <div className="text-2xl hover:text-primary">
            <Link to="/playas/20000204/slug-nota">{nota.title}</Link>
          </div>
          <div className="my-3 flex flex-row justify-between text-[12px]">
            <div>
              <strong>{nota.author.name}</strong> - {nota.fecha}
            </div>
            <div>
              <div className="w-4 h-5 bg-black text-white flex justify-center items-center">0</div>
            </div>
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: nota.description }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCard;
