const Hero = () => {
	return (
		<header id="hero" className="h-screen mx-[70px]  flex justify-center items-center">
			<div className="font-bold">
				<div className="flex justify-start ml-20 text-light">
					<p>I AM</p>
				</div>
				<div className="flex justify-center text-9xl text-text">
					<h1 className="hero-title">AGUSTIN</h1>
				</div>
				<div className="flex justify-center items-end flex-col mr-20 text-light">
					<p>FULL STACK DEVELOPER</p>
					<p>MERN</p>
				</div>
			</div>
		</header>
	);
};

export default Hero;
