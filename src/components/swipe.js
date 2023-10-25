import React from "react";
import Typewriter from "typewriter-effect";

function Swipe() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Problem Solver",
          "Computer Enthuasist",
          "Dear Wannabe",
          "Cyber Guy",
          "Curious",
          "Imaginative"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Swipe;