import React from "react";
import { routes } from "../utils/routes";
import { Link } from "react-router-dom";

const Container = () => {
  return (
    <div className="container">
      {routes.map((r) => (
        <div>
          <h3>{r.name}</h3>
          <Link to={r.path}>Visit</Link>
        </div>
      ))}
    </div>
  );
};

export default Container;
