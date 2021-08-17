import { IAction, IRoute } from "./interfaces";

export const DEFAULT_LOCALE = "en";

export const routes: IRoute[] = [
  {
    label: "navbar.home",
    link: "/",
  },
  {
    label: "navbar.projects",
    link: "/projects",
  },
  {
    label: "navbar.about",
    link: "/about",
  },
];

export const actions: IAction[] = [
  {
    icon: "github.svg",
    link: "https://github.com/ANT-Studio",
  },
  {
    icon: "youtube.svg",
    link: "https://youtube.com",
  },
  {
    icon: "facebook.svg",
    link: "https://facebook.com",
  },
];
