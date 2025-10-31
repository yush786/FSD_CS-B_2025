const parent = document.getElementById('parent');
// console.log(parent);
const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement("h2", {style: { color: 'blue' ,backgroundColor: 'lightgray'}}, "Welcome to React App");

// const li1 = React.createElement("li", {}, "java");
// const li2 = React.createElement("li", {}, "Python");
// const li3 = React.createElement("li", {}, "React");

// const ul = React.createElement("ul", { style: { backgroundColor: 'black', color: 'white' } }, li1, li2, li3);
// const myname = React.createElement(
//   "h1",
//   { style: { color: "green" } },
//   "Ayush Katiyar"
// );
// const pic = React.createElement("img", {
//   src: "https://tse1.mm.bing.net/th/id/OIP.vta7h9S8RGp3GCwjs4wcdwHaEK?pid=Api&P=0&h=180",
//   style: { width: "200px", height: "200px", borderRadius: "50%" },
// });

// const wrapper1 = React.createElement("div", { style: { display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '80px' } }, myname, pic);
// const wrapper = React.createElement("div", {}, h2, wrapper1, ul);



//Using JSX
const h2 = <h2 style={{ color: 'blue', backgroundColor: 'lightgray' }}>Welcome to React App</h2>;
const li1 = <li>React</li>;
const li2 = <li>JS</li>;
const li3 = <li>C++</li>;
const container = <ul style={{ backgroundColor: 'black', color: 'white' }}>{li1}{li2}{li3}</ul>;

root.render(<>{h2}{container}</>);
//<></> inko react fragments kehte hain
