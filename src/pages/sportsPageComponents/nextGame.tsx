type NextGameProps = {
  nextGame: string;
  date: string;
  time: string;
  backgroundClr: string;
  borderClr: string;
};

function NextGame(props: NextGameProps) {
  return (
    <div
      className={`p-4 text-center text-white ${props.backgroundClr} border-4 rounded ${props.borderClr}`}
    >
      <h2 className="mb-2 text-3xl font-black underline">Next Game</h2>
      <h3 className="mb-2 text-xl font-medium">{props.nextGame}</h3>
      <h2 className="mb-2 text-3xl font-black underline">Date</h2>
      <h3 className="mb-2 text-xl font-medium">{props.date}</h3>
      <h2 className="mb-2 text-3xl font-black underline">Time</h2>
      <h3 className="mb-2 text-xl font-medium">{props.time}</h3>
    </div>
  );
}

export default NextGame;
