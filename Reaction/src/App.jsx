import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const boxRef = useRef();
  const circleRef = useRef();
  
  const tl = gsap.timeline();
  useGSAP(()=>{
    tl.to(boxRef.current, {
      x: 1000,
      rotate: 360,
      duration: 2,
      delay: 1,
      borderRadius: "50%",
      ease: "bounce"
    })
    tl.to(circleRef.current, {
      x: 1000,
      rotate: 360,
      duration: 2,
      delay: 1,
      borderRadius: "50px",
      ease: "bounce"
    })
  })

  return (
    <div>
      <div ref={boxRef} className="box"></div>
      <div ref={circleRef} className="circle"></div>
    </div>
  );
};

export default App;
