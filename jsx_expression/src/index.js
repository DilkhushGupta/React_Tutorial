import React from "react";
import ReactDOM from "react-dom";
const fname = "Happy";
ReactDOM.render(
  <>
    <h1>Hello my Name is {fname}</h1>
    <h3>And my lucky number is {Math.floor(Math.random() * 10)}</h3>
  </>,
  document.getElementById("root")
);
