import DebitCard from "./components/DebitCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PerfectCard from "./components/PerfectCard";
import Vision from "./components/Vision";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-[#1a1e1c] font-mplus1 text-white bg-[url(/bg.svg)] bg-no-repeat bg-cover">
      <Header />
      <div className="w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto">
        <div className="space-y-[128px]">
          <Hero />
          <Vision />
          <DebitCard />
          <PerfectCard />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default App;
