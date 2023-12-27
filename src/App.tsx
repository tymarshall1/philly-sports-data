import eaglesImage from "./assets/eagles.svg";
import sixers from "./assets/76ers.svg";
import flyers from "./assets/flyers.svg";
import phillies from "./assets/phillies.svg";
import Navbar from "./componets/nav";
import Footer from "./componets/footer";

type NavBoxProps = {
  logo: string;
  alt: string;
  link: string;
};

function NavBox(props: NavBoxProps) {
  return (
    <div className="flex items-center justify-center rounded-sm shadow-md h-full sm:h-40 lg:h-48 p-2">
      {/* <Link to={props.link} className="h-full w-full"> */}
      <img src={props.logo} alt={props.alt} className="h-full w-full " />
      {/* </Link> */}
    </div>
  );
}

function MainContainer() {
  return (
    <main className="grid grid-cols-2 grid-rows-2 gap-8 items-center mx-4 flex-1">
      <NavBox link="/eagles" alt="Eagles logo" logo={eaglesImage} />
      <NavBox link="/eagles" alt="Phillies logo" logo={phillies} />
      <NavBox link="/eagles" alt="Flyers logo" logo={flyers} />
      <NavBox link="/eagles" alt="Sixers logo" logo={sixers} />
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
