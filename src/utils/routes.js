import Counter from "../components/counter/Counter";
import InfiniteScroll from "../components/infiniteScroll/InfiniteScroll";

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
];
