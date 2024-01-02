import eaglesImage from "../assets/eagles.svg";
import sixers from "../assets/76ers.svg";
import flyers from "../assets/flyers.svg";
import phillies from "../assets/phillies.svg";
import { Link } from "react-router-dom";
import Layout from "./layout";

type NavBoxProps = {
  logo: string;
  alt: string;
  link: string;
};

function NavBox(props: NavBoxProps) {
  return (
    <div className="p-2 rounded-sm shadow-md">
      <Link
        to={props.link}
        className="flex items-center justify-center w-full h-full"
      >
        <img
          src={props.logo}
          alt={props.alt}
          className="h-20 max-w-60 sm:h-40 md:h-56"
        />
      </Link>
    </div>
  );
}

export default function HomepageNav() {
  return (
    <Layout>
      <div className="grid h-full gap-8 sm:grid-cols-2">
        <NavBox link="/eagles" alt="Eagles logo" logo={eaglesImage} />
        <NavBox link="/phillies" alt="Phillies logo" logo={phillies} />
        <NavBox link="/flyers" alt="Flyers logo" logo={flyers} />
        <NavBox link="/sixers" alt="Sixers logo" logo={sixers} />
      </div>
    </Layout>
  );
}
