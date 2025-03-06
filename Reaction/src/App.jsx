import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const boxRef = useRef();
  const circleRef = useRef();

  useGSAP(() => {
    gsap.to(".box", {
      rotate: 360,
      duration: 3,
      delay: 1,
      ease: "bounce.out",
    })
  },{scope:".container1"});

  return (
    <main>
      <div className="container1">
        <div className="box"></div>
        <div className="circle"></div>
      </div>
      <div className="container2">
        <div className="box"></div>
        <div className="circle"></div>
      </div>
    </main>
  );
};

export default App;
