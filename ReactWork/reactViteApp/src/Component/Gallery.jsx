import React from "react";
import Profile from "./Profile.jsx";
import "./gallery.css";

function Gallery() {
  const student = [
    {
      pic:'https://tse4.mm.bing.net/th/id/OIP.hdTbkUGwBtEeKGomBvLLYgHaEK?pid=Api&P=0&h=180',
      myname: "Ayush Katiyar",
      branch: "Computer Science",
      section: "B",
      college: "ABES Engineering College",
    },
    {
      pic:'https://tse2.mm.bing.net/th/id/OIP.EntHChgUyirgbZ9A3zTxkAHaFj?pid=Api&P=0&h=180',
      myname: "Ayush Katiyar",
      branch: "Computer Science",
      section: "B",
      college: "ABES Engineering College",
    },
    {
      pic:'https://tse3.mm.bing.net/th/id/OIP.VNSU74zuuMLAtstAz7wBbQAAAA?pid=Api&P=0&h=180',
      myname: "Ayush Katiyar",
      branch: "Computer Science",
      section: "B",
      college: "ABES Engineering College",
    },
  ];

  return (
    <div className="gallery-cantainer">
      {/* <div><Profile name="Ayush Katiyar" branch="Computer Science" section="B" college="ABES Engineering College"/></div>
      <div><Profile name="John Doe" branch="Information Technology" section="A" college="XYZ Engineering College"/></div>
      <div><Profile name="Harsh Raj" branch="Computer Science" section="C" college="ABC Engineering College"/></div> */}
      {student.map((element, index) => (
        <Profile data={element} />
      ))}
    </div>
  );
}

export default Gallery;
