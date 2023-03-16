import { Link } from "@remix-run/react";

const UltimaNota = ({ nota }) => {
  return (
    <div className=" shadow">
      <div>
        <Link to="/category/20000204/nota-slug">
          <img src={nota.image_url} alt={nota.title} className="w-full h-72 " />
        </Link>
      </div>
      <div className="p-3">
        <div className="text-2xl hover:text-primary">
          <Link to="/playas/20000204/slug-nota">{nota.title}</Link>
        </div>
        <div className="mt-3">
          <Link to="/category" className="bg-black p-1 text-[12px] text-white hover:bg-primary">
            {nota.category.name}
          </Link>
        </div>
        <div>
          <div className="my-3 flex flex-row justify-between text-[12px]">
            <div>
              <strong>{nota.author.name}</strong> - {nota.fecha}
            </div>
            <div>
              <div className="w-4 h-5 bg-black text-white flex justify-center items-center">0</div>
            </div>
          </div>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: nota.description }} />
        </div>
      </div>
    </div>
  );
};

export default UltimaNota;
