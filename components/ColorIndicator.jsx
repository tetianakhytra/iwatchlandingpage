"use client";

export default function ColorIndicator({ currentWatch, setCurrentWatch }) {
  return (
    <div className="flex flex-col gap-1 items-center col-start-12 row-start-4 self-center">


      {/* Black */}
    <div
  onClick={() => setCurrentWatch("/navy.png")}
  className={`w-8 h-8 rounded-full cursor-pointer bg-[#404354] shadow-[0_3px_4px_rgba(0,0,0,0.2)] ${
    currentWatch === "/navy.png" ? "border-[3px] border-white" : ""
  }`}
/>

      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
      ))}

      {/* Mint */}
      <div
        onClick={() => setCurrentWatch("/mint.png")}
        className={`w-[30px] h-[30px] bg-[#58D7C4] shadow-[0_3px_4px_rgba(0,0,0,0.2)] rounded-full cursor-pointer ${
          currentWatch === "/mint.png" ? "border-[3px] border-white" : ""
        }`}
      />

      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
      ))}

      {/* Beige */}
      <div
        onClick={() => setCurrentWatch("/ocean.png")}
        className={`w-[30px] h-[30px] bg-[#F2CEC6] shadow-[0_3px_4px_rgba(0,0,0,0.2)] rounded-full cursor-pointer ${
          currentWatch === "/ocean.png" ? "border-[3px] border-white" : ""
        }`}
      />
    </div>
  );
}
