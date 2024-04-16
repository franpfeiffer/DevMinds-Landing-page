import { RiFacebookCircleFill, RiGithubFill, RiInstagramLine, RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";

export const footerData = [
  {
    id: 1,
    title: "Usefull Links",
    links: [
      {
        id: 1,
        name: "Content",
        link: "#",
      },
      {
        id: 2,
        name: "How we work",
        link: "#",
      },
      {
        id: 5,
        name: "Terms and Conditions",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Community",
    links: [
      {
        id: 1,
        name: "Francisco's Portfolio",
        link: "https://franciscopfeiffer.vercel.app",
      },
      {
        id: 2,
        name: "Marco's Portfolio",
        link: "https://marcosavarino.netlify.app",
      },
      {
        id: 3,
        name: "Facundo's LinkedIn",
        link: "https://www.linkedin.com/in/facundo-delgado-8826bb257/",
      },
    ],
  },
  {
    id: 3,
    title: "Partner",
    links: [
      {
        id: 1,
        name: "Our partners",
        link: "#",
      },
      {
        id: 2,
        name: "Become a partner",
        link: "#",
      },
    ],
  },
];

export const footerSocialNetworks = [
  {
    id: 1,
    icon: <RiInstagramLine />,
    link: "https://www.instagram.com/devminds_/"
  },
  {
    id: 2,
    icon: <RiTwitterXFill />,
    link: "https://twitter.com/devminds_"
  },
  {
    id: 3,
    icon: <RiLinkedinBoxFill />,
    link: "https://www.linkedin.com/company/devminds8/"
  },
  {
    id: 4,
    icon: <RiGithubFill />,
    link: "https://github.com/franpfeiffer/DevMinds-Landing-page/"
  },
];
