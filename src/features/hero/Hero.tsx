import { CiInstagram } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<header id="hero" className="h-screen mx-[70px] flex justify-center items-center">
			<div className="font-bold">
				<div className="flex justify-start ml-20 text-light">
					<p className="text-red-500">I AM</p>
				</div>
				<div className="flex justify-center text-9xl text-text">
					<h1 className="hero-title">AGUSTIN</h1>
				</div>
				<div className="flex justify-center items-end flex-col mr-10 text-light ">
					<div className="flex justify-center items-center gap-2">
						<p className="text-red-500">FULL STACK DEVELOPER</p>
						<Link to="https://www.instagram.com/agus.devv/" target="_blank" rel="noreferrer noopener">
							<CiInstagram className="text-3xl hover:text-red-500" />
						</Link>
					</div>
					<div className="flex justify-center items-center gap-2">
						<p className="text-red-500">MERN</p>
						<Link to="https://github.com/AgustinGonzalez1" target="_blank" rel="noreferrer noopener">
							<FaGithubSquare className="text-3xl hover:text-red-500" />
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
