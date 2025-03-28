import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const HeroText = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    let clutter = "";
    const splittedText = textRef.current.textContent.split("");
    splittedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    textRef.current.innerHTML = clutter;
    gsap.from("h1 span", {
      y: 100,
      opacity: 0,
      delay: 2.15,
      stagger: 0.1,
    });
  });

  return (
    <div>
      <h1
        ref={textRef}
        className="font-black whitespace-nowrap text-center font-[u8] uppercase text-[21vw] leading-[17vw]"
      >
        Arock
      </h1>
    </div>
  );
};

export default HeroText;
