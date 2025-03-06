import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const [xMove, setXMove] = useState(0);

  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: xMove,
      duration: 1,
    });
  }, [xMove]);

  return (
    <main>
      <button
        onClick={() => {
          setXMove(100);
        }}
      >
        Animate Box
      </button>
      <div ref={boxRef} className="box"></div>
    </main>
  );
};

export default App;
