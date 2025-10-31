const parent = document.getElementById("parent");
console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement(
  "h2",
  { style: { color: "blue", backgroundColor: "lightgray" } },
  "Welcome to React App"
);
root.render(h2);

//jsx se eek card banana hai

const pic = (
  <img
    src="https://tse1.mm.bing.net/th/id/OIP.-HaU96Rl5JtYVobGTROXBgHaHa?pid=Api&P=0&h=180"
    alt=""
    style={{ width: "100%", borderRadius: "5px" }}
  />
);

const myname = <h2>Name: Ayush Katiyar</h2>;
const Branch = <p>Computer Science</p>;
const section = <h3>B</h3>;
const college = <h4>ABES Engineering College</h4>;

const card = (
  <div
    style={{
      border: "1px solid black",
      borderRadius: "5px",
      padding: "10px",
      width: "200px",
      textAlign: "center",
    }}
  >
    {pic}
    {myname}
    {Branch}
    {section}
    {college}
  </div>
);

root.render(card);
