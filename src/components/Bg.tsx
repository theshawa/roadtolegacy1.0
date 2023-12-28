import { FC } from "react";

export const Bg: FC = () => {
  return (
    <>
      <div
        className="fixed left-0 top-0 h-screen w-screen -z-10 opacity-[0.01]"
        style={{
          background: `url("/bg.png")`,
        }}
      ></div>
      <div
        className="h-[300vh] w-[100vh] md:w-screen md:h-[100vw] rounded-full -translate-y-1/2 opacity-50 md:opacity-100 md:-translate-y-[calc(100vw-65vh)] top-0 left-1/2 -translate-x-1/2 fixed -z-10"
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, rgba(204, 2, 255, 0.20) 0%, rgba(204, 2, 255, 0.00) 100%)`,
        }}
      ></div>
    </>
  );
};
