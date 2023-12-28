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
        className="w-[120px] md:w-[153px] aspect-square ring-8 ring-white/20 rounded-full object-center object-cover"
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
      <p className="max-w-[659px] mt-6">
        Lorem ipsum dolor sit amet consectetur. Non eu in accumsan vitae odio
        consectetur enim. Pulvinar enim ornare fringilla praesent orci quisque.
        Et nunc adipiscing viverra mattis. Mauris tincidunt porta aenean ornare
        penatibus lobortis. Tempor a pellentesque pellentesque bibendum.
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center mt-28">
        {PARTNERS.map((partner, i) => (
          <Item key={i} {...partner} />
        ))}
      </div>
    </section>
  );
};
