const parent = document.getElementById("parent");
// console.log(parent);
const root = ReactDOM.createRoot(parent);


//Using JSX
const h2 = (
  <h2 style={{ color: "blue", backgroundColor: "lightgray" }}>
    Welcome to React App
  </h2>
);
const li1 = <li>React</li>;
const li2 = <li>JS</li>;
const li3 = <li>C++</li>;
const container = (
  <ul style={{ backgroundColor: "black", color: "white" }}>
    {li1}
    {li2}
    {li3}
  </ul>
);

root.render(
  <>
    {h2}
    {container}
  </>
);
//<></> inko react fragments kehte hain
