import DebitCard from "./components/DebitCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PerfectCard from "./components/PerfectCard";
import Vision from "./components/Vision";

const App = () => {
  return (
    <main className="max-w-screen-[1440px] mx-auto">
      <Header />

      <div className="my-16 px-24 space-y-20">
        <Hero />
        <Vision />
        <DebitCard />
        <PerfectCard />
      </div>

      <Footer />
    </main>
  );
};

export default App;
