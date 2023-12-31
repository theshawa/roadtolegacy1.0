import { FC } from "react";
import logo from "../assets/logo.svg";

export const Footer: FC = () => {
  return (
    <footer className="page-space-x flex flex-col items-center text-center py-32">
      <img src={logo} alt="Logo of Road To Legacy" className="w-40 sm:w-48" />
      <p className="mt-8">
        Made by{" "}
        <a href="https://theshawa-dev.web.app" title="Visit Theshawa dasun">
          Theshawa Dasun
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/rasuwan-kalhara-7aa525217/"
          title="Visit Rasuwan Kalhara"
        >
          Rasuwan Kalhara
        </a>{" "}
        with ❤️ for IT LEGACY.
      </p>
      <p className="mt-4 text-sm text-white/70">
        © Copyright 2023. All Rights Reserved.
      </p>
    </footer>
  );
};
