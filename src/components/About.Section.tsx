import { FC } from "react";
import { ABOUT } from "../content/about";

export const AboutSection: FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row max-w-screen-lg mx-auto"
    >
      <div
        className="w-full flex-shrink-0 lg:w-1/2 md:max-w-[356px] aspect-video lg:aspect-[3/3.6] bg-white/5 shadow-2xl relative before:content-[''] before:absolute before:-z-10 before:bg-white/5 before:w-full before:h-full before:left-2.5 before:top-2.5"
        style={{
          background: `url("${ABOUT.banner}") no-repeat center`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col lg:ml-20 lg:mt-0 mt-20">
        <h2>
          The Flagship Event
          <br /> of <span className="text-primary">IT Legacy</span>
        </h2>
        <p className="mt-4 md:mt-6">{ABOUT.content}</p>
      </div>
    </section>
  );
};
