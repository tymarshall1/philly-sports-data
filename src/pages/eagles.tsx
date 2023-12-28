import Layout from "../componets/layout";
import TeamBanner from "./sportsPageComponets/teamBanner";
import eaglesLogo from "../assets/eagles.svg";
import EaglesData from "../services/eaglesData";
import { useEffect, useState } from "react";

export default function EaglesPage() {
  const [eaglesData, setEaglesData] = useState<EaglesData | null>(null);

  useEffect(() => {
    const eaglesData = new EaglesData();
    eaglesData
      .initialize()
      .then(() => {
        setEaglesData(eaglesData);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <Layout>
      <TeamBanner
        teamName="Philadelphia Eagles"
        backgroundClr="bg-green-800"
        borderClr="border-black"
        teamLogo={eaglesLogo}
      />
      <h1>{eaglesData?.record()}</h1>
    </Layout>
  );
}
