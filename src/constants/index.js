export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
    type: "internal",
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    type: "internal",
  },
  {
    id: "resume",
    title: "Resume",
    path: import.meta.env.VITE_RESUME_URL,
    type: "external",
  },
  {
    id: "projects",
    title: "Projects",
    path: "https://github.com/zohaq11",
    type: "external",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    type: "internal",
  },
];
