import { Link } from "@remix-run/react";

const Footer = ({ navigation = [] }) => {
  return (
    <div className="bg-primary text-white">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 p-3">
        <div className="flex flex-col justify-center items-center gap-[20px] sm:flex-row">
          <div>
            <a
              href="https://benetworks.mx/"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <img
                className="sm:w-64 w-44"
                src="https://mexicotravelchannel.com.mx/wp-content/uploads/2020/12/be-networks_logo_x1__02_272x90.png"
                alt="benetworks"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.vibetv.mx/"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <img
                className="sm:w-64 w-44"
                src="https://mexicotravelchannel.com.mx/wp-content/uploads/2020/08/vibetv_logo_color_1x_280x96_03.png"
                alt="Vibe TV"
              />
            </a>
          </div>
          <div>
            <img
              className="sm:w-64 w-44"
              src="/icon.svg"
              alt="Mexico Travel Channel"
            />
          </div>
        </div>
        <div className="flex justify-between w-auto mt-10">
          <div>© México Travel Chanel | © {new Date().getFullYear()}</div>
          <div className="hidden lg:block ">
            <div className="flex gap-5 ">
              {navigation.map((nav, index) => (
                <div key={index}>
                  <Link to={nav.href}>{nav.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
