import Layout from "../componets/layout";
import TeamBanner from "./sportsPageComponets/teamBanner";
import NextGame from "./sportsPageComponets/nextGame";
import PreviousGame from "./sportsPageComponets/previousGame";
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
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const eaglesNextGameObj = eaglesData?.nextGameDetails();
  const eaglesPrevGameObj = eaglesData?.previousGameDetails();

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

          {eaglesNextGameObj != null && "nextGameTeam" in eaglesNextGameObj ? (
            <NextGame
              nextGame={eaglesNextGameObj.nextGameTeam}
              date={eaglesNextGameObj.nextGameDate}
              time={eaglesNextGameObj.nextGameTime}
            />
          ) : (
            <NextGame
              nextGame={
                eaglesNextGameObj?.error || "Error loading next game object"
              }
              date={
                eaglesNextGameObj?.error || "Error loading next game object"
              }
              time={
                eaglesNextGameObj?.error || "Error loading next game object"
              }
            />
          )}

          {eaglesPrevGameObj != null &&
          "previousGameTeam" in eaglesPrevGameObj ? (
            <PreviousGame
              previousTeam={eaglesPrevGameObj.previousGameTeam}
              record={eaglesPrevGameObj.previousGameRecord}
            />
          ) : (
            <PreviousGame
              previousTeam={
                eaglesPrevGameObj?.error || "Error loading previous game object"
              }
              record={
                eaglesPrevGameObj?.error || "Error loading previous game object"
              }
            />
          )}
        </div>
      )}
    </Layout>
  );
}
