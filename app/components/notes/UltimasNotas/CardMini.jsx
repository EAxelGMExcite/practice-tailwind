import { Link } from "@remix-run/react";

const CardMini = ({ nota }) => {
  return (
    <div>
      <div className=" shadow">
        <div className="flex gap-5">
          <div>
            <Link to="/category/20000204/slug-nota">
              <img src={nota.image_url} alt={nota.title} className="w-32 h-full" />
            </Link>
          </div>
          <div className="pb-2 px-1">
            <div className="text-[14px] font-medium hover:text-primary">
              <Link to="/category/20000204/slug-nota">{nota.title}</Link>
            </div>
            <div className="text-[12px] flex gap-5 mt-2">
              <div>
                <Link to="/category" className="bg-black px-1 text-[12px] text-white hover:bg-primary">
                  {nota.category.name}
                </Link>
              </div>
              <div>{nota.fecha}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMini;
