import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const [xMove, setXMove] = useState(0);
  const [rotating, setRotating] = useState(0);

  const boxRef = useRef(null);

  const randomX = gsap.utils.random(-500, 500, 100);
  const randomRotate = gsap.utils.random(-360, 360, 90);
  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: xMove,
      rotate: rotating,
      duration: 2,
      ease: "power2.inOut",
    });
  }, [xMove, rotating]);

  return (
    <main>
      <button
        onClick={() => {
          setXMove(randomX);
          setRotating(randomRotate);
        }}
      >
        Animate Box
      </button>
      <div ref={boxRef} className="box"></div>
    </main>
  );
};

export default App;
