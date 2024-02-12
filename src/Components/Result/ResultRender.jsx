import React from "react";
import './Result.css'
import { useState } from "react";
import { useEffect } from "react";

  const ResultRender = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    console.log(inputValue1.length);
  }, [inputValue1]);
  const handleChange = (event) => {
    setInputValue1(event.target.value);
  };
  const resultValue = (text) => {
    localStorage.setItem("key", inputValue);
    setInputValue(text);
  };
  useEffect(() => {
    resultValue();
  }, []);
  return (
    <div className="input">
      <input
        type="text"
        value={inputValue1}
        onChange={handleChange}
        placeholder=" console.log co sandar tyshot"
      />
      <input
        type="text"
        onChange={(e) => {
          resultValue(e.target.value);
        }}
        placeholder=" localStorage jazilat"
      />
    </div>
  );
};

export default ResultRender