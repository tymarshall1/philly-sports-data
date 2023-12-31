import Layout from "../componets/layout";
import TeamBanner from "./sportsPageComponets/teamBanner";
import sixersLogo from "../assets/76ers.svg";

export default function SixersPage() {
  return (
    <Layout layoutColors="from-blue-600 to-white">
      <TeamBanner
        teamName="Philadelphia 76ers"
        teamLogo={sixersLogo}
        backgroundClr="bg-blue-600"
        borderClr="border-red-500"
      />
    </Layout>
  );
}