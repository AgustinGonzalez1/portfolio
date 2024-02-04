import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./features/hero/Hero";
import Technologies from "./features/technologies/Technologies";
import Projects from "./features/projects/projects";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<main className="container mx-auto">
				<Navbar />
				<Navbar2 />
				<Hero />
				<Projects />
				<Technologies />
			</main>
		),
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
