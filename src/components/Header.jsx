import Logo from "./Logo";

const Header = () => {
	return (
		<header className='flex items-center justify-between px-24 py-6'>
			<div className='flex gap-4 items-center'>
				<div className='w-16'>
					<Logo />
				</div>

				<h3 className='font-bold text-xl'>Wern Finance</h3>
			</div>

			<button className='border-2 border-primary font-bold px-8 py-3 rounded-3xl text-sm text-primary'>
				Contact
			</button>
		</header>
	);
};

export default Header;
