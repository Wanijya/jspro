import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Black = () => {
  const blackRef = useRef(null);

  useGSAP(() => {
    gsap.to(blackRef.current, {
      y: "-100%",
      delay: 1.9,
      duration: 0.8,
    });
  });

  return (
    <div ref={blackRef} className="h-screen bg-[#111] w-full z-10 fixed"></div>
  );
};

export default Black;
