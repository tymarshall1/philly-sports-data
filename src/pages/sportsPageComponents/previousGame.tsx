type PreviousGameProps = {
  previousTeam: string;
  record: string;
  backgroundClr: string;
  borderClr: string;
};

function PreviousGame(props: PreviousGameProps) {
  return (
    <div
      className={`p-4 text-center text-white ${props.backgroundClr} border-4 ${props.borderClr}`}
    >
      <h2 className="mb-2 text-3xl font-bold underline">Previous Game</h2>
      <h3 className="mb-2 text-xl ">{props.previousTeam}</h3>
      <h2 className="mb-2 text-3xl font-bold underline">Score</h2>
      <h3 className="text-xl ">{props.record}</h3>
    </div>
  );
}

export default PreviousGame;