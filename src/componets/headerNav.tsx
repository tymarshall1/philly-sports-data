import { Link } from "react-router-dom";

type NavBarProps = {
  colorChoosen: string;
};

export default function Navbar(props: NavBarProps) {
  return (
    <nav
      className={`text-3xl p-4 text-white bg-gradient-to-r ${props.colorChoosen}`}
    >
      <Link to="/">Home</Link>
    </nav>
  );
}
