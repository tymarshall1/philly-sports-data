// import { Link } from "react-router-dom";

export default function Navbar() {
  const teamColors: string[] = [
    "bg-orange-500",
    "bg-green-800",
    "bg-blue-800",
    "bg-red-500",
  ];
  const teamIndexNum: number = Math.floor(Math.random() * 4);
  const colorChoosen: string = teamColors[teamIndexNum];

  return (
    <nav className={`text-3xl p-4 text-white ${colorChoosen}`}>
      {/* <Link to="/">Home</Link> */}
    </nav>
  );
}
