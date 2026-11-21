
import { coffee, laptop, pic, paper, phone, minecraft } from "../assets";
import { navLinks } from "./index";

export const deskItems = [
  {
    id: "projects",
    image: laptop,
    label: "Projects",
    href: navLinks.find(link => link.id === "projects").path,
    position: { top: "0%", left: "1%" },
    width: "clamp(130px, 24cqw, 360px)",
  },
  {
    id: "resume",
    image: paper,
    label: "Resume",
    href: navLinks.find(link => link.id === "resume").path,
    position: { top: "30%", left: "65%" },
    width: "clamp(65px, 10cqw, 150px)",
    rotation: "-6deg",
  },
  {
    id: "linkedin",
    image: phone,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zoha-qamar/",
    position: { top: "25%", left: "40%" },
    width: "clamp(65px, 10cqw, 150px)",
    rotation: "12deg",
  },
  {
    id: "about",
    image: pic,
    label: "About",
    action: "about",
    position: { top: "35%", left: "25%" },
    width: "clamp(50px, 7cqw, 110px)",
    rotation: "-12deg",
  },
  {
    id: "contact",
    image: coffee,
    label: "Contact",
    action: "contact",
    position: { top: "0%", left: "75%" },
    width: "clamp(60px, 8cqw, 130px)",
  },
  {
    id: "mine",
    image: minecraft,
    label: "MineDev",
    action: "inventory",
    position: { top: "0%", left: "55%" },
    width: "clamp(35px, 5cqw, 80px)",
  },
];
