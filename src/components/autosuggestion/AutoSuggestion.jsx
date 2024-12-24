import React, { useState, useEffect, useCallback } from "react";
import SuggestionList from "./SuggestionList";
import useDebounce from "../../hooks/useDebounce";

const AutoSuggestion = ({
  placeholder,
  fetchData,
  staticData,
  dataKey,
  onChange,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const debounce = useDebounce();
  const fetchSuggestions = async () => {
    try {
      const data = await fetchData(inputValue);
      console.log(data);
      if (data.length) {
        setSuggestions(data.map((r) => r[dataKey]));
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      setSuggestions([]);
    }
  };
  const debouncedFetch = useCallback(
    debounce(() => {
      if (inputValue.length > 1) {
        fetchSuggestions(inputValue);
      } else {
        setSuggestions([]);
      }
    }, 1000),
    [] // Empty dependency array ensures debounce is only created once
  );
  useEffect(() => {
    debouncedFetch();
  }, [inputValue, debouncedFetch]);

  return (
    <div>
      <input
        type="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
      />
      <SuggestionList
        highlightText={inputValue}
        suggestions={suggestions}
        onSuggestionClick={() => console.log("clicked")}
      />
    </div>
  );
};

export default AutoSuggestion;
