import debitCard from "../assets/debit-card.svg";

const DebitCard = () => {
	return (
		<section className='flex gap-8 items-center'>
			<div className='space-y-6 w-1/2'>
				<h2 className='font-bold leading-tight text-3xl'>
					Wern Debit Card
				</h2>

				<p className='text-secondary w-4/5'>
					More than just a card, it&apos;s a bridge to a new financial
					experience. Embrace the simplicity and security of spending
					your Cardano with the Wern Card.
				</p>

				<div className='space-y-2'>
					<button className='bg-primary font-bold px-8 py-3 rounded-3xl text-sm'>
						Create New Card
					</button>

					<p className='text-primary'>Will be available soon</p>
				</div>
			</div>

			<img className='w-1/2' src={debitCard} alt='hero card' />
		</section>
	);
};

export default DebitCard;
