import React from "react";

const SuggestionList = ({
  suggestions,
  onSuggestionClick,
  dataKey,
  highlightText,
}) => {
  const getHighlightedText = (text, highlightText) => {
    const parts = text.split(new RegExp(`(${highlightText})`, "gi"));
    return (
      <span>
        {parts.map((p) =>
          p.toLowerCase() === highlightText.toLowerCase() ? (
            <span style={{ color: "lightgreen" }}>{p}</span>
          ) : (
            p
          )
        )}
      </span>
    );
  };
  return (
    <ul>
      {" "}
      {suggestions.map((r) => (
        <li key={r}>{getHighlightedText(r, highlightText)}</li>
      ))}
    </ul>
  );
};

export default SuggestionList;
