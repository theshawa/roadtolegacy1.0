import { FC } from "react";
import { ContactLink, ContactPerson } from "../types";
import { CONTACT } from "../content/contact";

const Person: FC<ContactPerson> = ({ email, name, tel, title }) => {
  return (
    <article
      className="flex flex-col items-center max-w-[263px] mx-auto md:mx-20 mb-20 md:mb-24"
      title={`Contact ${name}`}
    >
      <h4 className="font-medium text-[18px] md:text-[20px]">{name}</h4>
      <span className="mt-1 uppercase text-white/70 text-[14px]">{title}</span>
      <a href={`mailto:${email}`} title="Email" className="mt-4">
        {email}
      </a>
      <a href={`mailto:${email}`} title="Telephone Number" className="mt-1">
        {tel}
      </a>
    </article>
  );
};

export const Link: FC<ContactLink> = ({ title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      title={`Visit ${title}`}
      className="flex items-center group bg-white/10 rounded-md backdrop-blur-sm space-x-2 font-medium px-[20px] py-[10px] mb-4 mx-2 uppercase"
    >
      <span>{title}</span>
      <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1C14 0.447716 13.5523 4.87118e-07 13 2.34237e-07L4 1.03503e-06C3.44771 6.97852e-07 3 0.447716 3 1C3 1.55229 3.44771 2 4 2L12 2L12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10L14 1ZM1.70711 13.7071L13.7071 1.70711L12.2929 0.292894L0.292893 12.2929L1.70711 13.7071Z"
            fill="#F36430"
          />
        </svg>
      </span>
    </a>
  );
};

export const ContactSection: FC = () => {
  return (
    <section id="contact" className="flex flex-col items-center text-center">
      <h2>
        Feel free to <span className="text-primary">REACH US</span>
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center mt-28">
        {CONTACT.people.map((p, i) => (
          <Person key={i} {...p} />
        ))}
      </div>
      <div className="flex flex-row flex-wrap justify-center mt-28">
        {CONTACT.links.map((l, i) => (
          <Link key={i} {...l} />
        ))}
      </div>
    </section>
  );
};
