import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar2 = () => {
	const [scrolled, setScrolled] = useState(false);

	const updateNavbarStyle = () => {
		const scrollPosition = window.scrollY;
		const halfScreen = window.innerHeight / 2;

		// Actualiza el estado 'scrolled' basado en la posición de desplazamiento
		setScrolled(scrollPosition > halfScreen);
	};

	// Agrega un efecto de montaje y desmontaje para el evento de desplazamiento
	useEffect(() => {
		window.addEventListener("scroll", updateNavbarStyle);

		// Limpia el evento al desmontar el componente
		return () => {
			window.removeEventListener("scroll", updateNavbarStyle);
		};
	}, []);

	return (
		<div className={`h-[calc(100vh-75px)] fixed top-[75px]`} id="navbar">
			<nav className="flex flex-col justify-end p-5 h-full">
				<ul className="flex flex-col gap-5 text-text items-start font-medium tracking-wide">
					<li className={`transition-opacity duration-300  ${scrolled ? "opacity-1" : "opacity-0"}`}>
						<Link
							className={` ${scrolled ? "" : "cursor-default"}`}
							to="https://www.instagram.com/agus.devv/"
							target="_blank"
							rel="noreferrer noopener">
							<CiInstagram className="text-3xl  hover:text-red-500" />
						</Link>
					</li>
					<li className={`transition-opacity duration-300 delay-100 ${scrolled ? "opacity-1" : "opacity-0"}`}>
						<Link
							className={` ${scrolled ? "" : "cursor-default"}`}
							to="https://github.com/AgustinGonzalez1"
							target="_blank"
							rel="noreferrer noopener">
							<FaGithubSquare className="text-3xl  hover:text-red-500" />
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar2;
