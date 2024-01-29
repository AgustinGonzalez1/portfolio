import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="container mx-auto fixed backdrop-blur">
			<nav className="flex justify-between p-5">
				<NavLink to="#" className="text-3xl font-bold text-text hover:text-red-500">
					<h4 className="">RAG</h4>
				</NavLink>
				<ul className="flex gap-14 text-text items-center font-medium tracking-wide">
					<li className="hover:text-primary">
						<NavLink to="#" className="hover:text-red-500">
							PROJECTS
						</NavLink>
					</li>
					<li className="hover:text-primary">
						<NavLink to="#" className="hover:text-red-500">
							TECHNOLOGIES
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
