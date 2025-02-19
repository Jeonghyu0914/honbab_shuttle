import React from "react";
import Element from "./Element.jsx";
import Contect from "./Contect.jsx";

const MainPage = ({ id, image }) => {
  return (
    <section id={id} className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-auto">
      <img src={image} alt="메인 이미지" className="w-screen h-auto max-w-none" />
      <Element id="ele1-1" image="ele1-1.png" baseTop={525} left={8} className="absolute w-1/6 h-auto" />
      <Element id="ele1-2" image="ele1-2.png" baseTop={570} left={27.5} className="absolute w-2/9 h-auto" />
      <Element id="ele1-3" image="ele1-3.png" baseTop={525} left={50} className="absolute w-2/9 h-auto" />
      <Element id="ele1-4" image="ele1-4.png" baseTop={570} left={72.5} className="absolute w-2/9 h-auto" />
      <Element id="ele1-5" image="ele1-5.png" baseTop={525} left={92} className="absolute w-1/6 h-auto" />
      <Element id="ele2" image="ele2.png" baseTop={1220} left={50} className="absolute w-1/2 h-auto" />
      <Element id="ele5-1" image="ele5-1.png" baseTop={4100} left={50} className="absolute w-2/3 h-auto" />
      <Element id="ele5-2" image="ele5-2.png" baseTop={4225} left={50} className="absolute w-2/3 h-auto" />
      <Element id="ele5-3" image="ele5-3.png" baseTop={4350} left={50} className="absolute w-2/3 h-auto" />
      <Element id="ele6" image="ele6.png" baseTop={5435} left={50} className="absolute w-5/7 h-auto" />
      <Element id="ele7-1" image="ele7-1.png" baseTop={5975} left={30} className="absolute w-1/4 h-auto" />
      <Element id="ele7-2" image="ele7-2.png" baseTop={6265} left={65} className="absolute w-7/24 h-auto" />
      <Element id="ele8-1" image="ele8-1.png" baseTop={6885} left={8} className="absolute w-1/6 h-auto" />
      <Element id="ele8-2" image="ele8-2.png" baseTop={6840} left={27.5} className="absolute w-2/9 h-auto" />
      <Element id="ele8-3" image="ele8-3.png" baseTop={6885} left={50} className="absolute w-2/9 h-auto" />
      <Element id="ele8-4" image="ele8-4.png" baseTop={6840} left={72.5} className="absolute w-2/9 h-auto" />
      <Element id="ele8-5" image="ele8-5.png" baseTop={6885} left={92} className="absolute w-1/6 h-auto" />
      <Contect />
    </section>
  );
};

export default MainPage;
