import Navbar from "./headerNav";
import Footer from "./footer";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  layoutColors?: string;
};

const teamColors: string[] = [
  "from-flyers to-black ",
  "from-green-800 to-black ",
  "from-blue-800 to-red-600 ",
  "from-blue-600 to-white",
];
const teamIndexNum: number = Math.floor(Math.random() * 4);
const colorChosen: string = teamColors[teamIndexNum];

export default function Layout({
  children,
  layoutColors = colorChosen,
}: LayoutProps) {
  return (
    <div className="flex flex-col gap-8 h-svh md:min-h-screen">
      <Navbar colorChosen={layoutColors} />
      <main className="flex-1 mx-4">{children}</main>
      <Footer colorChosen={layoutColors} />
    </div>
  );
}
