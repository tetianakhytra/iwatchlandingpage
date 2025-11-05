"use client";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 text-white text-lg w-[99%] col-start-1 col-end-13 row-start-1">
      {/* Logo */}
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="50" viewBox="0 0 41 50" fill="none">
          <path d="M30.256 0.0250219C30.1498 -0.0937281 26.3216 0.071897 22.9904 3.68752C19.6591 7.30002 20.1716 11.4438 20.2466 11.55C20.3216 11.6563 24.9966 11.8219 27.981 7.61877C30.9654 3.41565 30.3623 0.146897 30.256 0.0250219ZM40.6123 36.6906C40.4623 36.3906 33.3466 32.8344 34.0091 25.9969C34.6716 19.1563 39.2435 17.2813 39.3154 17.0781C39.3873 16.875 37.4498 14.6094 35.3966 13.4625C33.8892 12.6539 32.2208 12.1907 30.5123 12.1063C30.1748 12.0969 29.0029 11.8094 26.5935 12.4688C25.006 12.9031 21.4279 14.3094 20.4435 14.3656C19.456 14.4219 16.5185 12.7344 13.3591 12.2875C11.3373 11.8969 9.19352 12.6969 7.65914 13.3125C6.12789 13.925 3.21539 15.6688 1.17789 20.3031C-0.859607 24.9344 0.206018 32.2719 0.968518 34.5531C1.73102 36.8313 2.92164 40.5656 4.94664 43.2906C6.74664 46.3656 9.13414 48.5 10.131 49.225C11.1279 49.95 13.9404 50.4313 15.8904 49.4344C17.4591 48.4719 20.2904 47.9188 21.4091 47.9594C22.5248 48 24.7248 48.4406 26.9779 49.6438C28.7623 50.2594 30.4498 50.0031 32.1404 49.3156C33.831 48.625 36.2779 46.0063 39.1341 40.6969C40.2185 38.2281 40.7123 36.8938 40.6123 36.6906Z" fill="white"/>
        </svg>
      </div>

      {/* Links */}
   <ul className="flex gap-10 list-none h-10">
  <li className="px-5 py-1 rounded-full box-border transition hover:bg-white hover:text-[#B6CCDA] hover:border-2 hover:border-white">
    Mac
  </li>
  <li className="px-5 py-1 rounded-full box-border transition hover:bg-white hover:text-[#B6CCDA] hover:border-2 hover:border-white">
    iPhone
  </li>
  <li className="px-5 py-1 rounded-full box-border transition hover:bg-white hover:text-[#B6CCDA] hover:border-2 hover:border-white">
    iPad
  </li>
  <li className="px-5 py-1 rounded-full box-border transition hover:bg-white hover:text-[#B6CCDA] hover:border-2 hover:border-white">
    iWatch
  </li>
  <li className="px-5 py-1 rounded-full box-border transition hover:bg-white hover:text-[#B6CCDA] hover:border-2 hover:border-white">
    Support
  </li>
</ul>


      {/* Icons */}
      <div className="flex gap-5 cursor-pointer">
        <span className="text-xl">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </span>
        <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="1" height="23" viewBox="0 0 1 23" fill="none">
  <path d="M0.5 0.5V22.5" stroke="white" strokeLinecap="round"/>
</svg></span>
    <span className="text-xl">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </span>
      </div>
    </nav>
  );
}
