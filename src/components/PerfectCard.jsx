import perfectCard from "../assets/perfect-card.svg";

const PerfectCard = () => {
	return (
		<section className='flex gap-8 items-center px-24'>
			<img className='w-1/2' src={perfectCard} alt='hero card' />

			<div className='space-y-6 w-1/2'>
				<h2 className='font-bold leading-tight text-3xl'>
					Find the Perfect Card for You
				</h2>

				<p className='text-secondary w-4/5'>
					Unlocking the Power of Crypto, Both Virtually and Physically
					Manage your crypto effortlessly and spend it seamlessly with
					Wern. Our virtual card allows for instant and secure online
					transactions, while the physical Wern Card empowers you to
					convert and spend your crypto at millions of merchants
					worldwide. Experience the flexibility and convenience of
					both options, all within the secure and user-friendly Wern
					ecosystem.
				</p>

				<button className='bg-primary font-bold px-8 py-3 rounded-3xl text-sm'>
					Learn More
				</button>
			</div>
		</section>
	);
};

export default PerfectCard;
