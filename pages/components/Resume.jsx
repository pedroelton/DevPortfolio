import React from "react";
import ListTopics from "./ListTopics";

const Resume = () => {
	return (
		<section
			className="w-screen h-auto"
			style={{
				backgroundImage:
					'url("https://pedroelton.com/wp-content/uploads/2022/12/LinesApp.png")',
				backgroundRepeat: "no-repeat",
				backgroundSize: "35%",
				backgroundPosition: "left",
			}}>
			<main
				id="skills"
				className="flex justify-center align-middle lg:pb-24 lg:w-[1400px] m-auto grid-cols-1 lg:grid-cols-2 lg:space-x-16 flex-wrap lg:flex-nowrap p-8 lg:p-0 space-y-12 lg:space-y-0">
				<div className="flex flex-col space-y-5 md:w-[50vw] w-full">
					<img
						src="https://pedroelton.com/wp-content/uploads/2021/12/UX-UI-app-presentation-mockup-min-scaled.webp"
						alt="Mobile financial app mockup"
						className="hover:scale-150 transition-all duration-300"
						loading="lazy"
					/>
				</div>
				<div className="flex flex-col space-y-5 md:w-[50vw] w-full md:px-0">
					<h2 className="text-4xl font-bold md:w-8/12 w-100">
						A quick resume of skills and experiences
					</h2>
					<div className="h-2 bg-indigo-600 w-24" />
					<p className="text-zinc-600 md:w-[540px] leading-relaxed md:text-lg text-md font-light text-left">
						I gathered experience in different areas of design,
						development, marketing and management and it’s an asset,
						since this broad vision helps me to develop better
						solutions. I can add value for your company by adding to
						my work the following skills:
					</p>
					<ul>
						<ListTopics
							icon="check"
							topic="React, javaScript and jQuery front-end developer"
						/>
						<ListTopics
							icon="check"
							topic="UI & UX designer"
						/>
						<ListTopics
							icon="check"
							topic="Web designer"
						/>
						<ListTopics
							icon="check"
							topic="Marketing Strategies"
						/>
						<ListTopics
							icon="check"
							topic="Leadership and communication skills"
						/>
					</ul>
					<p className="text-zinc-600 md:w-[540px] leading-relaxed md:text-lg text-md text-left">
						<a
							href="#contact"
							className="text-slate-900 underline underline-offset-2 hover:text-indigo-500 font-bold transition-all duration-300">
							How about a video call with me?
						</a>
						<span> I'm looking forward to meet you.</span>
					</p>
				</div>
			</main>
		</section>
	);
};

export default Resume;
