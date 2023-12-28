import Navbar from "./headerNav";
import Footer from "./footer";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const teamColors: string[] = [
  "from-flyers to-black ",
  "from-green-800 to-black ",
  "from-blue-800 to-red-600 ",
  "from-blue-600 to-white",
];
const teamIndexNum: number = Math.floor(Math.random() * 4);
const colorChoosen: string = teamColors[teamIndexNum];

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col gap-8 h-svh md:min-h-screen">
      <Navbar colorChoosen={colorChoosen} />
      <main className="flex-1 mx-8">{children}</main>
      <Footer colorChoosen={colorChoosen} />
    </div>
  );
}
