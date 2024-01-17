import { FC } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/Hero.Section";
import { Bg } from "./components/Bg";
import { AboutSection } from "./components/About.Section";
import { AgendaSection } from "./components/Agenda.Section";
import { PartnersSection } from "./components/Partners.Section";
import { ContactSection } from "./components/Contact.Section";
import { LocationSection } from "./components/Location.Section";

export const App: FC = () => {
  return (
    <>
      <Bg />
      <Header />
      <main className="flex flex-col page-space-x mt-24 md:mt-28">
        <HeroSection />
        <AboutSection />
        <AgendaSection />
        <PartnersSection />
        <hr />
        <LocationSection />
        <hr />
        <ContactSection />
        <hr />
      </main>
      <Footer />
    </>
  );
};
