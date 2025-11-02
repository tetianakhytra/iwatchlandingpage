

"use client";

export default function WatchCards({ img, onClick, className }) {
  return (
    <div className={`small-watch-card ${className}`} onClick={onClick}>
      <img src={img} />
    </div>
  );
}


  

