

const heading = React.createElement("h1",{id:'heading'},"Hello World from React!");
const child = React.createElement('div',{id:'child'},[heading, heading]);
const parentElem = React.createElement('div',{id:'parent'},child);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parentElem);



