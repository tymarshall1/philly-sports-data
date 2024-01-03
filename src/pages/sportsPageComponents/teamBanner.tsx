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
      className={`min-h-20 ${backgroundClr} ${borderClr} border-4 flex flex-col items-center justify-center p-4 gap-4 md:col-start-1 md:col-end-3`}
    >
      <img src={teamLogo} alt="" className="w-20 h-20" />
      <h1 className="text-3xl font-black text-center text-white ">
        {teamName}
      </h1>
    </div>
  );
}

export default TeamBanner;
