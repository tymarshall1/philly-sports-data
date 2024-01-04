import BaseSportsPage from "./sportsPageComponents/baseSportsPage";
import eaglesLogo from "../assets/eagles.svg";
import { useEffect, useState } from "react";
import SportsData from "../services/extractSportsData";
import ApiResponse from "../services/apiResponseInterface";
// import BaseSportsPageTesting from "./sportsPageComponents/baseSportsPageForTesting";
export default function EaglesPage() {
  const [eaglesData, setEaglesData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://site.web.api.espn.com/apis/site/v2/sports/football/nfl/teams/phi/schedule?region=us&lang=en&seasontype=2"
    )
      .then((res) => res.json())
      .then((data) => {
        setEaglesData(data);
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

  const sportsData = new SportsData(eaglesData);
  const eaglesNextGameObj = sportsData.nextGameDetails();
  const eaglesPrevGameObj = sportsData.previousGameDetails();

  return (
    <BaseSportsPage
      loading={loading}
      error={error}
      teamLogo={eaglesLogo}
      nextGameObj={eaglesNextGameObj}
      PrevGameObj={eaglesPrevGameObj}
      teamRecord={sportsData.record()}
      teamStanding={sportsData.standing()}
      layoutBannerClr={"from-green-800 to-black"}
      teamName={"Philadelphia Eagles"}
      backgroundClr={"bg-green-800"}
      borderClr={"border-black"}
    >
      <></>
    </BaseSportsPage>

    // <BaseSportsPageTesting
    //   loading={false}
    //   error={false}
    //   teamLogo={eaglesLogo}
    //   teamRecord="188-54 "
    //   teamStanding="test data"
    //   layoutBannerClr={"from-green-800 to-black"}
    //   teamName={"Philadelphia Eagles"}
    //   backgroundClr={"bg-green-800"}
    //   borderClr={"border-black"}
    // >
    //   <></>
    // </BaseSportsPageTesting>
  );
}
