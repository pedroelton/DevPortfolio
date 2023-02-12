/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import ListTopics from "./ListTopics";
import bgResume from "../../assets/bgResume.webp";
import imageMockup from "../../assets/UX-UI-app-presentation-mockup-min-scaled.webp";

const Resume = () => {
	return (
		<section
			className="w-screen h-auto"
			style={{
				backgroundImage: `url(${bgResume.src})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
				backgroundPosition: "center center",
			}}>
			<main
				id="skills"
				className="flex justify-center align-middle lg:pb-24 lg:w-[1400px] m-auto grid-cols-1 lg:grid-cols-2 lg:space-x-16 flex-wrap lg:flex-nowrap p-8 lg:p-0 space-y-12 lg:space-y-0">
				<div className="flex flex-col space-y-5 md:w-[50vw] w-full">
					<Image
						src={imageMockup}
						alt="Mobile financial app mockup"
						className="hover:scale-110 transition-all duration-300"
						loading="lazy"
					/>
				</div>
				<div className="flex flex-col space-y-5 md:w-[50vw] w-full md:px-0">
					<h2 className="text-4xl font-bold md:w-8/12 w-100">
						A quick resume of skills and experiences
					</h2>
					<div className="h-2 bg-indigo-600 w-24" />
					<p className="md:w-[540px] leading-relaxed md:text-lg text-md font-light text-left">
						I gathered experience in different areas of design,
						development, marketing and management and it's an asset,
						since this broad vision helps me to develop better
						solutions. I can add value for your company by adding to
						my work the following skills:
					</p>
					<ul>
						<ListTopics
							icon="check"
							topic="React, and javaScript front-end developer"
						/>
						<ListTopics
							icon="check"
							topic="UI & UX designer"
						/>
						<ListTopics
							icon="check"
							topic="React Native mobile developer"
						/>
						<ListTopics
							icon="check"
							topic="Design audit and management"
						/>
						<ListTopics
							icon="check"
							topic="Leadership and communication skills"
						/>
					</ul>
					<p className="md:w-[540px] leading-relaxed md:text-lg text-md text-left">
						<a
							href="#contact"
							className=" underline underline-offset-2 hover:text-indigo-500 font-bold transition-all duration-300">
							How about a video call with me?
						</a>
						<br />
						<span> I'm looking forward to meet you.</span>
					</p>
				</div>
			</main>
		</section>
	);
};

export default Resume;
