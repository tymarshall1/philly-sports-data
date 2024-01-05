import GameSchedule from "../../services/GameScheduleInterface";

type SingleGameProps = {
  awayTeamName: string;
  awayTeamLogo: string;
  homeTeamName: string;
  homeTeamLogo: string;
  date: string;
  time: string;
};

function SingleGame(props: SingleGameProps) {
  return (
    <div className="p-2 border-2 border-black rounded">
      <div className="flex gap-1 font-medium">
        <p>{props.awayTeamName}</p>
        <img className="w-6 h-6 " src={props.awayTeamLogo} alt="" />
        <p>@</p>
        <p>{props.homeTeamName}</p>
        <img className="inline-block w-6 h-6" src={props.homeTeamLogo} alt="" />
      </div>
      <p className="text-xl font-black">{props.date}</p>
      <p className="text-xl font-black">{props.time}</p>
    </div>
  );
}

type ScheduleProps = {
  schedule: GameSchedule;
  backgroundClr: string;
  borderClr: string;
  scheduleHeaderClr: string;
};

function Schedule(props: ScheduleProps) {
  return (
    <div
      className={`${props.backgroundClr} ${props.borderClr} border-4 max-h-96 overflow-y-scroll relative rounded 
      md:col-start-1 md:col-end-3 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-4 xl:max-h-screen`}
    >
      <h1
        className={`sticky top-0 p-2 text-3xl font-black text-center ${props.scheduleHeaderClr} bg-white`}
      >
        Schedule
      </h1>
      <div className="flex flex-col gap-4 p-4 text-white">
        {props.schedule.map((game, index) => {
          return (
            <SingleGame
              key={index}
              awayTeamName={game.awayTeamName}
              awayTeamLogo={game.awayTeamLogo}
              homeTeamName={game.homeTeamName}
              homeTeamLogo={game.homeTeamLogo}
              date={game.date}
              time={game.time}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Schedule;
