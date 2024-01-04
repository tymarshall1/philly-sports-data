import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.svg";
import closeBtn from "../assets/close.svg";
import { useState } from "react";
import eaglesLogo from "../assets/eagles.svg";
import philliesLogo from "../assets/phillies.svg";
import sixersLogo from "../assets/76ers.svg";
import flyersLogo from "../assets/flyers.svg";

type NavBarProps = {
  colorChosen: string;
};

function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="md:hidden">
      <img
        src={hamburger}
        alt="dropdown menu"
        onClick={() => setIsOpen(true)}
      />
      <nav
        id="hamburgerNav"
        className={`fixed top-0 right-0 flex-col items-center w-1/3 gap-12 bg-gray-800 h-full z-40 ease-in-out duration-300 flex ${
          isOpen ? " translate-x-0 transition" : " translate-x-full transition"
        }`}
      >
        <img
          src={closeBtn}
          onClick={() => setIsOpen(false)}
          alt="close nav button"
          className="self-start w-10 h-10"
        />

        <div className="w-[75%]">
          <Link to="/eagles" className="flex items-center justify-between">
            Eagles
            <img src={eaglesLogo} alt="" className="inline-block w-8 h-8" />
          </Link>
        </div>

        <div className="w-[75%]">
          <Link to="/phillies" className="flex items-center justify-between">
            Phillies
            <img src={philliesLogo} alt="" className="inline-block w-8 h-8" />
          </Link>
        </div>
        <div className="w-[75%]">
          <Link to="/flyers" className="flex items-center justify-between">
            Flyers
            <img src={flyersLogo} alt="" className="inline-block w-8 h-8" />
          </Link>
        </div>
        <div className="w-[75%]">
          <Link to="/sixers" className="flex items-center justify-between">
            Sixers
            <img src={sixersLogo} alt="" className="inline-block w-8 h-8" />
          </Link>
        </div>
      </nav>
    </aside>
  );
}

export default function Navbar(props: NavBarProps) {
  return (
    <nav
      className={`font-black items-center p-4 text-white bg-gradient-to-r flex justify-between ${props.colorChosen}`}
    >
      <Link className="text-4xl" to="/">
        Home
      </Link>
      <div className="hidden md:flex md:gap-8">
        <Link to="/eagles">Eagles</Link>
        <Link to="/phillies">Phillies</Link>
        <Link to="/flyers">Flyers</Link>
        <Link to="/sixers">Sixers</Link>
      </div>
      <HamburgerNav />
    </nav>
  );
}
