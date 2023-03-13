import { /* Fragment, */ useEffect, useState } from "react";
import {
  Disclosure,
  /* Menu, Transition */ Dialog,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  /* BellIcon, */ XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "@remix-run/react";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "Contacto", href: "/contacto", current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);

  const location = useLocation();

  useEffect(() => {
    //console.log("hola");
  }, [location]);

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-primary">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="/images/mexico-travelchannel-logo.png"
                        alt="Mexico Travel Channel"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.href === location.pathname
                                ? "bg-red-900 text-white"
                                : "text-gray-300 hover:bg-red-400 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <button
                      className="inline-flex items-center justify-center rounded-md bg-primary p-2 text-gray-400 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                      onClick={() => setOpenModal(!openModal)}
                    >
                      <span className="sr-only">Open main menu</span>
                      {openModal ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {openModal && (
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 md:hidden">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      as="a"
                      to={item.href}
                      className={classNames(
                        item.href === location.pathname
                          ? "bg-red-900 text-white"
                          : "text-gray-300 hover:bg-red-400 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Nav;
