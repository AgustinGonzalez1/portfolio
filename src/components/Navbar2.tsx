import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

const Navbar2 = () => {
	return (
		<div className="h-[calc(100vh-75px)] fixed top-[75px]">
			<nav className="flex flex-col justify-end p-5 h-full">
				<ul className="flex flex-col gap-5 text-text items-start font-medium tracking-wide">
					<li>
						<Link to="https://www.instagram.com/agus.devv/" target="_blank" rel="noreferrer noopener">
							<CiInstagram className="text-3xl  hover:text-red-500" />
						</Link>
					</li>
					<li>
						<Link to="https://github.com/AgustinGonzalez1" target="_blank" rel="noreferrer noopener">
							<FaGithubSquare className="text-3xl  hover:text-red-500" />
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar2;
