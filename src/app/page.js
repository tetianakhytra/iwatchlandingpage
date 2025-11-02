"use client";

import Image from "next/image";
import ButtonCat from "../components/ButtonCat";
import ColorIndicator from "../components/ColorIndicator";
import PageIndicator from "../components/PageIndicator";
import WatchCards from "../components/WatchCards";
import { useState } from "react";

export default function Page() {
  const [currentWatch, setCurrentWatch] = useState("/navy.png");

  return (
    <div className="grid_container">

      <div className="hero_text">
        <h1>
          The Perfect Moment<br />
          <span>Between Past And Future.</span>
        </h1>
      </div>

      <div className="big_watch">
        <Image src={currentWatch} alt="big watch" width={486} height={486} />
      </div>

      <div className="color_indicator">
        <ColorIndicator
          currentWatch={currentWatch}
          setCurrentWatch={setCurrentWatch}
        />
      </div>

      <div className="page_indicator">
        <PageIndicator />
      </div>

      <div className="hero_button">
        <ButtonCat />
      </div>

      <div className="small_watch_row">
        <WatchCards
          img="/navy.png"
          className="bg-navy"
          isActive={currentWatch === "/navy.png"}
          onClick={() => setCurrentWatch("/navy.png")}
        />

        <WatchCards
          img="/mint.png"
          className="bg-mint"
          isActive={currentWatch === "/mint.png"}
          onClick={() => setCurrentWatch("/mint.png")}
        />

        <WatchCards
          img="/ocean.png"
          className="bg-ocean"
          isActive={currentWatch === "/ocean.png"}
          onClick={() => setCurrentWatch("/ocean.png")}
        />
      </div>
    </div>
  );
}
