import BaseSportsPage from "./sportsPageComponents/baseSportsPage";
import sixersLogo from "../assets/76ers.svg";
import { useState, useEffect } from "react";
import SportsData from "../services/extractSportsData";
import ApiResponse from "../services/apiResponseInterface";

export default function SixersPage() {
  const [sixersData, setSixersData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/teams/phi/schedule?region=us&lang=en&seasontype=2"
    )
      .then((res) => res.json())
      .then((data) => {
        setSixersData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const sportsData = new SportsData(sixersData);

  const sixersNextGameObj = sportsData.nextGameDetails();
  const sixersPrevGameObj = sportsData.previousGameDetails();

  return (
    <BaseSportsPage
      loading={loading}
      error={error}
      teamLogo={sixersLogo}
      nextGameObj={sixersNextGameObj}
      PrevGameObj={sixersPrevGameObj}
      teamRecord={sportsData.record()}
      teamStanding={sportsData.standing()}
      schedule={sportsData.schedule()}
      layoutBannerClr={"from-blue-600 to-red-500"}
      teamName={"Philadelphia 76ers"}
      backgroundClr={"bg-blue-600"}
      borderClr={"border-red-500"}
      scheduleHeaderClr="text-blue-600"
    >
      <></>
    </BaseSportsPage>
  );
}
