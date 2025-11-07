import React from "react";

function ImageManupulation() {
  const [height, setHeight] = React.useState(200);
  const [width, setWidth] = React.useState(200);
  const [red, setRed] = React.useState(0);
  const [green, setGreen] = React.useState(0);
  const [blue, setBlue] = React.useState(0);
  const [angle, setAngle] = React.useState(0);

  function IncreaseHeight() {
    setHeight(height + 10);
  }
  function DecreaseHeight() {
    setHeight(height - 20);
  }
  function ChangeColor() {
    setRed(Math.random() * 255);
    setGreen(Math.random() * 255);
    setBlue(Math.random() * 255);
  }
  function RotateImage() {
    setAngle(angle + 45);
    // Rotation logic to be implemented
  }
  return (
    <div>
      <h2>Image Manipulation Component</h2>
      <div
        style={{
          border: "1 px solid green",
          height: "450px",
          width: "350px",
          margin: "0px auto",
        }}
      >
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.M-5ruDumHIwe6KvvYl1vBwHaEo?pid=Api&P=0&h=180"
          height={height}
          width={width}
          alt=""
          style={{
            paddingTop: "70px",
            paddingLeft: "70px",
            backgroundColor: `rgb(${red},${green},${blue})`,
            transform: `rotate(${angle}deg)`,
          }}
        />
      </div>
      <div>
        <button onClick={IncreaseHeight}>Increase height</button>
        <button onClick={DecreaseHeight}>decrease height</button>
        <button onClick={ChangeColor}>Change color</button>
        <button onClick={RotateImage}>Image rotate</button>
        <button
          onClick={() => {
            setWidth(width + 10);
          }}
        >
          Increase width
        </button>
        <div>
          <h2 style={{ color: "cyan", backgroundColor: "rgba(91, 96, 98, 1)" }}>
            Image height is: {height} px
          </h2>
          <h2 style={{ color: "cyan", backgroundColor: "rgba(91, 96, 98, 1)" }}>
            Image Width is :{width} px
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ImageManupulation;
