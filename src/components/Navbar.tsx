const Navbar = () => {
	return (
		<div className="container mx-auto fixed backdrop-blur">
			<nav className="flex justify-between p-5">
				<h1 className="text-3xl text-text font-bold">TURA</h1>
				<ul className="flex gap-14 text-text items-center font-medium tracking-wide">
					<li>PROJECTS</li>
					<li>TECHNOLOGIES</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
