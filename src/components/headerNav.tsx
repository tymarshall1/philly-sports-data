import { Link } from "react-router-dom";

type NavBarProps = {
  colorChosen: string;
};

export default function Navbar(props: NavBarProps) {
  return (
    <nav
      className={`text-3xl p-4 text-white bg-gradient-to-r ${props.colorChosen}`}
    >
      <Link to="/">Home</Link>
    </nav>
  );
}
