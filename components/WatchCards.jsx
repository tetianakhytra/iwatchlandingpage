"use client";

export default function WatchCards({ img, onClick, isActive, bg }) {
  return (
    <div
      onClick={onClick}
      className={`
        w-[131px] h-[70px] rounded-[10px]
        flex items-center justify-center cursor-pointer
        transition-all duration-200 hover:scale-105
        ${bg}
      `}
    >
      <img
        src={img}
        className="w-[92px] h-[90px] -mt-10"
      />
    </div>
  );
}
