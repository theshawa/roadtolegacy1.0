import { FC, useState } from "react";
import logo from "../assets/logo.svg";

const HEADER_LINKS = {
  About: "#about",
  Sessions: "#sessions",
  Partners: "#partners",
  Location: "#location",
  Contact: "#contact",
};

const RegisterButton: FC = () => {
  return (
    <a
      title="Registration ending soon"
      href="https://techevents.lk/events/road-to-legacy-2023"
      className="bg-primary/95 text-white tracking-wide text-center font-bold py-2.5 no-animation ring-[1px] ring-primary/20 transition-all shadow-xl hover:before:scale-150 overflow-hidden before:transition-transform before:duration-1000 duration-1000 hover:ring-primary/90 ring-offset-2 ring-offset-dark px-5 uppercase relative register-button"
    >
      Register now
    </a>
  );
};

export const Header: FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <header className="fixed left-0 top-0 w-full flex items-center py-8 justify-between z-50 h-24 md:h-28">
        <div className="flex items-center justify-between page-space-x w-full">
          <img
            src={logo}
            alt="Logo of Road To Legacy"
            className="w-40 sm:w-48"
          />
          <nav className="hidden lg:flex items-center space-x-10">
            {Object.keys(HEADER_LINKS).map((key) => (
              <a
                className="uppercase hover:text-primary transition-colors duration-200 ease-in-out no-animation"
                key={key}
                href={HEADER_LINKS[key as keyof typeof HEADER_LINKS]}
              >
                {key}
              </a>
            ))}
            <RegisterButton />
          </nav>
          <button
            onClick={() => setMenuOpened((v) => !v)}
            className="flex flex-col space-y-1.5 w-8 h-8 justify-center lg:hidden relative items-center"
          >
            <div
              className={`h-px bg-white ${
                menuOpened ? "w-3" : "w-full"
              } transition-all duration-300`}
            ></div>
            <div
              className={`h-px bg-white ${
                menuOpened ? "w-6" : "w-6"
              } transition-all duration-300`}
            ></div>
            <div
              className={`h-px bg-white ${
                menuOpened ? "w-full" : "w-3"
              } transition-all duration-300`}
            ></div>
          </button>
        </div>
      </header>
      <div
        className={`w-full h-screen fixed left-0 top-0 bg-dark/95 pt-36 backdrop-blur z-40 py-8 flex flex-col space-y-8 page-space-x transition-all duration-300 lg:hidden ${
          menuOpened ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {Object.keys(HEADER_LINKS).map((key) => (
          <a
            onClick={() => setMenuOpened(false)}
            className="uppercase hover:text-primary transition-all after:transition-all after:duration-200 hover:after:bg-primary relative duration-200 ease-in-out pl-12 after:content-[''] after:w-8 after:top-1/2 after:-translate-y-1/2 hover:after:w-12 hover:pl-16 after:bg-white/60 after:absolute after:left-0 after:h-px no-animation"
            key={key}
            href={HEADER_LINKS[key as keyof typeof HEADER_LINKS]}
          >
            {key}
          </a>
        ))}
        <RegisterButton />
      </div>
    </>
  );
};
