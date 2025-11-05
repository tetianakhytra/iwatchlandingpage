"use client";

import Image from "next/image";
import ButtonCat from "@/components/ButtonCat";
import ColorIndicator from "@/components/ColorIndicator";
import PageIndicator from "@/components/PageIndicator";
import WatchCards from "@/components/WatchCards";
import { useState } from "react";

export default function Page() {
  const [currentWatch, setCurrentWatch] = useState("/navy.png");

  return (
 <div className="grid grid-cols-12 gap-10 w-full mx-auto px-10 items-center">



      <div className="col-start-1 col-end-8 row-start-2 row-end-4">
  <h1 className="text-white font-poppins text-[64px] font-bold leading-[86px] tracking-[1.28px]">
  The Perfect Moment
  <br />
  Between Past
  <br />
  <span className="font-normal">And Future.</span>
</h1>


      </div>

      <div className="col-start-6 col-end-13 row-start-2 row-end-4 flex justify-center ">
        <Image src={currentWatch} alt="big watch" width={486} height={486} />
      </div>

      <div className="flex flex-col justify-center gap-1 items-center col-start-12 col-end-13 row-start-2 row-end-4 self-center">
        <ColorIndicator
          currentWatch={currentWatch}
          setCurrentWatch={setCurrentWatch}
        />
      </div>

      <div className="col-start-1 row-start-4 flex items-center mt-8">
        <PageIndicator />
      </div>

    <div className="col-start-1 col-end-6 row-start-3 self-start">
  <ButtonCat />
</div>


      <div className="flex gap-5 mt-[30px] col-start-7 col-end-12 row-start-4">

  <WatchCards
    img="/navy.png"
    bg="bg-[rgba(67,69,88,0.6)]"
    isActive={currentWatch === "/navy.png"}
    onClick={() => setCurrentWatch("/navy.png")}
  />

  <WatchCards
    img="/mint.png"
    bg="bg-[rgba(106,221,204,0.6)]"
    isActive={currentWatch === "/mint.png"}
    onClick={() => setCurrentWatch("/mint.png")}
  />

  <WatchCards
    img="/ocean.png"
    bg="bg-[rgba(249,205,196,0.6)]"
    isActive={currentWatch === "/ocean.png"}
    onClick={() => setCurrentWatch("/ocean.png")}
  />

</div>

    </div>
  );
}
