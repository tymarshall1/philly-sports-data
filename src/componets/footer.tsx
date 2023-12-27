export default function Footer() {
  const teamColors: string[] = [
    "bg-orange-500",
    "bg-green-800",
    "bg-blue-800",
    "bg-red-500",
  ];
  const teamIndexNum: number = Math.floor(Math.random() * 4);
  const colorChoosen: string = teamColors[teamIndexNum];

  return (
    <footer className={`text-3xl p-4 text-white text-center ${colorChoosen}`}>
      Tyler1@github.com
    </footer>
  );
}
