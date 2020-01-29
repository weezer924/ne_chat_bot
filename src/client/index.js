import React from "react";
import ReactDOM from "react-dom";

fetch('/api/').then(response => {
  console.log(response.json());
})

export const Index = () => {
  return <div>Nextremer プログラミング課題!!!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index")); 