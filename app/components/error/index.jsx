//import { Link } from "@remix-run/react";

const Error = ({
  code = 404,
  message = "Página no encontrada",
  message_details = "Sorry, we couldn’t find the page you’re looking for.",
}) => {
  return (
    <div>
      <div className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary text-[50px] md:text-[80px]">
            {code}
          </p>

          <h1 className="mt-[50px] text-3xl font-bold tracking-tight text-gray-900 md:text-[50px]">
            {message}
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-600">
            {message_details}
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              Ir al inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
