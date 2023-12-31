import { FC } from "react";
import { AgendaItem } from "../types";
import { AGENDA } from "../content/agenda";

const Item: FC<AgendaItem> = ({ caption, children, title }) => {
  return (
    <li className="flex flex-col pl-[10vw] mb-24 md:mb-36 relative after:absolute after:content-[''] after:-left-1.5 md:after:-left-2 after:top-3  after:w-3 after:h-3 md:after:w-4 md:after:h-4 after:bg-primary after:rounded-full after:ring-8 after:ring-primary/20">
      <h3>{title}</h3>
      <span className="mt-3 text-white/60 mb-6">{caption}</span>
      <p>{children}</p>
    </li>
  );
};

export const AgendaSection: FC = () => {
  return (
    <section id="sessions" className="flex flex-col">
      <div className="flex items-center">
        <h2>
          Our Planned <span className="text-primary">Sessions</span>
        </h2>
        <div
          className="flex-1 h-px ml-16 hidden md:block"
          style={{
            background: `linear-gradient(270deg, rgba(255, 255, 255, 0.20) 70.04%, rgba(255, 255, 255, 0.00) 100%)`,
          }}
        ></div>
      </div>
      <div className="w-px h-24 bg-white/20 ml-auto relative -top-[24px] hidden md:block"></div>
      <div className="w-[calc(100%-10vw)] h-px bg-white/20 ml-auto relative -top-[24px] hidden md:block"></div>
      <div className="w-px h-24 bg-gradient-to-t from-white/20 to-white/0 relative left-[5vw] mt-10 md:hidden"></div>
      <div className="flex flex-col relative md:-top-[24px] md:mt-0 ml-[5vw] md:ml-[10vw]">
        <div className="w-px h-full bg-white/20 absolute left-0 top-0"></div>
        <ul className="flex flex-col md:mt-36">
          {AGENDA.map((ai, i) => (
            <Item key={i} {...ai} />
          ))}
        </ul>
      </div>
      <div
        className="w-[calc(100%-5vw)] md:w-[calc(100%-10vw)] ml-auto h-px relative md:-top-[24px]"
        style={{
          background: `linear-gradient(90deg, rgba(255, 255, 255, 0.20) 70.04%, rgba(255, 255, 255, 0.00) 100%)`,
        }}
      ></div>
    </section>
  );
};
