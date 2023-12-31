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
      email: "geethikasavith@gmail.com",
      name: "Savith",
      tel: "+94 76 849 7017",
      title: "Program leads",
    },
  ],
  links: [
    {
      title: "IEE USJ SB",
      link: "https://www.linkedin.com/company/ieee-student-branch-usj/",
    },
    {
      title: "IEE UCSC SB",
      link: "https://www.linkedin.com/company/ieee-student-branch-ucsc/",
    },
    // {
    //   title: "IEE UOM SB",
    //   link: "/",
    // },
  ],
};
