"use client";

export default function ColorIndicator({ currentWatch, setCurrentWatch }) {
  return (
    <div className="color_indicator">

  
      <div
        className={`dot dot_black ${currentWatch === "/navy.png" ? "active" : ""}`}
        onClick={() => setCurrentWatch("/navy.png")}
      />

      {[...Array(5)].map((_, i) => (
        <div key={i} className="tiny_dot" />
      ))}


      <div
        className={`dot dot_mint ${currentWatch === "/mint.png" ? "active" : ""}`}
        onClick={() => setCurrentWatch("/mint.png")}
      />

      {[...Array(5)].map((_, i) => (
        <div key={i} className="tiny_dot" />
      ))}


      <div
        className={`dot dot_beige ${currentWatch === "/ocean.png" ? "active" : ""}`}
        onClick={() => setCurrentWatch("/ocean.png")}
      />
    </div>
  );
}
