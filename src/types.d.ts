import { ReactNode } from "react";

export interface AgendaItem {
  title: string;
  caption: string;
  children: ReactNode;
}

export interface Partner {
  name: string;
  image: string;
  link: string;
  description: string;
  dark?: boolean;
}

export interface ContactPerson {
  name: string;
  title: string;
  email: string;
  tel: string;
}

export interface ContactLink {
  title: string;
  link: string;
}
