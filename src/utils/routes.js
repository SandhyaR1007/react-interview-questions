import Chess from "../components/chessboard/Chess";

import Counter from "../components/counter/Counter";
import InfiniteScroll from "../components/infiniteScroll/InfiniteScroll";
import BishopGrid from "../components/positionofbishop/BishopGrid";

export const routes = [
  {
    name: "Counter",
    path: "/counter",
    component: Counter,
  },
  {
    name: "Infinite Scroll",
    path: "/infiniteScroll",
    component: InfiniteScroll,
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
];
