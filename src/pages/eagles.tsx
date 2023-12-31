import Layout from "../componets/layout";
import TeamBanner from "./sportsPageComponets/teamBanner";
import NextGame from "./sportsPageComponets/nextGame";
import eaglesLogo from "../assets/eagles.svg";
import EaglesData from "../services/eaglesData";
import { useEffect, useState } from "react";

export default function EaglesPage() {
  const [eaglesData, setEaglesData] = useState<EaglesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const eaglesData = new EaglesData();
    eaglesData
      .initialize()
      .then(() => {
        setEaglesData(eaglesData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Layout layoutColors="from-green-800 to-black">
      {loading ? (
        <div className="text-4xl font-bold text-center">loading...</div>
      ) : error ? (
        <div className="text-4xl font-bold text-center">
          Error occured while loading data
        </div>
      ) : (
        <div className="grid gap-8">
          <TeamBanner
            teamName="Philadelphia Eagles"
            backgroundClr="bg-green-800"
            borderClr="border-black"
            teamLogo={eaglesLogo}
          />
          <NextGame
            nextGame={eaglesData?.nextGameTeam() || "Error loading data"}
            date={eaglesData?.nextGameDate() || "Error loading data"}
            time={eaglesData?.nextGameTime() || "Error loading data"}
          />
        </div>
      )}
    </Layout>
  );
}
