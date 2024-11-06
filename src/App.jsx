import DebitCard from "./components/DebitCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PerfectCard from "./components/PerfectCard";

const App = () => {
	return (
		<>
			<Header />

			<main className='my-16 space-y-16'>
				<Hero />
				<DebitCard />
				<PerfectCard />
			</main>

			<Footer />
		</>
	);
};

export default App;
