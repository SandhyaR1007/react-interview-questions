import { BishopGrid, Chess, Counter, ProgressBar } from "../components";

export const routes = [
  {
    name: "Counter",
    path: "/counter",
    component: Counter,
  },
  {
    name: "Chess",
    path: "/chess",
    component: Chess,
  },
  {
    name: "Position of Bishop",
    path: "/positionOfBishop",
    component: BishopGrid,
  },
  {
    name: "Progress Bar",
    path: "/progressBar",
    component: ProgressBar,
  },
];
