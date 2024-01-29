import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<main className="container mx-auto">
				<Navbar />
				<Navbar2 />
				<section className="h-screen mx-[70px]  flex justify-center items-center">
					<div className="font-bold">
						<div className="flex justify-start ml-20 text-light">
							<p>I AM</p>
						</div>
						<div className="flex justify-center text-9xl text-text">
							<h1>AGUSTIN</h1>
						</div>
						<div className="flex justify-center items-end flex-col mr-20 text-light">
							<p>FULL STACK DEVELOPER</p>
							<p>MERN</p>
						</div>
					</div>
				</section>
			</main>
		),
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
