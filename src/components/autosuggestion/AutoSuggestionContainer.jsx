import React from "react";
import AutoSuggestion from "./AutoSuggestion";

const AutoSuggestionContainer = () => {
  const fetchData = async (query) => {
    const url = "https://dummyjson.com/recipes/search?q=";
    try {
      const response = await fetch(`${url}${query}`);
      if (response.ok) {
        const data = await response.json();
        if (data) {
          return data.recipes;
        }
      }
    } catch (err) {}
  };
  return (
    <AutoSuggestion
      placeholder="Enter Text"
      fetchData={fetchData}
      staticData={staticData}
      dataKey={"name"}
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default AutoSuggestionContainer;

const staticData = [];
