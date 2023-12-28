type TeamBanner = {
  teamName: string;
  backgroundClr: string;
  borderClr: string;
  teamLogo: string;
};

function TeamBanner({
  teamName,
  backgroundClr,
  borderClr,
  teamLogo,
}: TeamBanner) {
  return (
    <div
      className={`min-h-20 ${backgroundClr} ${borderClr} border-4 rounded flex items-center justify-center mx-[-1rem] p-4 gap-4 drop-shadow-2xl`}
    >
      <h1 className="text-4xl font-bold text-center text-white ">{teamName}</h1>
      <img src={teamLogo} alt="" className="w-20 h-20" />
    </div>
  );
}

export default TeamBanner;
