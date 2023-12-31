import { FC } from "react";
import { ABOUT } from "../content/about";

export const AboutSection: FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col max-w-screen-md mx-auto items-start"
    >
      <div
        className="w-full aspect-video bg-white/5 shadow-2xl relative before:content-[''] before:absolute before:-z-10 before:bg-white/5 before:w-full before:h-full before:left-2.5 before:top-2.5"
        style={{
          background: `url("${ABOUT.banner}") no-repeat center`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col mt-20">
        <h2>
          The Flagship Event
          <br /> of <span className="text-primary">IT Legacy</span>
        </h2>
        <p className="mt-4 md:mt-6">{ABOUT.content}</p>
      </div>
    </section>
  );
};
