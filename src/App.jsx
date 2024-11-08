import DebitCard from "./components/DebitCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PerfectCard from "./components/PerfectCard";
import Vision from "./components/Vision";

const App = () => {
  return (
    <main className="pb-[569px] overflow-x-hidden">
      <Header />
      <div className="w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto ">
        <div className="space-y-[128px]">
          <Hero />
          <Vision />
          <DebitCard />
          <PerfectCard />
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default App;
