type TeamBannerProps = {
  teamName: string;
  teamRecord: string;
  teamStanding: string;
  backgroundClr: string;
  borderClr: string;
  teamLogo: string;
};

function TeamBanner(props: TeamBannerProps) {
  return (
    <div
      className={`min-h-20 ${props.backgroundClr} ${props.borderClr} border-4 flex flex-col items-center justify-center p-4
       gap-4 md:col-start-1 md:col-end-3 rounded text-white xl:col-start-1 xl:col-end-3`}
    >
      <img src={props.teamLogo} alt="" className="w-20 h-20" />
      <h1 className="text-3xl font-black text-center ">{props.teamName}</h1>
      <p className="text-2xl font-black">{props.teamStanding}</p>
      <p className="text-2xl font-black">{props.teamRecord}</p>
    </div>
  );
}

export default TeamBanner;
