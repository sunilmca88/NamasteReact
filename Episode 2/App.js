
import React from "react";
import ReactDom from "react-dom/client";

const heading = React.createElement("h1",{id:'heading'},"Hello World from React! ");
const child = React.createElement('div',{id:'child'},[heading, heading]);
const parent = React.createElement('div',{id:'parent'},child);
console.log(heading);
const root = ReactDom.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);



