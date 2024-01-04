import flyersLogo from "../assets/flyers.svg";
import BaseSportsPage from "./sportsPageComponents/baseSportsPage";
import { useState, useEffect } from "react";
import SportsData from "../services/extractSportsData";
import ApiResponse from "../services/apiResponseInterface";

export default function FlyersPage() {
  const [flyersData, setFlyersData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://site.web.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/phi/schedule?region=us&lang=en&seasontype=2"
    )
      .then((res) => res.json())
      .then((data) => {
        setFlyersData(data);
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

  const sportsData = new SportsData(flyersData);
  const flyersNextGameObj = sportsData.nextGameDetails();
  const flyersPrevGameObj = sportsData.previousGameDetails();
  return (
    <BaseSportsPage
      loading={loading}
      error={error}
      teamLogo={flyersLogo}
      nextGameObj={flyersNextGameObj}
      PrevGameObj={flyersPrevGameObj}
      teamRecord={sportsData.record()}
      teamStanding={sportsData.standing()}
      layoutBannerClr={"from-flyers to-black"}
      teamName={"Philadelphia Flyers"}
      backgroundClr={"bg-flyers"}
      borderClr={"border-black"}
    >
      <></>
    </BaseSportsPage>
  );
}
