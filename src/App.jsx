import DebitCard from "./components/DebitCard";
import Feedbacks from "./components/Feedbacks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PerfectCard from "./components/PerfectCard";
import Vision from "./components/Vision";

const App = () => {
	return (
		<>
			<Header />

			<main className='my-16 px-24 space-y-20'>
				<Hero />
				<Vision />
				<DebitCard />
				<PerfectCard />
				<Feedbacks />
			</main>

			<Footer />
		</>
	);
};

export default App;
