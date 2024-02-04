import { Link } from "react-router-dom";
import projects from "../../utils/projects";
import { Project } from "../../utils/projects";
import { FaAngleRight } from "react-icons/fa";

const Projects = () => {
	return (
		<section id="projects" className="min-h-screen mx-[70px] py-28 px-5 flex flex-col justify-between mt-[75px] items-center">
			<h2 className="text-5xl font-bold text-text hero-title mb-20">PROJECTS</h2>
			<div className="grid grid-cols-3 w-full gap-5">
				{projects.map((project: Project, index: number) => (
					<article className="flex flex-col gap-2" key={index}>
						<div className="bg-[#1e1e1e] px-5 py-10 contain-shadow">
							<img src={project.img} alt="" className="contain-shadow" />
						</div>
						<h4 className="text-xl font-bold text-text">{project.title}</h4>
						<Link to={project.link} className="flex items-center gap-1 text-red-500 hover:text-text">
							<p className="font-bold">see more</p> <FaAngleRight />
						</Link>
					</article>
				))}
			</div>
			<div></div>
		</section>
	);
};

export default Projects;
