import TextUnlined from "~/components/helpers/TextUnlined";
import { social_medias } from "~/components/nav-footer/Nav";
import AnunucioCuadrado from "~/components/anuncios/anuncio-cuadrado";

const EnVivoGlobal = () => {
  return (
    <div className="py-10 px-3 md:px-5 bg-[#333333] text-white flex flex-col md:flex-row w-auto gap-10">
      <div className="basis-3/4">
        <div>
          <TextUnlined text="México Travel Channel en vivo" />
        </div>
        <div className="mt-5">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/X1nBzDWlBpQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
      <div className="basis-1/4">
        <div>
          <TextUnlined text="Siguenos en redes sociales" />
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-2">
            {social_medias.map(
              (social, index) =>
                social.isSocialMedia && (
                  <div key={index}>
                    <a href={social.href} target="_blank" rel="noopener nofollow noreferrer">
                      <div className={`w-full h-7 flex items-center justify-between text-white bg-[${social.color}] hover:bg-[#002d47] px-2 text-[12px] `}>
                        <div className="flex flex-row items-center gap-2 divide-x">
                          <div>{social.icon}</div>
                          <div className="pl-2">9,999,999 Seguidores</div>
                        </div>
                        <div className=" ">Seguir</div>
                      </div>
                    </a>
                  </div>
                )
            )}
          </div>
          <div className="mt-5">
            <AnunucioCuadrado />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnVivoGlobal;
