import React from "react";
import HeroText from "./HeroText";
import SubHading from "./SubHading";

const CenterText = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <HeroText />
      <SubHading />
    </div>
  );
};

export default CenterText;
