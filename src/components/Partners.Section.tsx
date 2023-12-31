import { FC } from "react";
import { PARTNERS } from "../content/partners";
import { Partner } from "../types";

const Item: FC<Partner> = ({ description, image, link, name }) => {
  return (
    <a
      className="flex flex-col items-center max-w-[263px] mx-auto md:mx-20 mb-20 md:mb-24 no-animation group"
      target="_blank"
      href={link}
      title={`Visit ${name}`}
    >
      <img
        src={image}
        alt={`Image of ${name}`}
        className="w-[120px] md:w-[153px] aspect-square ring-8 ring-white/20 rounded-full object-center object-contain bg-white p-4"
      />
      <h4 className="mt-5 text-[24px] md:text-[28px] uppercase font-medium">
        {name}
      </h4>
      <p className="mt-2">{description}</p>
      <span className="mt-3 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Click to Visit
      </span>
    </a>
  );
};

export const PartnersSection: FC = () => {
  return (
    <section id="partners" className="flex flex-col items-center text-center">
      <h2 className="max-w-[492px] w-full">
        <span className="text-primary">Our Partners</span>
        <br /> plays a major role
      </h2>
      <p className="max-w-[759px] mt-6">
        A heartfelt thank you to our partners who are integral to the success of
        Road to Legacy 1.0. Their unwavering support is instrumental in
        empowering the next generation of IT leaders. Through collaboration and
        dedication, our partners contribute significantly to creating a platform
        where knowledge and opportunity converge. Together, we are shaping a
        legacy that propels aspiring IT professionals toward success.
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center mt-28">
        {PARTNERS.map((partner, i) => (
          <Item key={i} {...partner} />
        ))}
      </div>
    </section>
  );
};
