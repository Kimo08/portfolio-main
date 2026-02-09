import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 4,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Km Banking Application",
    des: "A secure software system that allows you to manage your finances, perform transactions 24/7",
    img: "/bank.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/shadcn-ui.png"],
    link: "/km-banking-vert.vercel.app",
  },
  {
    id: 2,
    title: "Raxs - Social media App",
    des: "Simplify your social media experience with Raxs. Seamlessly connect with colleagues and friends.",
    img: "/chat2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/material-ui.svg"],
    link: "/raxs.vercel.app",
  },
  {
    id: 3,
    title: "CCRW - Church Website",
    des: "A virtual front door welcoming both members and newcomers alike offering updates on upcoming events and providing resources for spiritual growth",
    img: "/ccrw.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "/ccrw.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Kennedy was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kennnedy's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kennedy is the ideal partner.",
    name: "Okpara Favour",
    title: "Frontend Developer",
  },
  {
    quote:
      "Collaborating with Kennedy was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kennedy's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kennedy is the ideal partner.",
    name: "Michael",
    title: "Fullstack Developer",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Dev",
    desc: "Designed and developed web solution for companies.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Kimo08",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/K_e_n_n_e_d_y",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kennedy-obasi-61a38a325/",
  },
  {
    id: 4,
    img: "/wha.svg",
    link: "https://wa.me/+2348140817343",
  },
];
