import technologies from "../../utils/technologies";
import { Technology } from "../../utils/technologies";

const Technologies = () => {
	return (
		<section id="technologies" className="h-screen mx-24 px-5 flex py-28 flex-col justify-between items-center">
			<h2 className="text-5xl font-bold text-text hero-title">TECHNOLOGIES</h2>
			<div className="flex flex-wrap w-full gap-5 justify-center">
				{technologies.map(
					(technology: Technology, index: number): JSX.Element => (
						<div key={index} className="border-[1px] border-red-500 rounded-md contain-shadow bg-[#1e1e1e]">
							<p className="font-bold text-text py-2 px-4 text-lg">{technology.name}</p>
						</div>
					)
				)}
			</div>
			<div></div>
		</section>
	);
};

export default Technologies;
