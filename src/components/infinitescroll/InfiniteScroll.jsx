import React, { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [count, setCount] = useState(20);
  let elements = [];

  for (let i = 0; i < count; i++) {
    elements.push(<h2 key={i}>Item {i + 1}</h2>);
  }

  useEffect(() => {
    function handleScroll() {
      const scrollPos =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 30;
      if (scrollPos) {
        console.log("called");
        setCount((count) => count + 20);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => console.log("scroll removed"));
    };
  }, []);

  return (
    <div>
      <h1>Infinite Scroll</h1>
      <main>{elements}</main>
    </div>
  );
};

export default InfiniteScroll;
