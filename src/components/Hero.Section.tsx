import { FC, useEffect, useState } from "react";
import { EVENT_DATE } from "../content/hero";

const Countdown: FC = () => {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const setupTime = () => {
      const millis = new Date(EVENT_DATE).getTime() - Date.now();
      setTime({
        d: Math.floor(millis / (24 * 60 * 60 * 1000)),
        h: Math.floor((millis % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
        m: Math.floor((millis % (60 * 60 * 1000)) / (60 * 1000)),
        s: Math.floor((millis % (60 * 1000)) / 1000),
      });
    };
    setupTime();
    const int = setInterval(setupTime, 1000);
    return () => clearInterval(int);
  }, []);

  const Value = (title: string, v: number) => (
    <div className="flex flex-col">
      <span className="text-[32px] md:text-[36px]">
        {Intl.NumberFormat("en-us", {
          minimumIntegerDigits: 2,
        }).format(v)}
      </span>
      <span className="uppercase text-[14px] text-white/70">{title}</span>
    </div>
  );

  return (
    <div className="flex space-x-10 items-center">
      {Value("Days", time.d)}
      {Value("Hours", time.h)}
      {Value("Minutes", time.m)}
      {Value("Seconds", time.s)}
    </div>
  );
};

export const HeroSection: FC = () => {
  return (
    <section className="min-h-[70vh] pt-[10vh] flex flex-col items-center text-center no-space mb-28 md:mb-32">
      <span className="font-montserrat uppercase font-bold text-[20px] md:text-[24px] tracking-wide">
        Road To Legacy 1.0
      </span>
      <h1 className="max-w-[688px] w-full mt-6">
        <span className="text-primary">Empowering</span>
        <br />
        the Next Generation of <span className="text-primary">IT</span> Leaders
      </h1>
      <span className="uppercase text-white/90 mt-20 mb-5 text-[14px]">
        Starts in
      </span>
      <Countdown />
      <hr className="mt-auto" />
    </section>
  );
};
