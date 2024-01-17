import { ContactLink, ContactPerson } from "../types";

export const CONTACT: {
  people: ContactPerson[];
  links: ContactLink[];
} = {
  people: [
    {
      email: "pwgis106@gmail.com",
      name: "Geethika Isuru",
      tel: "+94 77 144 2131",
      title: "Founder of ITLegacy",
    },
    {
      email: "armanasr257@gmail.com",
      name: "Amrah Nasrul",
      tel: "+94 77 804 2520",
      title: "Co-Chief Organizer",
    },
    {
      email: "bandarainod@gmail.com",
      name: "Inod Bandara",
      tel: "+94 76 963 1319",
      title: "Co-Chief Organizer",
    },
  ],
  links: [
    {
      title: "IEEE USJ SB",
      link: "https://www.linkedin.com/company/ieee-student-branch-usj/",
    },
    {
      title: "IEEE UCSC SB",
      link: "https://www.linkedin.com/company/ieee-student-branch-ucsc/",
    },
    // {
    //   title: "IEE UOM SB",
    //   link: "/",
    // },
  ],
};
