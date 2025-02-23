import React from "react";
import Element from "./Element.jsx";
import Contect from "./Contect.jsx";
import CategoryNav from "./CategoryNav.jsx";
import ReviewGrid from "./ReviewGrid.jsx";
import Youtube from "./Youtube.jsx";
import smoothScroll from "../utils/smoothScroll.js"; // 스크롤 함수 분리

const MainPage = ({ id, image }) => {
  return (
    <section className="mt-16 sm:mt-0 relative w-full min-h-screen flex flex-col items-center justify-start overflow-auto">
      <img id={id} src={image} alt="메인 이미지" className="w-screen h-auto max-w-none z-0" />
      <Element id="ele1-1" image="ele1-1.png" baseTop={525} left={8} className="absolute w-1/6 h-auto" />
      <Element id="ele1-2" image="ele1-2.png" baseTop={570} left={27.5} className="absolute w-2/9 h-auto" />
      <Element id="ele1-3" image="ele1-3.png" baseTop={525} left={50} className="absolute w-2/9 h-auto" />
      <Element id="ele1-4" image="ele1-4.png" baseTop={570} left={72.5} className="absolute w-2/9 h-auto" />
      <Element id="ele1-5" image="ele1-5.png" baseTop={525} left={92} className="absolute w-1/6 h-auto" />

      <a href="#contect" onClick={(e) => smoothScroll(e, "contect")}>
        <Element id="ele2" image="ele2.png" baseTop={1220} left={50} className="absolute w-1/2 h-auto" enableAnimation={false} />
      </a>

      <ReviewGrid id="ele3-1" baseTop={1500} left={50} no={0} />
      <ReviewGrid id="ele3-2" baseTop={1800} left={50} no={1} />

      {/* 나중에 유튜브 넣을 거임 */}
      <Element id="ele4-1-temp" image="ele4-1-temp.png" baseTop={2260} left={50.5} className="absolute w-3/5 h-auto" />

      <a href="https://www.youtube.com">
        <Element id="ele4-2" image="ele4-2.png" baseTop={2460} left={50} className="absolute w-2/5 h-auto" />
      </a>
      <Youtube id="ele4-3" src="https://www.youtube.com/embed/LXb3EKWsInQ?si=8lSch6L1nLqeA6l-" baseTop={2675} left={35} className="absolute w-1/3 h-auto" />
      <Youtube id="ele4-4" src="https://www.youtube.com/embed/LXb3EKWsInQ?si=8lSch6L1nLqeA6l-" baseTop={2810} left={35} className="absolute w-1/3 h-auto" />

      <CategoryNav id="categoryNav" />

      <Element id="business" image="black.png" baseTop={3925} left={50} className="absolute w-1/10 h-auto opacity-0" enableAnimation={false} />
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

      <Contect id="contect" />
    </section>
  );
};

export default MainPage;
