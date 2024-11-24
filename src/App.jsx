import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";

const App = () => {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Container />} />
        {routes.map((r) => (
          <Route path={r.path} element={<r.component />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
