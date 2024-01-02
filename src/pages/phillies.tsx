import philliesLogo from "../assets/phillies.svg";
import { useEffect, useState } from "react";
import SportsData from "../services/extractSportsData";
import ApiResponse from "../services/apiResponseInterface";
import BaseSportsPage from "./baseSportsPage";

export default function PhilliesPage() {
  const [philliesData, setPhilliesData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://site.web.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/phi/schedule?region=us&lang=en&seasontype=2&half=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setPhilliesData(data);
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

  const sportsData = new SportsData(philliesData);

  const philliesNextGameObj = sportsData.nextGameDetails();
  const philliesPrevGameObj = sportsData.previousGameDetails();

  return (
    <BaseSportsPage
      loading={loading}
      error={error}
      teamLogo={philliesLogo}
      nextGameObj={philliesNextGameObj}
      PrevGameObj={philliesPrevGameObj}
      layoutBannerClr={"from-blue-800 to-red-600"}
      teamName={"Philadelphia Phillies"}
      backgroundClr={"bg-red-600"}
      borderClr={"border-blue-800"}
    >
      <></>
    </BaseSportsPage>
  );
}
