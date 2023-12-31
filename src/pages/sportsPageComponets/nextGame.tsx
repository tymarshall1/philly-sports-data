type NextGameProps = {
  nextGame: string;
  date: string;
  time: string;
};

function NextGame(props: NextGameProps) {
  return (
    <div className="p-4 text-center text-white bg-green-800 border-4 border-black">
      <h2 className="mb-2 text-3xl font-bold underline">Next Game</h2>
      <h3 className="mb-2 text-xl">{props.nextGame}</h3>
      <h2 className="mb-2 text-3xl font-bold underline">Date</h2>
      <h3 className="mb-2 text-xl">{props.date}</h3>
      <h2 className="mb-2 text-3xl font-bold underline">Time</h2>
      <h3 className="mb-2 text-xl">{props.time}</h3>
    </div>
  );
}

export default NextGame;
