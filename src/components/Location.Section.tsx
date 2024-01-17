import { FC } from "react";
import { TITLE, MAP_LINK, LOCATION_LINK } from "../content/location";
import { Link } from "./Contact.Section";

export const LocationSection: FC = () => {
  return (
    <section
      id="location"
      className="flex flex-col max-w-screen-md mx-auto items-center text-center"
    >
      <div className="flex flex-col mt-20 mb-10">
        <h2>
          Location of Event Unveiled, What's the{" "}
          <span className="text-primary">Venue</span>?
        </h2>
        <p className="mt-12 md:mt-16 text-[20px]">{TITLE}</p>
        <div className="flex flex-row flex-wrap justify-center mt-16">
          <Link link={LOCATION_LINK} title="About Location" />
          <Link link={MAP_LINK} title="View on map" />
        </div>
      </div>
    </section>
  );
};
