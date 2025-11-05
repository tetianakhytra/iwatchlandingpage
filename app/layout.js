import "./globals.css";
import { Poppins } from "next/font/google";
import Nav from "../components/MenuBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "iWatch",
  description: "Landing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="max-w-[1477px] mx-auto w-full px-10">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
