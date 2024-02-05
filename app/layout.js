import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leandro/Portfolio",
  description: "Portfolio of the developer web Leandro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` flex-col items-center justify-center relative h-full ${inter.className}`}
      >
        <div
          className="fixed top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>

        <Navbar></Navbar>
        <div className=" mx-auto  md:max-w-[50%]">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
