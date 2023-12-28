import eaglesImage from "../assets/eagles.svg";
import sixers from "../assets/76ers.svg";
import flyers from "../assets/flyers.svg";
import phillies from "../assets/phillies.svg";
import { Link } from "react-router-dom";

type NavBoxProps = {
  logo: string;
  alt: string;
  link: string;
};

function NavBox(props: NavBoxProps) {
  return (
    <div className="rounded-sm shadow-md p-2 flex items-center justify-center">
      <Link
        to={props.link}
        className="flex h-full w-full items-center justify-center"
      >
        <img
          src={props.logo}
          alt={props.alt}
          className="max-w-60 h-20 sm:h-44 md:h-60"
        />
      </Link>
    </div>
  );
}

export default function HomepageNav() {
  return (
    <main className="grid grid-cols-2 grid-rows-2 gap-8">
      <NavBox link="/eagles" alt="Eagles logo" logo={eaglesImage} />
      <NavBox link="/phillies" alt="Phillies logo" logo={phillies} />
      <NavBox link="/flyers" alt="Flyers logo" logo={flyers} />
      <NavBox link="/sixers" alt="Sixers logo" logo={sixers} />
    </main>
  );
}
