import React, { useRef } from "react";
import NavBar from "../Navbar/NavBar";
import CenterText from "../Center/CenterText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Black from "./Black";

const Home = (props) => {
  const pageRef = useRef(null);

  useGSAP(() => {
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.8,
      duration: 1,
      y: 50,
      scale: 1.05,
    });
  });
  
  // console.log(props);
  
  return (  
    <div>
      <Black />
      <div
        ref={pageRef}
        className="opacity-1 h-screen w-full bg-cover bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]"
      >
        <NavBar menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
        <CenterText />
      </div>
    </div>
  );
};

export default Home;
