const Navbar = () => {
	return (
		<div className="container mx-auto fixed backdrop-blur">
			<nav className="flex justify-between p-5">
				<a href="#hero" className="text-3xl font-bold text-text hover:text-red-500">
					<h4 className="">RAG</h4>
				</a>
				<ul className="flex gap-14 text-text items-center font-medium tracking-wide">
					<li className="hover:text-primary">
						<a href="#technologies" className="hover:text-red-500">
							TECHNOLOGIES
						</a>
					</li>
					<li className="hover:text-primary">
						<a href="#projects" className="hover:text-red-500">
							PROJECTS
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
