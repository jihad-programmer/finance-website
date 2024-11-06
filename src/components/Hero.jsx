import heroCard from "../assets/hero-card.svg";

const Hero = () => {
	return (
		<section className='flex gap-8'>
			<div className='space-y-6 w-1/2'>
				<h1 className='font-bold leading-tight text-5xl'>
					Spend your Cardano anywhere, anytime.
				</h1>

				<p className='text-secondary w-4/5'>
					Our user-friendly platform enables businesses and
					individuals to seamlessly convert and spend their crypto for
					everyday purchases.
				</p>

				<button className='bg-primary font-bold px-8 py-3 rounded-3xl text-sm'>
					Get Started
				</button>
			</div>

			<img className='w-1/2' src={heroCard} alt='hero card' />
		</section>
	);
};

export default Hero;
